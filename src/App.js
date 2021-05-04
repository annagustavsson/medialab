import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import SideBar from "./components/Sidebar/SiderBar"
import ForumPage from "./pages/ForumPage/ForumPage"
import TurnHerePage from "./pages/TurnHerePage/TurnHerePage"
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage"


function App() {
  return (
    <Router>
      <Switch>
        <div>
        <SideBar/>
        <Route path="/" exact render={() => <HomePage/>}/>
        <Route path="/forum" exact render={() => <ForumPage/>}/>
        <Route path="/wheretoturn" exact render={() => <TurnHerePage/>}/>
        <Route path="/resources" exact render={() => <ResourcesPage/>}/>
        </div>
      </Switch>
    </Router>
    
  );
}

export default App;
