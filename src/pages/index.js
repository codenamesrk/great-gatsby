import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import View from '../components/View'
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
          <Button to="/app/list">View the list</Button>
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
