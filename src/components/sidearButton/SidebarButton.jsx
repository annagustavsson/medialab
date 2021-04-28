import React from 'react'
import styles from "./sidebarButton.module.scss"

const SidebarButton = ({text, event}) => {
    return (
        <div onClick={event} className={styles.button}>
            {text}
        </div>
    )
}

export default SidebarButton
