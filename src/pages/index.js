import React from 'react'
import Layout from '../components/Layout'
import View from '../components/View'
import { Issues } from '../components/List'
import Button from '../components/Button'
import { isLoggedIn } from '../utils/auth'

const Index = () => (
  <Layout>
    <View title={isLoggedIn() ? 'Dashboard' : 'Demo Application'}>
      {isLoggedIn() ? (
        <>
          <Button to="/app/list">View Bus Shelters</Button>
          <Issues />
        </>
      ) : (
        <>
          <p>
            Proof of concept to list the bus shelters for the Department of
            Transport, Abu Dhabi.
          </p>
          <Button to="/app/login">Login</Button>
        </>
      )}
    </View>
  </Layout>
)

export default Index
