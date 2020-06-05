import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

// Constants
import theme from 'constants/theme'

export default function Button (props) {
  const { children, handleFunction } = props
  const classes = useStyles(props)

  return (
    <main className={classes.buttonWrap} onClick={handleFunction}>
      {children}
    </main>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  handleFunction: PropTypes.func,
}

const useStyles = createUseStyles({
  buttonWrap: {
    padding: '8px 16px',
    border: `1px solid ${theme.color.primary}`,
    borderRadius: 16,
    color: theme.text.color.primary.main,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.color.primary,
      color: theme.text.color.primary.hover,
      transition: '0.3s ease-out',
    },
  },
})