import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../../actions/queries';
import HNnewsLogo from '../../../assets/logo-hn-search-a822432b.webp';
import useStyles from './styles';

const Appbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { username } = useSelector((state) => state.postReducer.userData);

    const handleKeyUp = async (e) => {
        e.stopPropagation();
        if (e.keyCode === 13) {
            dispatch(setQuery(e.target.value));
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <img
                        className={classes.logo}
                        src={HNnewsLogo}
                        alt="Hacker News Logo"
                    />
                    <Typography className={classes.title} variant="h6" noWrap>
                        {username}
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search stories by title, url or author"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            fullWidth
                            onKeyUp={(e) => handleKeyUp(e)}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Appbar;
