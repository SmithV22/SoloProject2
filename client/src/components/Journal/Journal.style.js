
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        background: "#252C6F", 
        color: '#fff',
    },
    heading: {
        height: '100px',
        textAlign: 'center',
        
    },
    journalTitle: {
        fontSize: '45px',
        fontFamily: 'arial',
        fontWeight: 'bold',
    },
    fontQuote: {
        fontFamily: 'times new roman',
        fontStyle: 'italic',
    },
    font: {
        fontFamily: 'times new roman'
    },
    container: {
        marginTop: '20px',
    },
    error: {
        color: 'red',
        fontWeight: '400',
    }
})) ;