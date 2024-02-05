package com.ymnn.productmanagement.controller;

import com.ymnn.productmanagement.entity.Price;
import com.ymnn.productmanagement.entity.Product;
import com.ymnn.productmanagement.exception.ProductNotFoundException;
import com.ymnn.productmanagement.repository.PriceRepository;
import com.ymnn.productmanagement.repository.ProductRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class PriceController {
    private final PriceRepository priceRepository;
    private final ProductRepository productRepository;

    @GetMapping(path = "/products/prices")
    public List<Price> retrieveAllPrices(){
        return priceRepository.findAll();
    }

    @GetMapping(path = "/product/{productId}/price")
    public ResponseEntity<List<Price>> retrievePriceByProductFk(@PathVariable("productId") int productId) {
        Optional<Product> product =  productRepository.findById(productId);
        if(product.isEmpty()){
            throw new ProductNotFoundException("Product not found with the given id : " + productId);
        }
        return new ResponseEntity<>(product.get().getPrice(), HttpStatus.OK);
    }

    @GetMapping(path = "/product/{id}/price/most-recent")
    public ResponseEntity<Price> mostRecentPriceByProductId(@PathVariable("id") int id){
        Price price = priceRepository.mostRecentRecord(id);
        if(price == null) {
            throw new ProductNotFoundException("Product not found with the given id : " + id);
        }
        return new ResponseEntity<>(price,HttpStatus.OK);
    }

    @PostMapping(path = "/product/{id}/price")
    public ResponseEntity<Price> createPrice(@PathVariable("id") int id,@Valid @RequestBody Price price){
        Optional<Product> product = productRepository.findById(id);
        if(product.isEmpty()) {
            throw new ProductNotFoundException("Product not found with the given id : " + id);
        }
        price.setProduct(product.get());
        priceRepository.save(price);
        return new ResponseEntity<>(price, HttpStatus.CREATED);
    }

    @PutMapping("/product/{id}/price/{productId}")
    public ResponseEntity<Price> updatePriceByProductId(@PathVariable("id") int id, @PathVariable("productId") int productId,@RequestBody Price price) {
        Optional<Product> product = productRepository.findById(id);
        if(product.isEmpty()) {
            throw new ProductNotFoundException("Product not found with the given id : " + id);
        }
        List<Price> prices = product.get().getPrice();
        for(Price x : prices) {
            if(x.getId() == productId) {
                x.setDate(price.getDate());
                x.setPrice(price.getPrice());
                priceRepository.save(x);
                return new ResponseEntity<>(price,HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(path = "/product/price/{productId}")
    public ResponseEntity<String> deletePricesByProductId(@PathVariable("productId") int productId){
        Optional<Product> product = productRepository.findById(productId);
        if(product.isEmpty()){
            throw new ProductNotFoundException("Product not found with the given id : " + productId);
        }
        priceRepository.deletePricesByProductId(productId);
        return ResponseEntity.ok("All record deleted.");
    }

    @DeleteMapping(path = "/product/{id}/price/{price_id}")
    public ResponseEntity<String> deletePriceByPriceId(@PathVariable("id") int id, @PathVariable("price_id") int priceId){
        Optional<Product> product = productRepository.findById(id);
        if(product.isEmpty()){
            throw new ProductNotFoundException("Product not found with the given id : " + id);
        }
        List<Price> prices = product.get().getPrice();
        for(Price x : prices) {
            if(x.getId() == priceId){
                priceRepository.deletePriceByPriceId(priceId,id);
                return ResponseEntity.ok("Record deleted.");
            }
        }
        return ResponseEntity.badRequest().body("Price id not found.");
    }
}
