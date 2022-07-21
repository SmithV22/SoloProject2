
import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom';

import QuoteForm from '../Forms/QuoteForm' ;

const QuoteNew = () => {
    const navigate = useNavigate() ;

    const submitHandler = (quote, setErrors) => {
        axios.post('http://localhost:8000/api/quotes', quote) 
        .then((res) => {
            console.log(res.data) ;
            navigate('/') ;
        })
        .catch((err) => {
            console.log('Error from CREATE', err.response.data.error)
            setErrors(err.response.data.error.errors)
        })
    } 

    return (
        <div>
            <QuoteForm submitHandler={ submitHandler } buttonText={ 'Add Quote' } />
        </div>
    )
}

export default QuoteNew ;