import React, { useEffect, useState } from 'react'
import View from '../View'
import { grid__shelters, card__shelter } from './list.module.css'

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

const List = () => {
  const [loading, setLoading] = useState(false)
  const [users, setData] = useState([])
  // const { name, legalName, email } = getCurrentUser()

  useEffect(() => {
    setLoading(true)
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <View title="List of Bus Shelters">
      <>
        {loading && 'Loading...'}
        <section className={grid__shelters}>
          {users.map((user) => (
            <div key={user.id} className={card__shelter}>
              <h4>{user.name}</h4>
              <h5>{user.email}</h5>
              <h5>{user.website}</h5>
            </div>
          ))}
        </section>
      </>
    </View>
  )
}

export default List
