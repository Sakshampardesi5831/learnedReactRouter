import { Fragment } from 'react'
import {Header,Footer} from './components/index'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default Layout