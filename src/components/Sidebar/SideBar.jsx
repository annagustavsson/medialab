import React from 'react'
import { useHistory } from "react-router-dom";
import styles from "./sideBar.module.scss"
import SidebarButton from "../sidearButton/SidebarButton"

const SideBar = () => {
    let history = useHistory()
    return (
        <aside className={styles.sidebarContainer}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li>
                        <SidebarButton event={() => history.push("/forum")} text={"Tankar från studenter"} /></li>
                    <li>
                        <SidebarButton event={() => history.push("/resources")} text={"Det här erbjuder KTH"} /></li>
                    <li>
                        <SidebarButton event={() => history.push("/wheretoturn")} text={"Vilken hjälp behöver jag?"} /></li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar