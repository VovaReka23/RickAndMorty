import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}));

export default function ContainedButtons({ onClick, label }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button onClick={onClick} size="large" variant="contained" color="primary">
                {label}
            </Button>
        </div>
    );
}