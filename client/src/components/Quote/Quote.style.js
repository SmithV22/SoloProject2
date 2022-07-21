
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
        margin: '5px 2px',
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
    randomQuote: {
        justifyContent: 'center',
        padding: '10px',
        marginBottom: '30px',
        fontFamily: 'times new roman',
        fontStyle: 'italic',
        fontSize: '25px'
    },
    button: {
        backgroundColor: '#3c52b2',
        color: '#fff',
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: '#3c52b2',
            color: '#53a9bc', }
    },
    font: {
        fontFamily: 'times new roman',
        fontStyle: 'italic',
    },
    display: {
        marginBottom: '25px',
    },
    container: {
        marginTop: '20px',
    },
    displayTitle: {
        fontSize: '45px',
        fontFamily: 'arial',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        fontWeight: '400',
    }
})) ;