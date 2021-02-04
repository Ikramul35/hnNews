import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0',
        padding: '5px 15px',
        '& p': {
            display: 'inline-block',
            marginRight: '4px',
        },
        '& a': {
            color: theme.palette.text.secondary,
            textDecoration: 'none',
        },
    },
    title: {
        fontSize: '1rem',
        display: 'inline-block',
        fontWeight: '400',
        '& a': {
            color: theme.palette.text.primary,
            textDecoration: 'none',
        },
    },
    url: {
        fontSize: '0.9rem',
        display: 'inline-block',
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    subPoints: {
        fontSize: '0.9rem',
        color: theme.palette.text.secondary,
        cursor: 'pointer',
        textDecoration: 'none',
        marginRight: '4px',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

export default useStyles;
