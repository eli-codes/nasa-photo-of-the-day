import React from 'react';
import styled from 'styled-components';  

const DisplayText = styled.p`
    color: lightblue;
    font-size: 100%;
    font-family: Helvetica;
`
const HeaderFont = styled.h3`
    color: lightblue;
    font-size: 3em;
    font-family: helvetica;
`
const PhotoDate = styled.p`
    color: lightblue;
    font-size: 150%
    font-family: helvetica;
`

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <HeaderFont>{props.photo.title}</HeaderFont>
            <PhotoDate>{props.photo.date}</PhotoDate>
            <img src={props.photo.hdurl} />
            <DisplayText className="explanation">{props.photo.explanation}</DisplayText>
        </div>
    )

}

export default NasaPhoto;