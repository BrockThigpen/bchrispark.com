import React from 'react';
import { Toolbar} from '@material-ui/core'
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';

export default function MainLayout({children}) {
  return (
    <>
      <div
      style={{
          display: 'flex'
      }}>
        <TopBar/>
        <SideBar/>
      <div
        style={{
            flexGrow: 1,
            padding: 15
        }}>
          <Toolbar />
          
            {children}
        </div>
      </div>
    </>
  )
}
