import React from 'react'
import View from './View'
import { getCurrentUser } from '../utils/auth'

const Details = () => {
  const { name, legalName, email } = getCurrentUser()

  return (
    <View title="Your Details">
      <p>Information</p>
    </View>
  )
}

export default Details
