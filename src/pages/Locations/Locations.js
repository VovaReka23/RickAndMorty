import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as LocationsActions from './Locations.action'
import { Pagination, Filter, Input, Button } from '../../components'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#3f51b5',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const colName = ['ID', 'NAME', 'TYPE', 'DIMENSION']

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function Locations(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const [filter, setFilter] = React.useState({
        page: 1,
        name: '',
        type: '',
        dimension: ''
    });
    const inputName = useRef(null);
    const inputType = useRef(null);
    const inputDimension = useRef(null);

    React.useEffect(() => {
        props.getLocations(filter);
    }, [])

    // pagination onChange page
    const handleChange = (event, value) => {
        setPage(value);
        props.getLocations(filter);
    };

    // btn filter characters
    const handleClick = () => {
        const name = inputName.current.querySelector('input').value;
        const type = inputType.current.querySelector('input').value;
        const dimension = inputDimension.current.querySelector('input').value;
        setFilter({
            page,
            name,
            type,
            dimension
        })
        props.getLocations(filter);
    };

    return (
        <>
            <Filter>
                <Input linkRef={inputName} label={'Name'} />
                <Input linkRef={inputType} label={'Type'} />
                <Input linkRef={inputDimension} label={'Dimension'} />
                <Button onClick={handleClick} label="Filter" />
            </Filter>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {colName && colName.map((item, index) => <StyledTableCell key={`${index}__${item}`}>{item}</StyledTableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.locations.map((item, index) => (
                            <StyledTableRow key={`${props.locations}__${index}`}>
                                <StyledTableCell>
                                    {item.id}
                                </StyledTableCell>
                                <StyledTableCell>{item.name}</StyledTableCell>
                                <StyledTableCell>{item.type}</StyledTableCell>
                                <StyledTableCell>{item.dimension}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination count={Math.ceil(props.info.pages)} page={page} handleChange={handleChange} />
            </TableContainer>

        </>
    );
}

const mapStateToProps = state => ({
    loadingLocations: state.locations.loadingLocations,
    loadedLocations: state.locations.loadedLocations,
    locations: state.locations.locations,
    info: state.locations.info,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...LocationsActions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Locations)