package com.example.controller;

import com.example.entity.Book;
import com.example.service.BookService;
import org.apache.ibatis.annotations.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/bookapi")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/getbookbyid")
    public Book getBook(@RequestParam("bookid") String bookid){
        return bookService.queryBook(bookid);
    }

    @GetMapping("/getbookbyname")
    public List<Book> getbook2(@RequestParam("name") String name){
        return bookService.queryBook2(name);
    }

    @GetMapping("/getallbook")
    public List<Book> getallbook(){
        return bookService.getAllBook();
    }

    @DeleteMapping("/deletbyid")
    public int deletbook(@RequestParam("bookid") String bookid){
        return bookService.deletBook(bookid);
    }

    @PostMapping("/updateoutb")
    public int updeoutb(@RequestParam("outb") String outb,@RequestParam("bookid") String bookid){
        boolean o;
        System.out.println(bookid);
        System.out.println(outb);
        if(outb.equals("否")){
            o = Boolean.TRUE;
        }else{
            o = Boolean.FALSE;
        }
        return bookService.updateOutb(o,bookid);
    }

    @PostMapping("/insertnewbook")
    public int insertnewbook(@RequestParam("bookid")String bookid,@RequestParam("name")String name,@RequestParam("outb")String outb){
        boolean o;
        if(outb.equals("是")){
            o = Boolean.TRUE;
        }else{
            o = Boolean.FALSE;
        }
        return bookService.insertNewBook(bookid,name,o);
    }
}
