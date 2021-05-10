import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirebaseContextProvider from './contexts/FirebaseContext';
import CurrentPostContextProvider from "./contexts/CurrentPostContext";
import HomePage from './pages/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import ForumPage from './pages/ForumPage/ForumPage';
import TurnHerePage from './pages/TurnHerePage/TurnHerePage';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';
import AnswerThread from "./pages/ForumPage/AnswerThread/AnswerThread";

import logo from './assets/images/KTH.png';

function App() {
	return (
		<CurrentPostContextProvider>
			<FirebaseContextProvider>
				<Router>
					<Switch>
						<div className='app-container'>
							<div className='content'>
								<Sidebar />
								<main className='main'>
									<Route path='/' exact render={() => <HomePage />} />
									<Route path='/forum' exact render={() => <ForumPage />} />
									<Route
										path='/wheretoturn'
										exact
										render={() => <TurnHerePage />}
									/>
									<Route
										path='/resources'
										exact
										render={() => <ResourcesPage />}
									/>
									<Route path="/forum/:id" exact render ={() => <AnswerThread/>}/> 
								</main>
							</div>
							<div className='logoContainer'>
								<img src={logo} alt='logo' />
							</div>
						</div>
					</Switch>
				</Router>
			</FirebaseContextProvider>
		</CurrentPostContextProvider>
	);
}

export default App;
