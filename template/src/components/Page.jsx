import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

export default function Page (props) {
  const { children } = props
  const classes = useStyles(props)

  return (
    <div className={classes.pageWrap}>
      {children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.any,
}

const useStyles = createUseStyles({
  pageWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100vh',
    width: '100%',
  },
})