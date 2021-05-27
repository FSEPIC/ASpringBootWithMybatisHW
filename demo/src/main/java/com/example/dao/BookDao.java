package com.example.dao;

import com.example.entity.Book;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookDao {

    public Book getBookById(@Param("bookid") String bookid);

    public List<Book> getBookByName(@Param("name") String name);

    public List<Book> getAllBook();

    public int deleteById(@Param("bookid") String bookid);

    public int updateOutb(@Param("outb") boolean outb,@Param("bookid") String bookid);

    public int insertNewBook(@Param("bookid") String bookid,@Param("name") String name,@Param("outb") boolean outb);
}
