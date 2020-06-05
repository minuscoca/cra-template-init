import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'redux/actions'

// Components
import Page from 'components/Page'
import Navbar from 'components/Navbar'
import Main from 'components/Main'
import Header from 'components/Header'
import Button from 'components/buttons/Button'

export default function User(props) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const classes = useStyles(props)

  const user = useSelector(state => state.getIn([ 'user' ]))
  const isUserLoginLoading = useSelector(state => state.getIn([ 'app', 'loading', 'isUserLoginLoading' ]))
  console.log('isUserLoginLoading', isUserLoginLoading)

  const renderNavbar = () => {
    const left = 'Navabr Left'
    const middle = 'Navabr Middle'
    const right = 'Navabr Right'
    return <Navbar left={left} middle={middle} right={right} />
  }

  const renderUser = () => {
    const { firstName, lastName, gender, age } = user.toJS()
    return (
      <table className={classes.userInfoTable}>
        <tbody>
          <tr>
            <td>Fisrt Name:</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <Page>
      {renderNavbar()}
      <Main>
        <Header>{t('page.user.title')}</Header>
        <div className={classes.content}>
          {
            user
              ? <Button handleFunction={() => dispatch(actions.user.resetUser())}>{t('button.logout')}</Button>
              : <Button handleFunction={() => dispatch(actions.user.fetchUser())}>{t('button.login')}</Button>
          }

          {isUserLoginLoading && <div className={classes.loadingMessage}>{t('message.fetchingUser')}</div>}
          {user && renderUser()}
        </div>
      </Main>
    </Page>
  )
}

User.propTypes = {

}

const useStyles = createUseStyles({
  content: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  userInfoTable: {
    margin: '16px 24px',
    border: '2px solid',
    '& td': {
      border: '1px solid',
      padding: '8px 16px',
    },
  },
  loadingMessage: {
    padding:'8px 16px',
  },
})