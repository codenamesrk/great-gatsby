import React from 'react'
import { Link } from 'gatsby'
import { button__white } from './button.module.css'

const Button = ({ to, children }) => (
  <Link className={button__white} to={to}>
    {children}
  </Link>
)

export const SubmitButton = ({ children }) => (
  <input className={button__white} type="submit" value={children} />
)

export default Button
