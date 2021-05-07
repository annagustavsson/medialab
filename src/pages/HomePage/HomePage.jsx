import React from 'react'
import Styles from './homePage.module.scss'

const description = `Livet som student är fullt av utmaningar. Många upplever stress, oro, utmattning, sömnproblem, depression eller andra problem som på olika sätt rör psykisk ohälsa. Att studierna och livet runtomkring påverkar din hälsa är vanligt, och det finns hjälp att få om du mår dåligt.
\n På den här sidan kan du, helt anonymt, dela med dig av tankar och känslor kring hur du mår, men också ta del av andras upplevelser. Genom att dela med dig kan du få stöd och råd av andra som gått igenom liknande saker. \n Här finns också information om vilken hjälp som finns att få om du mår dåligt och behöver någon att prata med.`

const HomePage = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <h1 className={Styles.pageTitle}>Studenthälsa på KTH</h1>
                <p className={Styles.description}>{description.split("\n").map(str => <p>{str}</p>)}</p>
            </div>
        </div>
    )
}

export default HomePage
