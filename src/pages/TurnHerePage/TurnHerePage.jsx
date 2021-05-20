import React from 'react'
import { Link } from 'react-router-dom'
import RelatableCard from '../../components/RelatableCard/RelatableCard'
import Styles from './turnHerePage.module.scss'

const description = `Om du är osäker på vilken hjälp du behöver kan den här sidan hjälpa till att leda dig rätt.\n Känner du dig igen dig i någon av beskrivningarna nedan? Klicka på rutorna för att få mer information.`

const relatableCards = [
    {
        text: 'Jag känner mig stressad i skolan och skulle behöva lite lugn och ro.',
        link: 'linkfn'
    },
    {
        text: 'Jag är orolig för att misslyckas och vet inte hur jag ska lägga upp mina studier.',
        link: 'linkfn'
    },
    {
        text: 'Jag känner mig stressad och orolig över mina studier och skulle vilja prata med någon.',
        link: 'linkfn'
    },
    {
        text: 'Jag har svårt att kliva upp på morgonen och saknar motivation till att göra något alls.',
        link: 'linkfn'
    }
]

const TurnHerePage = () => {
    return (
        <div className={Styles.pageContainer}>
            <div className={Styles.contentContainer}>
                <h2 className={Styles.pageTitle}>Vilken hjälp behöver jag?</h2>
                <div className={Styles.description}>{description.split("\n").map(str => <div key={str}><p>{str}</p></div>)}</div>
                <div className={Styles.relatableCardsContainer}>
                    {relatableCards.map( (card, idx) => <RelatableCard key={idx} text={card.text} link={card.link} />)}
                </div>
                <p className={Styles.description}>
                    Känner du inte igen dig i någon av beskrivningarna kan du 
                    hitta mer information om hur du söker hjälp
                    <Link to="/how-to" className={Styles.helpLink}>{` här.`}</Link>
                </p>
            </div>
        </div>
    )
}

export default TurnHerePage
