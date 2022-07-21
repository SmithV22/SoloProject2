
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        
        margin: '20px 0px 10px 0px',
        padding: '20px',
        justifyContent: 'center',
    },
    formContainer: {
        justifyContent: 'center',
        borderRadius: '4px',
        padding: '20px 30px',
    },
    title: {
        fontFamily: 'times new roman',
        fontSize: '30px',
        textAlign: 'center',
    },
    inputs: {
        backgroundColor: '#c7eaf2',
    },
    button: {
        backgroundColor: '#3c52b2',
        color: '#fff',
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: '#3c52b2',
            color: '#53a9bc', }
    }
    }))