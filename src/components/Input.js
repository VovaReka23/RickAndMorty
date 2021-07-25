import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
}));

function Input({ label, linkRef }) {
    const classes = useStyles()
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField ref={linkRef} size="small" id="outlined-basic" label={label} variant="outlined" />
        </form>
    )
}

Input.propTypes = {
    linkRef: PropTypes.object,
    label: PropTypes.string
}
export default React.memo(Input)