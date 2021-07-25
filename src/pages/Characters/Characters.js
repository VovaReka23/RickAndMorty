import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import * as CharacterActions from './Characters.action'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Pagination, Modal, ModalContent, Filter, Select, Input, Button } from '../../components'
import './characters.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

function Characters(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const [filter, setFilter] = React.useState({
        page: 1,
        species: '',
        status: '',
        gender: ''
    });
    const [modalInfo, setModalInfo] = React.useState({});
    const inputSpecies = useRef(null);
    const inputStatus = useRef(null);
    const inputGender = useRef(null);

    // modal onClick open
    const handleOpen = (event, item) => {
        setOpen(true);
        setModalInfo(item);
    };
    // modal onClick close
    const handleClose = () => {
        setOpen(false);
    };
    // pagination onChange page
    const handleChange = (event, value) => {
        setFilter(prevState => ({
            ...prevState,
            page: value
        }));
        setPage(value);
        props.getCaracter(filter);
    };
    // btn filter characters
    const handleClick = () => {
        const species = inputSpecies.current.querySelector('input').value;
        const status = inputStatus.current.querySelector('select').value;
        const gender = inputGender.current.querySelector('select').value;
        setFilter({
            page,
            species,
            status,
            gender
        })
        props.getCaracter(filter);
    };
    React.useEffect(() => {
        props.getCaracter(filter);
    }, [])
    return (
        <div className={classes.root}>
            {props.loadedCharacter &&
                <>
                    <Filter>
                        <Input linkRef={inputSpecies} value={filter.species} label={'Species'} />
                        <Select linkRef={inputStatus} items={props.status} label={'Status'} />
                        <Select linkRef={inputGender} items={props.gender} label={'Gender'} />
                        <Button onClick={handleClick} label="Filter" />
                    </Filter>
                    <Grid container >
                        {props.character.map((item, index) => {
                            return (
                                <Grid key={index} item xs={6} sm={6}>
                                    <List className={classes.root}>
                                        <ListItem alignItems="flex-start" onClick={(event) => handleOpen(event, item)}>
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" src={item.image} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.name}
                                                secondary={
                                                    <>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            Statuse:
                                                        </Typography>
                                                        {`  ${item.status}`}
                                                    </>
                                                }
                                            />
                                            <div className="card-info">
                                                <span><b>Species: </b> {item.species}</span>
                                                <span><b>Gender: </b> {item.gender}</span>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Pagination count={Math.ceil(props.info.pages)} page={page} handleChange={handleChange} />
                    <Modal handleClose={handleClose} open={open} >
                        <ModalContent modalInfo={modalInfo} />
                    </Modal>
                </>
            }
        </div >

    );
}
const mapStateToProps = state => ({
    loadingCharacter: state.characters.loadingCharacter,
    loadedCharacter: state.characters.loadedCharacter,
    character: state.characters.character,
    info: state.characters.info,
    status: state.characters.status,
    gender: state.characters.gender
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...CharacterActions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Characters))