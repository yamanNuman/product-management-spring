package com.ymnn.productmanagement.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private int id;

    @NotBlank(message = "Product name is mandatory")
    private String name;

    @NotBlank(message = "Supplier name is mandatory")
    private String supplier;

    @NotNull(message = "Product stock is mandatory")
    @Min(0)
    private int stock;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<Price> price;
}
