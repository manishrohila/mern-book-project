import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';
import BookCards from '../components/BookCards';

export default function BestSellerBooks () {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,6)))
    },[])
  return (
    <div>
      <BookCards books={books} headline='Best Seller Books'/>
    </div>
  )
}
