package com.homework.lotterybackend.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class LotteryUser {

    private Long id;

    private String name;

    private LotteryRole role;

    private String password;

}
