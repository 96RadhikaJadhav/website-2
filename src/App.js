import './App.css';
import Links from './Links';
import AppHeader from './AppHeader';
import appData from './appConfig.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <AppHeader name={appData.name} tagline={appData.tagline} />
        <Links youtube={appData.links.youtube} discord={appData.links.discord}
        instagram={appData.links.instagram} twitter={appData.links.twitter}
        traktrain={appData.links.traktrain} yat={appData.links.yat} email={appData.links.email}/>
        <br/>
      </header>
      <div className="App-content">
        <p>All content on this website is copyright 2021 {appData.name}. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
