import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'

// Components
import Page from 'components/Page'
import Navbar from 'components/Navbar'
import Main from 'components/Main'
import Header from 'components/Header'


export default function Home(props) {
  const { t } = useTranslation()
  const classes = useStyles(props)

  const renderNavbar = () => {
    const left = 'Navabr Left'
    const middle = 'Navabr Middle'
    const right = 'Navabr Right'
    return <Navbar left={left} middle={middle} right={right} />
  }

  return (
    <Page>
      {renderNavbar()}
      <Main>
        <Header>{t('page.home.title')}</Header>
      </Main>
    </Page>

  )
}

Home.propTypes = {
}

const useStyles = createUseStyles({

})