import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

// Constants
import theme from 'constants/theme'
import route from 'constants/route'

export default function LeftSidebar(props) {
  const { content } = props
  const classes = useStyles(props)
  const history = useHistory()
  const { t, i18n } = useTranslation()

  const goToPage = (path) => history.push(path)
  const handleChangeLanguage = (lang) => i18n.changeLanguage(lang)

  const defaultContent = (
    <React.Fragment>
      <div className={classes.defaultList}>
        <div className={classes.defaultListHeader}>PAGES</div>
        <div className={classes.defaultListItem} onClick={() => goToPage(route.home)}>{t('page.home.title')}</div>
        <div className={classes.defaultListItem} onClick={() => goToPage(route.about)}>{t('page.about.title')}</div>
        <div className={classes.defaultListItem} onClick={() => goToPage(route.user)}>{t('page.user.title')}</div>
      </div>
      <div className={classes.defaultList}>
        <div className={classes.defaultListHeader}>LANGUAGES</div>
        <div className={classes.defaultListItem} onClick={() => handleChangeLanguage('en-US')}>en-US</div>
        <div className={classes.defaultListItem} onClick={() => handleChangeLanguage('zh-TW')}>zh-TW</div>
      </div>
    </React.Fragment>
  )

  return (
    <div className={classes.leftSidebarWrap}>
      {content || defaultContent}
    </div>
  )
}

LeftSidebar.propTypes = {
  content: PropTypes.any,
}

const useStyles = createUseStyles({
  leftSidebarWrap: {
    alignSelf: 'stretch',
    width: 240,
    backgroundColor: theme.color.secondary,
    color: theme.text.color.primary.contrast,
    padding: '16px 0px',
  },
  defaultList: {
    marginBottom: 16,
  },
  defaultListHeader: {
    padding: '8px 16px',
    fontSize: 18,
    fontWeight: 'bold',
  },
  defaultListItem: {
    padding: '8px 16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.color.paper,
      color:theme.text.color.primary.main,
      borderRight: `16px solid ${theme.color.secondary}`,
      fontWeight: 'bold',
    },
  },
})