import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Header_catalog from './Header_catalog'
import "../style2.css";

function Catalog() {
    const [books_cards, setBooks] = useState([]);

    useEffect(() => {
        fetch("book_card.json")
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <Header_catalog />
            <div className="catalog">
                <h1>Catalog Page</h1>
                <Filter />
                {books_cards.map(bookk => (
                    <div key={bookk.id} className="book-card">
                        <img className="catalog-img" src={`images/${bookk.imageUrl}`} alt={bookk.title} />
                        <div className="book-card-info">
                            <h3 className="book-card-topic">{bookk.title}</h3>
                            <p className='book-author'>{bookk.author}</p>
                            <p className="book-card-description">{bookk.description}</p>
                            <p className='book-price'>{bookk.price} $</p>
                        </div>
                        <button className='home-button'>View more</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
