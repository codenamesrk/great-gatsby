import React from 'react'
import Layout from '../components/Layout'
import Status from '../components/Status'
import { Router } from '@reach/router'
import PrivateRoute from '../components/PrivateRoute'
import Login from '../components/Login'
import Details from '../components/Details'
import Profile from '../components/Profile'
import List from '../components/List'

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/details" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/list" component={List} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
