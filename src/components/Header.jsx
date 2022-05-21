import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'STORE05.RU',
  bgColor: 'rgba(217, 30, 30, 1);',
  textColor: '#ffffff',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
