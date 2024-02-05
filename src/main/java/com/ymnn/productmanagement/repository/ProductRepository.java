package com.ymnn.productmanagement.repository;

import com.ymnn.productmanagement.entity.Product;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface ProductRepository extends JpaRepository<Product,Integer> {
}
