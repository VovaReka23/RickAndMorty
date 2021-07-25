import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import styles from '../assets/scss/modal.module.scss'

const ModalContent = ({ modalInfo }) => {
    return (
        <div className={styles.typography}>
            {modalInfo.image && <Avatar alt="Remy Sharp" className={styles.img} src={modalInfo.image} />}

            {modalInfo.name && <Typography component="h2" color="textPrimary">
                {modalInfo.name}
            </Typography>}
            {modalInfo.status && <>
                <Typography component="span" color="textPrimary">
                    <b>STATUS: </b>
                </Typography>
                <Typography component="h4" color="textPrimary">
                    {modalInfo.status}
                </Typography>
            </>}
            {modalInfo.species && <>
                <Typography component="span" color="textPrimary">
                    <b>SPECIES: </b>
                </Typography>
                <Typography component="h4" color="textPrimary">
                    {modalInfo.species}
                </Typography>
            </>}
            {modalInfo.type && <>
                <Typography component="span" color="textPrimary">
                    <b>TYPE: </b>
                </Typography>
                <Typography component="h4" color="textPrimary">
                    {modalInfo.type}
                </Typography>
            </>}
            {modalInfo.gender && <>
                <Typography component="span" color="textPrimary">
                    <b>GENDER: </b>
                </Typography>
                <Typography component="h4" color="textPrimary">
                    {modalInfo.gender}
                </Typography>
            </>}
            {modalInfo.created && <>
                <Typography component="span" color="textPrimary">
                    <b>CREATED: </b>
                </Typography>
                <Typography component="h4" color="textPrimary">
                    {modalInfo.created}
                </Typography>
            </>}
        </div>
    )
}
ModalContent.propTypes = {
    modalInfo: PropTypes.object,
}
export default React.memo(ModalContent)