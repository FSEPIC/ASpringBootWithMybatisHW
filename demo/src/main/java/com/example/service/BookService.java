package com.example.service;

import com.example.dao.BookDao;
import com.example.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("BookService")
public class BookService {
    @Autowired
    private BookDao bookDao;

    public Book queryBook(String bookid){
        return bookDao.getBookById(bookid);
    }

    public List<Book> queryBook2(String name){
        return bookDao.getBookByName(name);
    }

    public List<Book> getAllBook(){
        return bookDao.getAllBook();
    }

    public int deletBook(String bookid){
        return bookDao.deleteById(bookid);
    }

    public int updateOutb(boolean outb,String bookid){
        return bookDao.updateOutb(outb,bookid);
    }

    public int insertNewBook(String bookid,String name,boolean outb){
        return bookDao.insertNewBook(bookid,name,outb);
    }
}
