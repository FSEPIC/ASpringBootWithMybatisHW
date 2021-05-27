package com.example.service;

import com.example.dao.UserDao;
import com.example.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")
public class UserService {

    @Autowired
    private UserDao userDao;

    public User queryUser(int id){
        return userDao.getUserById(id);
    }
    public List<User> queryUser2(int age){
        return userDao.getUserByAge(age);
    }
    /*传递多个参数我们可以用 Map 来实现
public List<User> queryUser4(Integer age, Integer start, Integer move){
    Map<String,Object> hashMap=new HashMap<>();
    hashMap.put("age",age);
    hashMap.put("start",start);
    hashMap.put("move",move);
    return userDao.selectById4(hashMap);
}
*/
}
