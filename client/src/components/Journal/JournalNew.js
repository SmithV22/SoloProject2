
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios' ;
import JournalForm from '../Forms/JournalForm' ;

const JournalNew = () => {
    const navigate = useNavigate() ;

    const submitHandler = (journal, setErrors) => {
        axios.post('http://localhost:8000/api/journals', journal) 
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
            <h3>Add Journal</h3>
            <div>
                <JournalForm submitHandler={ submitHandler } buttonText={'Add Journal'} />
            </div>
        </div>
    )
}

export default JournalNew;