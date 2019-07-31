import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

import NavLink from '../NavLink/NavLink'

import { useStyles } from './styles'
import { useSiteTitle } from '../../shared/hooks/useSiteTitle'
import { Container } from '@material-ui/core'

function Header({ noGutterBottom }) {
  const classes = useStyles(noGutterBottom)
  const siteTitle = useSiteTitle()

  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.titleLink}>
              {siteTitle}
            </Link>
          </Typography>
          <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink color="secondary" variant="contained" to="/contact">
              Contact Me
            </NavLink>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
