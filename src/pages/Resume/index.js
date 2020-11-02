import React from 'react';
import SwapPagesButton from '../../components/SwapPages';

export default function ResumePage () {
    const style = {
        display: 'flex', 
        width: '100vw', 
        height: '100vh', 
        justifyContent: 'center', 
        alignItems: "center"
    }
    return(
        <>
           <SwapPagesButton />
            <div style={style}>
                <img alt={'fat arthur'} src={'https://bit.ly/3kLsVGg'}/>
            </div>
        </>
    )
}