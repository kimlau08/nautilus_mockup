import React from 'react';
import '../App.css';

export default function ChannelComponent(props) {

    //Special formatting of channel titles requires different fonts for first word and rest of string (tail). This code make a copy of the first word and the tail string for rendering later.
    let firstWord="";   //a copy of the first word of title
    let tailStr="";     //a copy of the rest of title
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


    //rendering of title, img, description, and author
    if (!props.uniformTitleStyle) {
        //render first word and tail string of the title using different styles
        return (
            <div className="channelBox">
                <p className="channelTitle"><span style={props.firstWordStyle}>{firstWord}</span><span style={props.titleStyle}>{tailStr}</span></p>
                <img className="channelImg" src={props.image} />
                <p className="descriptionTxt">{props.description}</p>
                <p className="authorTxt">{props.author}</p>
            </div>
        )       
    } else {
        //render the title with only one font style
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

