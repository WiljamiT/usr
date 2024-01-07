import React from 'react'
import './Footer.css'
import texts from '../../text.json';

const Footer = () => {
  return (
    <footer>
      <i>{texts.footer.name}</i>
    </footer>
  )
}

export default Footer