import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

export default function Header (props) {
  const { children } = props
  const classes= useStyles(props)

  return (
    <main className={classes.headerWrap}>
      {children}
    </main>
  )
}

Header.propTypes = {
  children: PropTypes.any,
}

const useStyles = createUseStyles({
  headerWrap: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 24px',
    fontSize: 24,
    fontWeight: 'bold',
  },
})