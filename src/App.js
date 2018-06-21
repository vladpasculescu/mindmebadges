import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import './App.css';

const StyledLabel = styled.p`
  display: inline-block;
  padding: .5rem 1rem;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 30px;
  background-color: #eee;
  color: #999;
`

const BetaStyledLabel = StyledLabel.extend`
  background-color: #3AA6DD;
  color: #fff;
`

const TryStyledLabel = StyledLabel.extend`
  background-color: #EF8D22;
  color: #fff;
`

const ComingSoonStyledLabel = StyledLabel.extend`
  background-color: #9013FE;
  color: #fff;
`

const TipsStyledLabel = StyledLabel.extend`
  background-color: #0976B4;
  color: #fff;
`

const AlertStyledLabel = StyledLabel.extend`
  background-color: #F6BD10;
  color: #fff;
`

const UpgradeStyledLabel = StyledLabel.extend`
  background-color: #57AC2D;
  color: #fff;
`

const Label = ({text}) => <StyledLabel>{text || 'Label'}</StyledLabel>
const BetaLabel = ({text}) => <BetaStyledLabel>{text || 'Beta'}</BetaStyledLabel>
const TryLabel = ({text}) => <TryStyledLabel>{text || 'Try'}</TryStyledLabel>
const ComingSoonLabel = ({text}) => <ComingSoonStyledLabel>{text || 'Coming Soon'}</ComingSoonStyledLabel>
const TipsLabel = ({text}) => <TipsStyledLabel>{text || 'Tips'}</TipsStyledLabel>
const AlertLabel = ({text}) => <AlertStyledLabel>{text || 'Alert'}</AlertStyledLabel>
const UpgradeLabel = ({text}) => <UpgradeStyledLabel>{text || 'Upgrade'}</UpgradeStyledLabel>
const NewFeatureLabel = ({text}) => <UpgradeStyledLabel>{text || 'New'}</UpgradeStyledLabel>
const LockedFeatureLabel = ({text}) => <TryStyledLabel><FontAwesomeIcon icon={faLock}/> {text || 'Locked'}</TryStyledLabel>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MindMe Badges</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <h3 style={{ textAlign: 'center'}}>Generic</h3>
        <Label />
        <br/>
        <h3 style={{ textAlign: 'center'}}>Beta</h3>
        <BetaLabel />
        <br/>
        <h3 style={{ textAlign: 'center'}}>Try</h3>
        <TryLabel />
        <br/>
        <h3 style={{ textAlign: 'center'}}>Locked Feature</h3>
        <LockedFeatureLabel />
        <br/>
        <h3 style={{ textAlign: 'center'}}>Coming Soon</h3>
        <ComingSoonLabel />
        <br/>
        <h3 style={{ textAlign: 'center'}}>Tips</h3>
        <TipsLabel />
        <br/>
        <h3 style={{ textAlign: 'center'}}>Alert</h3>
        <AlertLabel />
        <br/>
        <h3 style={{ textAlign: 'center'}}>Upgrade</h3>
        <UpgradeLabel />
        <br/>
        <h3 style={{ textAlign: 'center'}}>New Feature</h3>
        <NewFeatureLabel />
      </div>
    );
  }
}

export default App;
