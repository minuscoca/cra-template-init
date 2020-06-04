import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import route from 'constants/route'


export default function About(props) {
  const history = useHistory()
  const { t, i18n } = useTranslation()

  const goToPage = (path) => history.push(path)
  const handleChangeLanguage = (lang) => i18n.changeLanguage(lang)

  return (
    <React.Fragment>
      <h1>{t('pages.about.title')}</h1>

      <div
        style={{ color: '#aaa', textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => goToPage(route.home)}
      >
        {t('pages.home.title')}
      </div>

      <div>{t('language')}</div>
      <button onClick={() => handleChangeLanguage('zh-TW')}>zh-TW</button>
      <button onClick={() => handleChangeLanguage('en-US')}>en-US</button>
    </React.Fragment>
  )
}

About.propTypes = {

}