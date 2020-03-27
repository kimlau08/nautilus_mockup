import React from 'react';
import '../App.css';

export default function ChannelComponent(props) {

    let firstWord="";
    let tailStr="";
    let words=[];
    if (!props.uniformTitleStyle) {  //The first word is styled differently. Need to extract firstWord and tail
    
        //The first word may be followed by a '+'
        words=props.title.split('+');
        if (words.length > 1) {
            //extract first word before '+'
            firstWord=words[0]; 

            //extract rest of string, putting '+' back to the front
            let tailArray=words.slice(1, words.length);
            tailArray.unshift('+');
            tailStr=tailArray.join(' '); 
        } else {
            //The first word may be followed by a space
            words=props.title.split(' ');
            if (words.length > 1) {

                //extract first word before ' '
                firstWord=words[0]; 
    
                //extract rest of string, putting ' ' back to the front
                let tailArray=words.slice(1, words.length);
                tailArray.unshift(' ');
                tailStr=tailArray.join(' '); 
            }
        }
    }


    if (!props.uniformTitleStyle) {
        return (
            <div className="channelBox">
                <p className="channelTitle" style={props.titleStyle}><span style={props.firstWordStyle}>{firstWord}</span>{tailStr}</p>
                <img className="channelImg" src={props.image} />
                <p className="descriptionTxt">{props.description}</p>
                <p className="authorTxt">{props.author}</p>
            </div>
        )       
    } else {
        return (
            <div className="channelBox">
                <p className="channelTitle" style={props.titleStyle}>{props.title}</p>
                <img className="channelImg" src={props.image} />
                <p className="descriptionTxt">{props.description}</p>
                <p className="authorTxt">{props.author}</p>
            </div>
        )       
    }
}

