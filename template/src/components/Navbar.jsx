import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

// Constants
import theme from 'constants/theme'

export default function Navbar(props) {
  const classes = useStyles(props)
  const { left, middle, right } = props
  const [ emptyDivHeight, seteEptyDivHeight ] = React.useState(24)

  return (
    <React.Fragment>
      <div
        ref={(ref) => { if (ref) seteEptyDivHeight(ref.clientHeight) }}
        className={classes.navbarWrap}
      >
        <div className={classes.navbarContnet}>{left}</div>
        <div className={classes.navbarContnet}>{middle}</div>
        <div className={classes.navbarContnet}>{right}</div>
      </div>
      <div className={classes.emptyDiv} style={{ height: emptyDivHeight }} id='emptyDiv'/>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  left: PropTypes.any,
  middle: PropTypes.any,
  right: PropTypes.any,
}

const useStyles = createUseStyles({
  navbarWrap: {
    position: 'fixed',
    height: 48,
    width: '100%',
    padding: '16px 24px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.color.primary,
    color: theme.text.color.primary.contrast,
    cursor: 'pointer',
  },
  navbarContnet: {
    '&:hover': {
      color: theme.text.color.primary.hover,
      transition: 'color 0.2s ease-out',
    },
  },
})