package com.mmcorp.farhousehotel.service;

import com.mmcorp.farhousehotel.model.User;

import java.util.List;


public interface IUserService {
    User registerUser(User user);
    List<User> getUsers();
    void deleteUser(String email);
    User getUser(String email);
}
