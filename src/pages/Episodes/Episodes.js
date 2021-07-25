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
import * as EpisodeActions from './Episodes.action'
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

const colName = ['ID', 'NAME', 'AIR DATE', 'EPISODE']

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function EnhancedTable(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const [filter, setFilter] = React.useState({
        page: 1,
        name: ''
    });
    const inputName = useRef(null);
    React.useEffect(() => {
        props.getEpisode(filter.page, filter.name);
    }, [])

    // pagination onChange page
    const handleChange = (event, value) => {
        setPage(value);
        props.getEpisode(value, filter.name);
    };

    // btn filter episode
    const handleClick = () => {
        const name = inputName.current.querySelector('input').value;
        setFilter({
            page,
            name
        })
        props.getEpisode(page, name);
    };
    return (
        <>
            <Filter>
                <Input linkRef={inputName} label={'Name'} />
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
                        {props.episode.map((item, index) => (
                            <StyledTableRow key={`${props.locations}__${index}`}>
                                <StyledTableCell>{item.id}</StyledTableCell>
                                <StyledTableCell>{item.name}</StyledTableCell>
                                <StyledTableCell>{item.air_date}</StyledTableCell>
                                <StyledTableCell>{item.episode}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination count={Math.ceil(props.info.count / 20)} page={page} handleChange={handleChange} />
            </TableContainer>
        </>
    );
}

const mapStateToProps = state => ({
    loadingEpisode: state.episodes.loadingEpisode,
    loadedEpisode: state.episodes.loadedEpisode,
    episode: state.episodes.episode,
    info: state.episodes.info,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...EpisodeActions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EnhancedTable)