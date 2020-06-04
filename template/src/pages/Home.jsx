import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import route from 'constants/route'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'redux/actions'

export default function Home(props) {
  const history = useHistory()
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.getIn([ 'user' ]))
  const goToPage = (path) => history.push(path)
  const handleChangeLanguage = (lang) => i18n.changeLanguage(lang)

  return (
    <React.Fragment>
      <h1>{t('pages.home.title')}</h1>
      <div
        style={{ color: '#aaa', textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => goToPage(route.about)}
      >
        {t('pages.about.title')}
      </div>
      <div>{t('language')}</div>
      <div>
      <button onClick={() => handleChangeLanguage('zh-TW')}>zh-TW</button>
      <button onClick={() => handleChangeLanguage('en-US')}>en-US</button>
      </div>
      <div>
        {user
          ? <button onClick={() => dispatch(actions.user.resetUser()) }>Logout</button>
          : <button onClick={() => dispatch(actions.user.fetchUser()) }>Login</button>}
      </div>
    </React.Fragment>
  )
}

Home.propTypes = {
}