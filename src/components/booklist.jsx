import React, { Component } from 'react'
import '../components/style/card.css'
export const BookList = ({book,DeleteItem}) => {
    let styles={"box-shadow":"4px 4px 4px gray"}
    return <>
   <div className="card" style={styles}>
       <div className="card-header">Title : {book.title}</div>
       <div className="card-body"> Price : {book.price}</div>
       <div className="card-footer"><button className="btn btn-danger" onClick={()=>DeleteItem(book)} >Delete</button>
</div>
   </div>
    </>
}
