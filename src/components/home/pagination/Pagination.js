import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNo } from '../../../actions/queries';
import useStyles from './styles';

const Pagination = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { pageno } = useSelector((state) => state.queryReducer);

    const handleClick = (pageNo) => {
        dispatch(setPageNo(pageNo));
    };

    const arr = [];
    for (let i = 1; i <= 34; i++) arr.push(i);
    return (
        <div className={classes.root}>
            {arr.map((i) => (
                <button
                    key={i}
                    className={`${classes.button} ${
                        pageno === i ? classes.active : ''
                    }`}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
