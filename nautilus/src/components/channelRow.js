import React from 'react';
import ChannelComponent from './channel';
import '../App.css';

//Import row1 channel images
import bioImg from '../assets/bio_and_beyond.jpeg';
import engImg from '../assets/wise_sci_and_engineering.png';
import quantaImg from '../assets/abstractions.jpeg';

//Import row2 channel images
import earthImg from '../assets/earth.jpeg';
import burgerImg from '../assets/tlas.jpeg';
import cosmosImg from '../assets/cosmos.jpeg';

//Import row3 channel images
import poetryImg from '../assets/poetry.jpeg';
import agingImg from '../assets/aging.png';
import allianceImg from '../assets/alliance.png';

//Import row4 channel images
import neroImg from '../assets/maxplanck.jpeg';


//Font style to be used for inline styling in channel titles
const boldBlueFont = {
    color: '#5FAFEC',
    fontWeight: 'bold' 
}
const boldRedFont = {
    color: '#F95757',
    fontWeight: 'bold' 
}
const boldGreenFont = {
    color: 'green',
    fontWeight: 'bold' 
}
const boldFont = {
    fontWeight: 'bold' 
}
const regularFont = {
    fontWeight: 'regular' 
}
const regularGreenFont = {
    color: 'green',
    fontWeight: 'regular' 
}
const boldItalicFont = {
    fontStyle: 'italic',
    fontWeight: 'bold' 
}
const hFont = {
    fontFamily: 'Haettenschweiler',
    fontSize: '16px',
}


//Render row 1 channels
export function ChannelRow1() {
    
    return (
        <div className="channelRow">
            <ChannelComponent title="BIOLOGY+BEYOND" titleStyle={boldFont} uniformTitleStyle={false} firstWordStyle={boldBlueFont} image={bioImg} description="Making Sense of the Genome, at Last" author="by Adam Piare" />
        
            <ChannelComponent title="Women in Science & Engineering" titleStyle={hFont} uniformTitleStyle={true} firstWordStyle={boldBlueFont} image={engImg} description="Your Brain Is On the Brink of Chaos" author="by Kelly Clancy" />
            
            <ChannelComponent title="QUANTA Abstractions" titleStyle={regularFont} uniformTitleStyle={false} firstWordStyle={boldFont} image={quantaImg} description="Mathematicians calculate How Randomness Creeps in" author="by Marcus Woo" />
        </div>
    )
}

//Render row 2 channels
export function ChannelRow2() {
    
    return (
        <div className="channelRow">
            <ChannelComponent title="EARTH" titleStyle={boldRedFont} uniformTitleStyle={true} image={earthImg} description="The Deep Time of Walden Pond" author="by Curt Stager" />
        
            <ChannelComponent title="THINK LIKE A SCIENTIST" titleStyle={boldFont} uniformTitleStyle={false} firstWordStyle={boldBlueFont} image={burgerImg} description="Your Brain Is On the Brink of Chaos" author="by Kelly Clancy" />
            
            <ChannelComponent title="Cosmos" titleStyle={boldItalicFont} uniformTitleStyle={true} image={cosmosImg} description="How Much Should Expectation Drive Science?" author="by Claudia Geib" />
        </div>
    )
}

//Render row 3 channels
export function ChannelRow3() {
    
    return (
        <div className="channelRow">
            <ChannelComponent title="POETRY IN SCIENCE" titleStyle={boldFont} uniformTitleStyle={true} image={poetryImg} description="On Observation and Imagination" author="by Gillian Osborne" />
        
            <ChannelComponent title="Aging" titleStyle={boldItalicFont} uniformTitleStyle={true} image={agingImg} description="Yes, Life in the Fast Lane Kills You" author="by Philip Ball" />
            
            <ChannelComponent title="SCIENCE PHILANTROPY ALLIANCE" titleStyle={regularFont} uniformTitleStyle={false} firstWordStyle={boldBlueFont} image={allianceImg} description="Taking To the Stars" author="by Science Philantropy Alliance" />
        </div>
    )
}

//Render row 4 channel
export function ChannelRow4() {
    
    return (
        <div className="channelRow">
            <ChannelComponent title="MP Nero" titleStyle={boldGreenFont} uniformTitleStyle={false} firstWordStyle={regularGreenFont} image={neroImg} description="Understanding the Brain with the Help of Artificial Intelligence" author="by Max Plank Institute of Neurobiology" />
        </div>
    )
}