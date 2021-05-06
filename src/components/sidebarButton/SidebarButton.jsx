import React from 'react'
import styles from "./sidebarButton.module.scss"

const SidebarButton = ({text, event}) => {
    return (
        <button onClick={event} className={styles.button}>
            {text}
        </button>
    )
}

export default SidebarButton
