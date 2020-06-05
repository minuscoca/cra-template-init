import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

// Components
import LeftSidebar from 'components/LeftSidebar'
import PageContent from 'components/PageContent'

export default function Main(props) {
  const { children, leftSidebar } = props
  const classes = useStlyes(props)

  return (
    <main className={classes.bodyWrap}>
      <LeftSidebar content={leftSidebar} />
      <PageContent>
        {children}
      </PageContent>
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.any,
  leftSidebar: PropTypes.any,
}
const useStlyes = createUseStyles({
  bodyWrap: {
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})