package com.homework.lotterybackend.repository;

import com.homework.lotterybackend.domain.LotteryRole;
import com.homework.lotterybackend.domain.LotteryUser;
import com.homework.lotterybackend.domain.UserDto;
import com.homework.lotterybackend.domain.UserListItem;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MockUserRepository implements UserRepository {

    private final List<LotteryUser> users = List.of(
            LotteryUser.builder()
                    .id(1L)
                    .name("Adam")
                    .role(LotteryRole.PLAYER)
                    .password("test1234")
                    .build(),
            LotteryUser.builder()
                    .id(2L)
                    .name("Bonnie")
                    .role(LotteryRole.PLAYER)
                    .password("test1234")
                    .build(),
            LotteryUser.builder()
                    .id(3L)
                    .name("Carl")
                    .role(LotteryRole.PLAYER)
                    .password("test1234")
                    .build(),
            LotteryUser.builder()
                    .id(4L)
                    .name("Diana")
                    .role(LotteryRole.GUEST)
                    .password("test1234")
                    .build(),
            LotteryUser.builder()
                    .id(5L)
                    .name("Ellie")
                    .role(LotteryRole.GUEST)
                    .password("test1234")
                    .build(),
            LotteryUser.builder()
                    .id(6L)
                    .name("Frank")
                    .role(LotteryRole.GUEST)
                    .password("test1234")
                    .build()
    );

    public List<UserListItem> findAllforLoginList() {
        return users.stream().map(UserListItem::new).toList();
    }

    public UserDto findByName(String name) {
        return users.stream()
                .filter(lotteryUser -> lotteryUser.getName().equals(name))
                .map(UserDto::new)
                .findFirst()
                .orElseThrow();
    }

    public List<LotteryUser> getUsers() {
        return users;
    }
}
