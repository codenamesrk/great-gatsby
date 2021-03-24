import React from 'react'
import Layout from '../components/Layout'
import View from '../components/View'
import { Issues } from '../components/List'
import Button from '../components/Button'
import { isLoggedIn } from '../utils/auth'

const Index = () => (
  <Layout>
    <View title="Demo Application">
      <p>
        Proof of concept to list the bus shelters for the Department of
        Transport, Abu Dhabi.
      </p>
      {isLoggedIn() ? (
        <>
          <Button to="/app/list">Bus Shelters</Button>
          <Issues />
        </>
      ) : (
        <>
          <Button to="/app/login">Login</Button>
        </>
      )}
    </View>
  </Layout>
)

export default Index
