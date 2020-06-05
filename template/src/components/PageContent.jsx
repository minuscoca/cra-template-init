import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

// Constants
import theme from 'constants/theme'

export default function PageContent (props) {
  const { children } = props
  const classes = useStyles(props)
  
  return (
    <main className={classes.pageContentWrap}>
      {children}
    </main>
  )
}

PageContent.propTypes = {
  children: PropTypes.any,
}

const useStyles = createUseStyles({
  pageContentWrap: {
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme.color.paper,
  },
})