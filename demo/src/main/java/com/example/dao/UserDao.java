package com.example.dao;

import com.example.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {
    //使用@Param
    public User getUserById(@Param("id") int id);

    public List<User> getUserByAge(@Param("age") int age);

}
