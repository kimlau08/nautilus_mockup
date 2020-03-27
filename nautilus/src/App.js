import React from 'react';
import ChannelComponent from './components/channel';
import {ChannelRow1} from './components/channelRow';
import {ChannelRow2} from './components/channelRow';
import {ChannelRow3} from './components/channelRow';
import {ChannelRow4} from './components/channelRow';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="channelHeader">Channels</h1>
      <h2 className="channelHeadline">TUNE IN TO <span className="italicFont">NAUTILUS'</span> DEEP DIVE PORTALS</h2>

      //Channel row functional components
      <ChannelRow1 />
      <ChannelRow2 />
      <ChannelRow3 />
      <ChannelRow4 />

    </div>
  );
}

export default App;
