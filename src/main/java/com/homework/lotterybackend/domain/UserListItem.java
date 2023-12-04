package com.homework.lotterybackend.domain;

import lombok.Data;

@Data
public class UserListItem {

    private Long id;

    private String name;

    public UserListItem(LotteryUser lotteryUser) {
        this.id = lotteryUser.getId();
        this.name = lotteryUser.getName();
    }

}
