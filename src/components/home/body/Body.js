import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Body = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.postReducer.posts);

    const getTime = (time) => {
        const createdAt = new Date(time * 1000);
        const today = new Date();
        if (today.getFullYear() - createdAt.getFullYear() > 0) {
            return `${today.getFullYear() - createdAt.getFullYear()} years ago`;
        } else if (today.getMonth() - createdAt.getMonth() > 0) {
            return `${today.getMonth() - createdAt.getMonth()} months ago`;
        } else if (today.getDay() - createdAt.getDay() > 0) {
            return `${today.getDay() - createdAt.getDay()} days ago`;
        } else if (today.getHours() - createdAt.getHours() > 0) {
            return `${today.getHours() - createdAt.getHours()} hours ago`;
        } else if (today.getMinutes() - createdAt.getMinutes() > 0) {
            return `${today.getMinutes() - createdAt.getMinutes()} minutes ago`;
        } else {
            return 'moments ago';
        }
    };

    return (
        <div>
            {posts.length ? (
                posts.map((post) => (
                    <div className={classes.root} key={post.objectID}>
                        {post.title ? (
                            <>
                                <div>
                                    <Typography
                                        variant="body1"
                                        className={classes.title}
                                    >
                                        <a
                                            href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                        >
                                            {post.title}
                                        </a>
                                    </Typography>
                                    {post.url && (
                                        <Typography
                                            variant="subtitle1"
                                            className={classes.url}
                                            component="a"
                                            href={post.url}
                                        >
                                            ({post.url})
                                        </Typography>
                                    )}
                                </div>
                                <div>
                                    <Typography
                                        variant="body2"
                                        className={classes.subPoints}
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        {post.points} points |
                                    </Typography>
                                    <Typography
                                        className={classes.subPoints}
                                        variant="body2"
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        {post.author} |
                                    </Typography>
                                    <Typography
                                        className={classes.subPoints}
                                        variant="body2"
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        {getTime(post.created_at_i)} |
                                    </Typography>
                                    <Typography
                                        className={classes.subPoints}
                                        variant="body2"
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        {post.num_comments} comments
                                    </Typography>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <Typography
                                        variant="body2"
                                        className={classes.subPoints}
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        {post.points} points |
                                    </Typography>
                                    <Typography
                                        className={classes.subPoints}
                                        variant="body2"
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        {post.author} |
                                    </Typography>
                                    <Typography
                                        className={classes.subPoints}
                                        variant="body2"
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        {getTime(post.created_at)} |
                                    </Typography>
                                    <Typography
                                        className={classes.subPoints}
                                        variant="body2"
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        parent |
                                    </Typography>
                                    <Typography
                                        className={classes.subPoints}
                                        variant="body2"
                                        component="a"
                                        href={`https://news.ycombinator.com/item?id=${post.objectID}`}
                                    >
                                        on: {post.story_title}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography
                                        component="div"
                                        dangerouslySetInnerHTML={{
                                            __html: post.comment_text,
                                            // post.comment_text.length > 300
                                            //     ? `${post.comment_text.substring(
                                            //           0,
                                            //           300
                                            //       )}...`
                                            //     : post.comment_text,
                                        }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                ))
            ) : (
                <Typography>Loading...</Typography>
            )}
        </div>
    );
};

export default Body;
