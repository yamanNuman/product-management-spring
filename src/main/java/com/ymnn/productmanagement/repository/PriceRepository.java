package com.ymnn.productmanagement.repository;

import com.ymnn.productmanagement.entity.Price;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

@Transactional
public interface PriceRepository extends JpaRepository<Price,Integer> {
    @Query(value ="SELECT * FROM PRICE WHERE product_id = :productId ORDER BY DATE DESC LIMIT 1" , nativeQuery = true)
    Price mostRecentRecord(int productId);

    @Modifying
    @Query(value ="DELETE FROM PRICE WHERE product_id = :productId" ,nativeQuery = true)
    void deletePricesByProductId(int productId);

    @Modifying
    @Query(value ="DELETE FROM PRICE WHERE price_id = :priceId AND product_id = :productId" ,nativeQuery = true)
    void deletePriceByPriceId(int priceId,int productId);
}
