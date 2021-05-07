import React from 'react'
import Styles from './turnHerePage.module.scss'

const description = `Om du är osäker på vilken hjälp du behöver kan den här sidan hjälpa till att leda dig rätt.\n Känner du dig igen dig i någon av beskrivningarna nedan? Klicka på rutorna för att få mer information.`

const TurnHerePage = () => {
    return (
        <div className={Styles.pageContainer}>
            <div className={Styles.contentContainer}>
                <h2 className={Styles.pageTitle}>Vilken hjälp behöver jag?</h2>
                <p className={Styles.description}>{description.split("\n").map(str => <p>{str}</p>)}</p>
            </div>
        </div>
    )
}

export default TurnHerePage
