import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '30ch',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function NativeSelects({ items, label, linkRef }) {
    const classes = useStyles();
    const [empty, setEmpty] = React.useState(true);

    const handleChange = (event, value) => {
        setEmpty(false);
    };

    return (
        <div>
            <FormControl size="small" variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    label={label}
                    ref={linkRef}
                >
                    {empty && <option value=''></option>}
                    {items.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </Select>
            </FormControl>
        </div>
    );
}
NativeSelects.propTypes = {
    linkRef: PropTypes.object,
    label: PropTypes.string,
    items: PropTypes.array
}
export default React.memo(NativeSelects)