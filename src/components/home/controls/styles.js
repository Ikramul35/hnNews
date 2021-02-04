import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(1),
        display: 'flex',
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& label': {
            marginRight: theme.spacing(1),
        },
        '& .MuiOutlinedInput-input': {
            padding: '5px 10px',
            paddingRight: '32px',
        },
        '& .MuiOutlinedInput-root': {
            marginRight: theme.spacing(1),
        },
    },
}));

export default useStyles;
