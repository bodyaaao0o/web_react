import React from 'react';
import "../style2.css";
import { useState, useEffect } from 'react';
import Header from './Header';


export default function Home() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("books.json")
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <Header />
            <div className='home'>
                <div className='home-top'>
                    <img src='/images/3.jpg' alt="3" />
                    <div className='home-top-text'>
                        <h1>dsfdsf</h1>
                        <p> fsdfsfdsfdddddddddddddddddddddddddddddddddddddddddd
                            dddddddddddddddddddddddddddddddddddddddddddddddddd
                            ddddddddddddddddddddddddddddddddddddddddddddddddddd
                            dddddddddddddaasdasdas
                            ddsadadsgfsdgasgadfgadfgadsfgasdfgadf
                            sgsdf
                            gsdf
                            gsdfgsdfgsdfgsdfgsdfgsdfgdsfgdfsg
                        </p>

                    </div>
                </div>
                <div className='home-grid'>

                    {
                        books.map(book => (
                            <div key={book.id} className='book-card'>
                                <img src={`images/${book.image}`} alt={book.topic} />
                                <div className='book-card-info'>
                                    <h3 className='book-card-topic'>{book.topic}</h3>
                                    <p className='book-card-description'>{book.description}</p>

                                </div>

                            </div>
                        ))
                    }



                </div>
                <button className='home-button'>View more</button>
            </div>
        </div>
    );
}