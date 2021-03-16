import React from 'react'
import { Link, navigate } from '@reach/router'
import { getCurrentUser, isLoggedIn, logout } from '../../utils/auth'
import {
  status,
  status__text,
  status__column,
  status__last,
} from './status.module.css'

const Status = () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <p className={status__text}>
        <span className={status__column}>
          To view the list you need to {` `}
        </span>
        <Link className={status__column} to="/app/login">
          log in
        </Link>
      </p>
    )
  } else {
    const { name } = getCurrentUser()

    details = (
      <p className={status__text}>
        <span className={status__column}>
          Logged in as {name}.{` `}
        </span>
        <a
          className={`${status__column} ${status__last}`}
          href="/"
          onClick={(event) => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          log out
        </a>
      </p>
    )
  }

  return <div className={status}>{details}</div>
}

export default Status
