
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    bar: {
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
    },
    toolbar: {
        margin: '0 auto',
        textAlign: 'center', 
        
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '150px',
        
    },
    image: {
        height: '40px',
        width: '60px',
    },
    heading: {
        textDecoration: 'none',
        display: 'flex',
        color: '#53a9bc',
        fontFamily: 'georgia',
    },
    links: {
        textAlign: 'center',
        margin: '10px 0px 20px 0px',
    },
    link: {
        marginRight: '10px',
        textDecoration: 'none',
        padding: '4px',
        borderRadius: '5px',
        fontSize: '17px',
        
        color: '##252C6F',
        '&:hover': {
            backgroundColor: '#53a9bc',
            color: '#3c52b2', }
    },
    
})) ;