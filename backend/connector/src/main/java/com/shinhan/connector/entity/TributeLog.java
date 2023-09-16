package com.shinhan.connector.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TributeLog {
    @Id @GeneratedValue
    @Column(name = "tribute_log_no")
    private Integer no;
    @Column(name = "age_range")
    private Integer ageRange;
    @Column
    private String category;
    @Column(name = "avg_price")
    private Long avgPrice;
    @Column
    private Integer count;
    @Column
    private String gender;
}
