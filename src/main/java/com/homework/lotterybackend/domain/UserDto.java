package com.homework.lotterybackend.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDto {

    private Long id;

    private String name;

    private String role;

    public UserDto(LotteryUser lotteryUser) {
        this.id = lotteryUser.getId();
        this.role = lotteryUser.getRole().toString();
        this. name = lotteryUser.getName();
    }

}
