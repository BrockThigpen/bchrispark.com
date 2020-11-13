import React from 'react';

export default function HomePage () {
    const style = {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: "center"
    }
    return(
    <>
      <div style={style}>
        <img alt={'fat arthur'} src={'https://bit.ly/3kLsVGg'}/>
      </div>
    </>
    )
}