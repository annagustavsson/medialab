import React from 'react';
import Styles from './resourcesPage.module.scss';

const pageInfo = `Att börja studera på högskolan kan innebära en stor omställning i livet. Det kan innebära flytt från nära och kära och mycket ny kunskap att ta in i en ny studiemiljö, med nya studiekamrater. En del känner ett behov av att prata om sina nya upplevelser och sin studiesituation, andra behöver hjälp att skapa ett nytt liv med nya rutiner.

Med en helt ny miljö att anpassa sig till, kan du känna att du saknar tid för träning och avkoppling. För att kunna studera på hög nivå behöver du även ha en fritid som fyller på med energi. Du kanske även har behov att av prata med någon om din studiesituation, till exempel om du känner stress inför tentamen eller annat som påverkar dina studier.

KTH erbjuder dig som student ett antal stödfunktioner för psykisk och fysisk hälsa, som du kan läsa mer om nedan.`;

const studentHalsan = {
	title: 'Studenthälsan',
	information: `Studenthälsan i Stockholm är till för dig som är student på KTH. Vi kan vara ett stöd för dig om du känner att du behöver prata med någon när du inte mår bra.

    Vid Studenthälsan i Stockholm kan du besöka företagssköterska, psykolog och kurator. Företagssköterskor erbjuder hälsosamtal. Till psykologerna kan du komma för rådgivning eller för en avgränsad samtalskontakt. Kurator erbjuder psykosocial rådgivning och stödsamtal.
    
    Vi har tystnadsplikt och besök hos oss är gratis. Studenthälsan kan även hjälpa dig med kontakter till instanser i samhället i övrigt.`,
};

const studieVagledning = {
	title: 'Studievägledning',
	information: `Du som har påbörjat ett program på KTH och behöver stöd under din studietid, både vad gäller studierelaterade frågor och studiesociala ärenden, såsom att upprätta en studieplan eller diskutera din studiesituation, ska vända dig till din programstudievägledare. Det gäller även dig som har specifika frågor om ett visst program, till exempel programinnehåll, valbara kurser och inriktningar.`,
};

const ResourcesPage = () => {
	return (
		<div className={Styles.pageContainer}>
			<div className={Styles.contentContainer}>
				<h1 className={Styles.pageTitle}>Det här erbjuder KTH</h1>
				<p>
					{pageInfo.split('\n').map((str) => (
						<p>{str}</p>
					))}
				</p>
				<h2 className={Styles.heading}>{studentHalsan.title}</h2>
				<p>
					{studentHalsan.information.split('\n').map((str) => (
						<p>{str}</p>
					))}
				</p>
				<div className={Styles.studentHalsanButtonsGrid}>
					<div className={Styles.studentHalsanButtonContainer}>
						<button onClick={()=> window.location.href = 'https://www.su.se/utbildning/din-h%C3%A4lsa/studenth%C3%A4lsan/individuella-samtal-och-telefonr%C3%A5dgivning-p%C3%A5-studenth%C3%A4lsan-i-stockholm-1.466353'} className={Styles.studentHalsanButton}>
							Tidsbokning av samtal och rådgivning
						</button>
						{/* <p>
							Klicka här för att komma till tidsbokningen för individuella
							samtal och telefonrådgivning hos Studenthälsan i Stockholm
						</p> */}
					</div>
					<div className={Styles.studentHalsanButtonContainer}>
						<button onClick={()=> window.location.href = "https://www.su.se/utbildning/din-h%C3%A4lsa/studenth%C3%A4lsan/workshoppar-grupper-och-andra-aktiviteter-1.466402"} className={Styles.studentHalsanButton}>
							Workshoppar, grupper och andra aktiviteter
						</button>
						{/* <p>
							Klicka här för att läsa mer om workshoppar, grupper och andra
							aktiviteter
						</p> */}
					</div>
				</div>
				<h2 className={Styles.heading}>{studieVagledning.title}</h2>
				<p>
					{studieVagledning.information.split('\n').map((str) => (
						<p>{str}</p>
					))}
				</p>
			</div>
			<div className={Styles.studieVagledningButtonContainer}>
				<button onClick={()=> window.location.href = "https://www.kth.se/student/studievagledning-kontakt"} className={Styles.studieVagledningButton}>
					Samtal och rådgivning med studievägledare på KTH
				</button>
			</div>
		</div>
	);
};

export default ResourcesPage;
