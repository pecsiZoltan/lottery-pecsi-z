package com.homework.lotterybackend.repository;

import com.homework.lotterybackend.domain.LotteryUser;
import com.homework.lotterybackend.domain.UserDto;
import com.homework.lotterybackend.domain.UserListItem;

import java.util.List;

public interface UserRepository {

    List<UserListItem> findAllforLoginList();

    UserDto findByName(String name);

    List<LotteryUser> getUsers();

}
