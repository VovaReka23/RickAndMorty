import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as watchListActions from './MyWatchList.action'
import { Input, Button, Table } from '../../components'
import styles from '../../assets/scss/general.module.scss';

const MyWatchList = (props) => {
    const inputEl = useRef(null);
    React.useEffect(() => {
        if (localStorage.getItem('episode')) {
            props.getWatchList();
        }
        if (localStorage.getItem('checked')) {
            props.getCheckedEpisode();
        }
    }, [])

    const handleClick = () => {
        const el = inputEl.current.querySelector('input').value;

        if (el) {
            props.addEpisode(el)
            inputEl.current.querySelector('input').value = "";
        }
    };
    return (
        <>
            <h1>My Watch List</h1>
            <div className={styles.topList}>
                <Input linkRef={inputEl} label={'Enter Episode'} />
                <Button onClick={handleClick} label="Add Episode" />
            </div>

            <Table rows={props.list} columns={props.columns} setCheked={props.checkedEpisode} checked={props.checked} />
        </>
    )
}

const mapStateToProps = state => ({
    list: state.watchList.list,
    columns: state.watchList.columns,
    checked: state.watchList.checked
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...watchListActions
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MyWatchList)