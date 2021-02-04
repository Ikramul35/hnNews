import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy, setTags, setTime } from '../../../actions/queries';
import useStyles from './styles';

const Controls = () => {
    const [filterSearch, setFilterSearch] = useState('Stories');
    const [filterBy, setFilterBy] = useState('Popularity');
    const [filterFor, setFilterFor] = useState('All Time');

    const classes = useStyles();

    const dispatch1 = useDispatch();
    const dispatch2 = useDispatch();
    const dispatch3 = useDispatch();

    useEffect(() => {
        dispatch1(setTags(mapFilterSearch(filterSearch)));
    }, [filterSearch, dispatch1]);
    useEffect(() => {
        dispatch2(setSortBy(mapFilterBy(filterBy)));
    }, [filterBy, dispatch2]);
    useEffect(() => {
        dispatch3(setTime(mapFilterFor(filterFor)));
    }, [filterFor, dispatch3]);

    const mapFilterSearch = (item) => {
        switch (item) {
            case 'Stories':
                return 'story';
            case 'Comments':
                return 'comment';
            default:
                return '';
        }
    };

    const mapFilterBy = (item) => {
        switch (item) {
            case 'Date':
                return 'date';
            default:
                return 'popularity';
        }
    };

    const mapFilterFor = (item) => {
        let time = Math.floor(new Date().getTime() / 1000);
        switch (item) {
            case 'Last 24h':
                time -= 60 * 60 * 24;
                return time;
            case 'Past Week':
                time -= 60 * 60 * 24 * 7;
                return time;
            case 'Past Month':
                time -= 60 * 60 * 24 * 30;
                return time;
            case 'Past Year':
                time -= 60 * 60 * 24 * 365;
                return time;
            case 'Custom range':
                return 0;
            default:
                return 0;
        }
    };

    return (
        <div className={classes.container}>
            <FormControl variant="outlined" className={classes.root}>
                <label htmlFor="filter-search">Search</label>
                <Select
                    id="filter-search"
                    value={filterSearch}
                    onChange={(e) => setFilterSearch(e.target.value)}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Stories">Stories</MenuItem>
                    <MenuItem value="Comments">Comments</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.root}>
                <label htmlFor="filter-by">by</label>
                <Select
                    id="filter-by"
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                >
                    <MenuItem value="Popularity">Popularity</MenuItem>
                    <MenuItem value="Date">Date</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.root}>
                <label htmlFor="filter-for">for</label>
                <Select
                    id="filter-for"
                    value={filterFor}
                    onChange={(e) => setFilterFor(e.target.value)}
                >
                    <MenuItem value="All Time">All Time</MenuItem>
                    <MenuItem value="Last 24h">Last 24h</MenuItem>
                    <MenuItem value="Past Week">Past Week</MenuItem>
                    <MenuItem value="Past Month">Past Month</MenuItem>
                    <MenuItem value="Past Year">Past Year</MenuItem>
                    <MenuItem value="Custom range">Custom range</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Controls;
