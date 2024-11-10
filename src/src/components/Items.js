import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import { useParams } from 'react-router-dom';
import Header from './Header';
import "../style2.css";


export default function Items() {
    const { id } = useParams(); 
    const [book, setBook] = useState();

    useEffect(() => {
        fetch("book_card.json")
            .then(response => response.json())
            .then(data => setBook(data));
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }
    

    return (
        <div>
            <Header />
            <div className='items-page'>
                <div className='items-photo'>
                    <img src={`images/${book.imageUrl}`} alt={book.title} />
                </div>
                <div className='items-content'>
                    <div className='items-text'>
                        <h2>{`book.title`}</h2>
                        <p>{book.description}</p>
                        <p>Author: {book.author}</p>
                        <p>Price: {book.price} $</p>
                    </div>
                    <div className='items-filter'>
                        <select>
                            <option>Filter 1</option>
                            <option>Filter 2</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}