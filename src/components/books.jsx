import React, { Component, useState } from 'react'
import { AddBook } from './addbook'
import { BookList } from './booklist'
export const Books = (params) => {
    
    const [books,setBooks]=useState(
        [{"title":"angular","price":200},
        {"title":"node","price":400},
        {"title":"react","price":800}
    ]
    )
    const book=(title,price)=>{
        const mybook={title,price}
        setBooks([...books,mybook])
    }
   const DeleteItem=(book)=>{
        setBooks(books.filter((e)=>e!=book))
        }
    return <>
    <AddBook book={book} />
    <hr/>
    {
        books.map((e,i)=><BookList book={e} DeleteItem={DeleteItem} />)
    }
    
    </>
}
