import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px 5px',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        fontSize: '0.9rem',
    },
    button: {
        border: `1px solid ${theme.palette.text.secondary}`,
        color: theme.palette.text.secondary,
        background: 'transparent',
        margin: '0 5px',
        cursor: 'pointer',
        '&:focus': {
            outline: 'none',
        },
    },
    active: {
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
    },
}));

export default useStyles;
