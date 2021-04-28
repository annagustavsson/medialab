import React from 'react'
import {useHistory} from "react-router-dom";
import styles from "./sideBar.module.scss"
import SidebarButton from "../sidearButton/SidebarButton"

const SiderBar = () => {
    let history = useHistory()
    return (
        <div className={styles.sidebarContainer}>
            <SidebarButton event = {() => history.push("/forum")} text={"Forum"}/>
            <SidebarButton event = {() => history.push("/resources")} text={"Resources"}/>
            <SidebarButton event = {() => history.push("/wheretoturn")} text={"Where to turn"}/>
        </div>
    )
}

export default SiderBar
