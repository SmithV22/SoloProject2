
import React from 'react' ;
import { Link } from 'react-router-dom' ;
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import useStyles from './Navbar.styles' ;
import Neia from '../images/logo.png' ;
import SearchBar from '../Search/SearchBar' ;
import Quote from '../Quote/Quote';

const Navbar = () => {
    const classes = useStyles() ;

    return (
        <div>
            <AppBar position='static' maxwidth style={{ background: '#252C6F' }} className={ classes.bar }>
                <Toolbar className={ classes.toolbar }>
                    <IconButton size='medium' color='inherit' aria-label='logo'>
                    <img className={ classes.imgage } src={ Neia } alt='logo' height='60' />
                    </IconButton >
                    
                    <Typography         variant='h3'compnonent='div' className={ classes.heading }> Quoting Your Thoughts </Typography>
                    
                </Toolbar>
            </AppBar>
            <div className={ classes.links}>
                <Typography className={ classes.link} component={ Link } to ='/' variant='body2' color='primary'> Home </Typography>
                <Typography className={ classes.link} component={ Link } to ='/journal' variant='body2' color='primary'>Journals </Typography>
                <Typography className={ classes.link} component={ Link } to ='/quote/add' variant='body2' color='primary'>Add Quote</Typography>
            </div>
            <div><SearchBar placeholder='Search For Quote By Author Name' data={ Quote }/></div>
        </div>
    )
}

export default Navbar ;