import React, { memo, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import { useStyles } from './styles'
import Testimonial from '../../../components/Testimonial'

const AboutMe = ({ testimonials = [] }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} md={5} className={classes.aboutBlock}>
        <div>
          <Typography
            variant="h4"
            component="h2"
            className={classes.sectionTitle}
          >
            Sobre Mí
          </Typography>
          <Typography variant="body1" className={classes.aboutCopy}>
            Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me
            exige, sin tapujos, que añada cerveza al whisky. Jovencillo
            emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada
            vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el
            éxtasis en un imprevisto baño de whisky y gozó como un duque.
            Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de
            gavilán. El cadáver de Wamba, rey godo de España, fue exhumado y
            trasladado en una caja de zinc.
          </Typography>
          <Typography variant="body1" className={classes.aboutCopy}>
            Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me
            exige, sin tapujos, que añada cerveza al whisky. Jovencillo
            emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada
            vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el
            éxtasis en un imprevisto baño de whisky y gozó como un duque.
            Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de
            gavilán. El cadáver de Wamba, rey godo de España, fue exhumado y
            trasladado en una caja de zinc.
          </Typography>

          <Button
            download
            onClick={event => setAnchorEl(event.currentTarget)}
            variant="outlined"
            className={classes.cta}
            aria-controls="resume-menu"
            aria-haspopup="true"
            endIcon={<ArrowDropDownIcon />}
          >
            Descargar CV
          </Button>

          <Menu
            id="resume-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem download component="a" href="/taveras-misael-cv.pdf">
              Español
            </MenuItem>
            <MenuItem
              download
              component="a"
              href="/taveras-misael-resume.pdf"
              lang="en"
            >
              English
            </MenuItem>
          </Menu>
        </div>
      </Grid>
      <Grid item xs={12} md={7} className={classes.testimonialsBlock}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          className={classes.sectionTitle}
        >
          Lo que otros dicen
        </Typography>
        <Grid container spacing={4} className={classes.testimonialsContainer}>
          {testimonials.map(({ node: testimony }, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={testimony.id}
              className={classes.cell}
            >
              <Testimonial
                name={testimony.frontmatter.title}
                position={testimony.frontmatter.position}
                profilePicture={
                  testimony.frontmatter.profilePicture.childImageSharp.fluid
                }
                testimony={testimony.body}
                highlight={(idx + 1) % 2 === 0}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default memo(AboutMe)
