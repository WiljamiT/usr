import React from 'react'
import './Footer.css'
import texts from '../../text.json';

const Footer = () => {
  return (
    <footer>
      <div>
        <i>{texts.footer.name}</i>
      </div>
    </footer>
  )
}

export default Footer