import React from 'react'
import Layout from '../components/Layout'
import View from '../components/View'
import Status from '../components/Status'
import Button from '../components/Button'

const Index = () => (
  <Layout>
    <Status />
    <View title="Demo Application">
      <p>
        Proof of concept to list the bus shelters for the Department of
        Transport, Abu Dhabi.
      </p>
      <Button to="/app/list">View the list</Button>
    </View>
  </Layout>
)

export default Index
