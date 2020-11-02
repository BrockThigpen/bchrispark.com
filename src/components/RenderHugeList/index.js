import React, { useEffect, useState, memo } from 'react';
import Button from '../Button'

const RenderHugeList = memo(({ anotherFunction, aVariable }) => {
  const [bigList, setBigList] = useState()
  
  const myFunction = () => {
    setBigList([])

    console.log('making api call')
    // api call
    setTimeout(() => {
      setBigList( [1, 2, 3, 4, 5, 6, 7, 10])
    }, 3000);
  }

  // useEffect(myFunction, [anotherFunction])

  return (
    <>
    <div>
      {bigList?.map(item => <div>{item}</div>)}
    </div>
    <Button label={'Change State'} handleButtonClick={() => {
    }} />
    </>
  );
});

export default RenderHugeList;