import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiPaper-root': {
            padding: theme.spacing(2),
            width: '30%',
            '& h3': {
                textAlign: 'center',
                marginBottom: '10px',
            },
        },
    },
    formcontrol: {
        marginBottom: theme.spacing(1),
    },
    submit: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& a': {
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'none',
            },
        },
    },
}));

export default useStyles;
