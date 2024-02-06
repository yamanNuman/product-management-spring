package com.ymnn.productmanagement.controller;

import com.ymnn.productmanagement.entity.Product;
import com.ymnn.productmanagement.exception.ProductNotFoundException;
import com.ymnn.productmanagement.repository.ProductRepository;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@SecurityRequirement(name = "Bearer Authentication")
@Tag(name = "Product", description = "Product information transactions.")
public class ProductController {
    private final ProductRepository productRepository;

    @GetMapping(path = "/products")
    public List<Product> retrieveAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping(path = "/product/{id}")
    public ResponseEntity<Product> retrieveProductById(@PathVariable("id") int id){
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product not found with the given id : " + id));
        return  ResponseEntity.ok(product);
    }

    @PostMapping(path = "/product")
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PutMapping(path = "/product/{id}")
    public ResponseEntity<Product> updateProduct(@Valid @RequestBody Product product, @PathVariable("id") int id) {
        Product updateProduct =  productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product not found with the given id : " + id));
        updateProduct.setName(product.getName());
        updateProduct.setSupplier(product.getSupplier());
        updateProduct.setStock(product.getStock());
        productRepository.save(updateProduct);
        return new ResponseEntity<>(updateProduct,HttpStatus.OK);
    }

    @DeleteMapping(path = "/product/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") int id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product not found with the given id : " + id));
        productRepository.delete(product);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
