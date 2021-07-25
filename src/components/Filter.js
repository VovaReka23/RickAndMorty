import React from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/scss/filter.module.scss'

const Filter = ({ children }) => {
    return (
        <div className={styles.filter}>
            {children}
        </div>

    )
}

Filter.propTypes = {
    children: PropTypes.array,
}

export default React.memo(Filter)