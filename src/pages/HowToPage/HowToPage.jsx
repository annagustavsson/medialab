import React from 'react';
import Styles from './howToPage.module.scss';

const description = `Mår du dåligt finns det flera sätt att söka hjälp på. Här har vi listat några resurser som finns för att göra det så enkelt för dig som möjligt.

Om du blir sjuk och behöver komma i kontakt med ordinarie sjukvård kan du vända dig till Vårdguiden (1177) för sjukvårdsrådgivning alternativt ringa 112 vid livshotande tillstånd.`;

const kthResources = [
	{
		title: 'Studenthälsan',
		heading: 'Kontakta Studenthälsan i Stockholm',
		information: `Studenthälsan i Stockholm är till för dig som är student på KTH. Vi kan vara ett stöd för dig om du känner att du behöver prata med någon när du inte mår bra.

    Vid Studenthälsan i Stockholm kan du besöka företagssköterska, psykolog och kurator. Företagssköterskor erbjuder hälsosamtal. Till psykologerna kan du komma för rådgivning eller för en avgränsad samtalskontakt. Kurator erbjuder psykosocial rådgivning och stödsamtal.
    
    Vi har tystnadsplikt och besök hos oss är gratis. Studenthälsan kan även hjälpa dig med kontakter till instanser i samhället i övrigt.`,
		buttonLabel:
			'Klicka här för att komma till tidsbokningen för individuella samtal och telefonrådgivning hos Studenthälsan i Stockholm',
	},
	{
		title: 'Vårdguiden',
		heading: 'Kontakta Vårdguiden (1177) för rådgivning',
		information: `Är du osäker på vilken hjälp du behöver så kan du ringa 1177. 
    1177 är ett nationellt telefonnummer för sjukvårdsrådgivning. Du kan ringa dygnet runt. Sjuksköterskorna som svarar bedömer ditt behov av vård, ger dig råd och vägleder till lämplig vårdmottagning när så behövs.`,
		buttonLabel:
			'Klicka här för att läsa mer om 1177 och vården i Stockholms län',
	},
];

const otherResources = [
	{
		heading: 'Mind',
		information: `Vi finns här för att lyssna på dig och prata med dig där du befinner dig i livet. Vi vill ge dig stöd, hopp och motivation till att vilja leva och/eller söka hjälp. Vid akut självmordsrisk bör du ringa 112.`,
		contact: [{ number: ' Telefonnumer 90101' }],
	},
	{
		heading: 'SPES Riksförbundet för SuicidPrevention och Efterlevandes Stöd ',
		information: `SPES, som betyder hopp på latin, erbjuder stöd och hjälp till efterlevande. SPES har en telefonjour som är öppen dagligen.`,
		contact: [
			{
				number: 'SPES telefonjour : 020-18 18 00',
				openHours: 'Alla dagar 19.00 – 22.00.',
			},
		],
	},
	{
		heading: 'Jourhavande människa',
		information: `Jourhavande medmänniska är en ideell förening som bedriver jourtelefon- och chattverksamhet för alla människor som önskar någon att tala med.`,
		contact: [
			{
				number: 'Telefonnummer: 08 - 702 16 80',
				openHours: 'Alla dagar 21.00 - 06.00',
			},
		],
	},
];

const HowToPage = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.content}>
				<h1 className={Styles.pageTitle}>Så söker du hjälp</h1>
				<p className={Styles.description}>
					{description.split('\n').map((str) => (
						<p>{str}</p>
					))}
				</p>
				{kthResources.map((resource, idx) => (
					<div key={idx} className={Styles.resource}>
						<h2 className={Styles.heading}>{resource.heading}</h2>
						<p>
							{resource.information.split('\n').map((str) => (
								<p>{str}</p>
							))}
						</p>
						<div className={Styles.buttonContainer}>
							<button className={Styles.button}>{resource.buttonLabel}</button>
						</div>
					</div>
				))}
				<h2 className={Styles.heading}>Andra resurser </h2>
				{otherResources.map((resource, idx) => (
					<div key={idx} className={Styles.otherResource}>
						<h4 className={Styles.otherHeading}>{resource.heading}</h4>
						<p>
							{resource.information.split('\n').map((str) => (
								<p>{str}</p>
							))}
						</p>
						{resource.contact.map((p, idx) => (
							<div key={idx}>
								<p>{p.number}</p>
								<p>{p.openHours}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default HowToPage;
