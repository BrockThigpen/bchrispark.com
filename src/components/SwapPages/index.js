import React from 'react';
import {PATHS} from '../../routes'
import Button from '../Button'
import { useHistory, useLocation } from 'react-router-dom'

function SwapPagesButton  () {
    const history = useHistory()
    const location = useLocation()

    const isHome = () => {
      if (location.pathname === '/') return true
      return false
    }

    const handleButtonClick = () => {
      const path = isHome() ? PATHS.resume : PATHS.home
      history.push(path)
    }

    return (
      <Button 
        label={'Swap Pages'} 
        handleButtonClick={handleButtonClick}
      />
    )

}

export default SwapPagesButton