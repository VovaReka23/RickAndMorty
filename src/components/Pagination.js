import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function BasicPagination({ count, page, handleChange }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={count} color="primary" page={page} onChange={handleChange} />
        </div>
    )
}

BasicPagination.propTypes = {
    count: PropTypes.number,
    page: PropTypes.number,
    handleChange: PropTypes.func
}

export default React.memo(BasicPagination);