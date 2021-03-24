import React from 'react'
import { Link } from 'gatsby'
import { button__white, button__blue, button__small } from './button.module.css'

const Button = ({ to, children }) => (
  <Link className={button__white} to={to}>
    {children}
  </Link>
)

export const SubmitButton = ({ children, type }) => (
  <input
    className={type === 'submit' ? button__white : button__blue}
    type={type}
    value={children}
  />
)

export const SmallButton = ({ children, onClick, label }) => (
  <button
    aria-label={label}
    onClick={() => onClick()}
    className={button__small}
  >
    {children}
  </button>
)

export default Button
