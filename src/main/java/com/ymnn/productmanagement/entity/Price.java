package com.ymnn.productmanagement.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Price {

    @Id
    @Column(name = "price_id")
    @GeneratedValue
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Integer id;

    @NotNull(message = "Product price is mandatory.")
    @DecimalMin(value = "0.0",message = "Product price must be greater than 0.0")
    private double price;

    @NotNull(message = "Price date is mandatory.")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Product product;
}
