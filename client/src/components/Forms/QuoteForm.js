
import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button, Container } from '@material-ui/core';
import useStyles from './Form.styles' ;

const QuoteForm = (props) => {
    const classes = useStyles() ;
    const [errors, setErrors] = useState({}) ;
    const { oldQuote } = props ;
    const [quote, setQuote] = useState(
        props.oldQuote || {
        quote: '',
        authorFirstName: '',
        authorLastName: '',
        source: '',
    }) ;

    useEffect(()=> {
        if (props.oldQuote) {
            setQuote(props.oldQuote) ;
        }
    }, [props.oldQuote]) ;

    const submitHandler = (e) => {
        e.preventDefault() ;
        props.submitHandler(quote, setErrors) ;
    } ;

    const changeHandler = (e) => {
        setQuote({...quote, [e.target.name]: e.target.value}) ;
        }

    return (
        <div className={ classes.container}>
            <Typography className={ classes.title }>Add A Quote</Typography>
            <Container maxwidth="sm" >
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
                        <Typography>Quote</Typography>
                        { errors.quote && <p className="error">{ errors.quote.message }</p> }
                        <TextField
                            className={ classes.inputs }
                            color='primary'
                            id="outlined-multiline"
                            multiline
                            required
                            margin='normal'
                            variant= 'outlined'
                            maxRows={4}
                            value={ quote.quote }
                            onChange={ changeHandler }
                            name='quote'
                        />
                    </div>
                    <div>
                        <Typography>Author First Name</Typography>
                        { errors.authorFirstName && <p className="error">{ errors.authorFirstName.message }</p> }
                        <TextField
                            className={ classes.inputs }
                            required
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            id="outlined-required"
                            value={ quote.authorFirstName }
                            onChange={ changeHandler }
                            name='authorFirstName'
                            />
                    </div>
                    <div>
                        <Typography>Author Last Name</Typography>
                        { errors.authorLastName && <p className="error">{ errors.authorLastName.message }</p> }
                        <TextField
                            className={ classes.inputs }
                            required
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            id="outlined-required"
                            value={ quote.authorLastName }
                            onChange={ changeHandler }
                            name='authorLastName'
                            />
                    </div>
                    <div>
                        <Typography>Source</Typography>
                        { errors.source && <Typography className="error">{ errors.source.message }</Typography> }
                        <TextField
                            className={ classes.inputs }
                            required
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            id="outlined-required"
                            value={ quote.source }
                            onChange={ changeHandler }
                            name='source'
                            />
                    </div>
                    <Button className={ classes.button }variant="contained" background="#3c52b2" type='submit'>{ props.buttonText }</Button>
                    </div>
                </Box>
                </form>
            </Container>
        </div>
    ) ;
}

export default QuoteForm;