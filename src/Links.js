import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitter, faDiscord, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMusic, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

class Links extends React.Component {
  render() {
    var ytChannel = this.props.youtube;
    var discordServer = this.props.discord;
    var instagramProfile = this.props.instagram;
    var twitterProfile = this.props.twitter;
    var traktrainProfile = this.props.traktrain;
    var yatPage = this.props.yat;
    var emailAddress = this.props.email;
    return (
      <div className="App-links">
        <ul>
          <a className="App-link" aria-label="Visit my YouTube channel" target="_blank" rel="noreferrer" href={ytChannel}><FontAwesomeIcon icon={faYoutube}/></a>
          <a className="App-link" aria-label="Visit my Twitter profile" target="_blank" rel="noreferrer" href={twitterProfile}><FontAwesomeIcon icon={faTwitter}/></a>
          <a className="App-link" aria-label="Visit my Instagram profile" target="_blank" rel="noreferrer" href={instagramProfile}><FontAwesomeIcon icon={faInstagram}/></a>
          <a className="App-link" aria-label="Purchase my instrumentals" target="_blank" rel="noreferrer" href={traktrainProfile}><FontAwesomeIcon icon={faMusic}/></a>
          <a className="App-link" aria-label="Visit my Discord server" target="_blank" rel="noreferrer" href={discordServer}><FontAwesomeIcon icon={faDiscord}/></a>
          <a className="App-link" aria-label="Visit my link collection" target="_blank" rel="noreferrer" href={yatPage}><FontAwesomeIcon icon={faGlobeAmericas}/></a>
          <a className="App-link" aria-label="Send me an email" target="_blank" rel="noreferrer" href={emailAddress}><FontAwesomeIcon icon={faEnvelope}/></a>
        </ul>
      </div>
    );
  }
}

export default Links;
