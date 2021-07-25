import React from 'react'
import styles from '../assets/scss/filter.module.scss';

const Filter = ({ children }) => {
    return (
        <div className={styles.filter}>
            {children}
        </div>

    )
}

export default React.memo(Filter)