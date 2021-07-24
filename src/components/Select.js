import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects({ items, label }) {
    const classes = useStyles();
    const [empty, setEmpty] = React.useState(true);

    const handleChange = (event, value) => {
        setEmpty(false);
    };

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    label={label}
                >
                    {empty && <option value=''></option>}
                    {items.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </Select>
            </FormControl>
        </div>
    );
}