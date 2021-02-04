import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Appbar from './appbar/Appbar';
import Body from './body/Body';
import Controls from './controls/Controls';
import Pagination from './pagination/Pagination';
import useStyles from './styles';

const Home = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.postReducer);
    const { pageno, tags, query, sortBy, time } = useSelector(
        (state) => state.queryReducer
    );

    useEffect(() => {
        dispatch(getPosts(pageno, tags, query, sortBy, time));
    }, [pageno, tags, query, sortBy, time, dispatch]);
    useEffect(() => {
        if (!isAuthenticated) {
            props.history.push('/login');
        }
    }, [isAuthenticated, props.history]);

    return (
        <Container className={classes.root}>
            <Appbar />
            <Controls />
            <Body />
            <Pagination />
        </Container>
    );
};

export default Home;
