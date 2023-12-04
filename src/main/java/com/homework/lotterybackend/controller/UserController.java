package com.homework.lotterybackend.controller;

import com.homework.lotterybackend.domain.UserDto;
import com.homework.lotterybackend.domain.UserListItem;
import com.homework.lotterybackend.repository.MockUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private MockUserRepository mockUserRepository;

    @GetMapping("/me")
    public ResponseEntity<UserDto> getUserData(Principal principal) {
        return new ResponseEntity<>(
                mockUserRepository
                        .findByName(principal.getName()), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<UserListItem>> getUserList() {
        return new ResponseEntity<>(mockUserRepository.findAllforLoginList(), HttpStatus.OK);
    }

}
