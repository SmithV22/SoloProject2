
import React, { useState, useEffect } from 'react' ;
import axios from 'axios' ;
import { useParams } from 'react-router-dom' ;
import { Box, Typography, TextField, Button, Container } from '@material-ui/core' ;
import useStyles from './Form.styles' ;

const JournalForm = (props ) => {
    const classes = useStyles()
    const { id } = (useParams()) ;
    
    const { oldJournal } = props ;
    const [ errors, setErrors ] = useState({}) ;
    const [ quote, setQuote ] = useState({}) ;

    const [ journal, setJournal ] = useState(
        props.oldJournal || {
        entry: '',
        writtenBy: '',
        quoted: id ,
    }) ;
    const quoteId = journal.quoted ;
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes/${quoteId}`)
        .then((res) => {
            console.log(quoteId) ;
            console.log(res.data) ;
            setQuote(res.data) ;
        })
        .catch((err) => {
            console.log("Error from DETAILS", err)
        })
    }, [quoteId]) ;
    
    useEffect(()=> {
        if (props.oldJournal) {
            setJournal(props.oldJournal) ;
        }
    }, [props.oldJournal]) ;

    const submitHandler = (e) => {
        e.preventDefault() ;
        props.submitHandler(journal, setErrors) ;
    } ;

    const changeHandler = (e) => {
        setJournal({ ...journal, [e.target.name]: e.target.value }) ;
        
    } ;
    console.log(journal) ;
    return (
        <div className={ classes.container}>
        
            <Container maxwidth="sm" >
                <Box >
                    <Typography color='primary' variant='h5' style={{ fontFamily: 'times new roman', fontStyle: 'italic'  }}>{ quote.quote}</Typography>
                    <Typography>{ quote.authorFirstName } { quote.authorLastName }</Typography>
                </Box> 
                <form onSubmit={submitHandler} >
                <Box
                    className={ classes.formContainer}
                    
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '25ch'},  
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                    <div>
                        <Typography>Journal Entry: </Typography>
                        { errors.entry && <p className="error">{ errors.entry.message }</p> }
                        <TextField
                            className={ classes.inputs }
                            color='primary'
                            id="outlined-multiline"
                            multiline
                            required
                            margin='normal'
                            variant= 'outlined'
                            maxRows={4}
                            value={ journal.entry }
                            onChange={ changeHandler }
                            name='entry'
                        />
                    </div>
                    <div>
                        <Typography>Written By: </Typography>
                        { errors.writtenBy && <p className="error">{ errors.writtenBy.message }</p> }
                        <TextField
                            className={ classes.inputs }
                            required
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            id="outlined-required"
                            value={ journal.writtenBy }
                            onChange={ changeHandler }
                            name='writtenBy'
                            />
                    </div>
                    <div>
                        <TextField
                            type='hidden'
                            value={ journal.quoted }
                            name='quoted'
                            />
                    </div>
                    <Button className={ classes.button }variant="contained" background="#3c52b2" type='submit'>{ props.buttonText }</Button>
                    </div>
                </Box>
                </form>
            </Container>
        </div>
    )
}
export default JournalForm ;