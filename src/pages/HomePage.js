import * as React from 'react';
import { useRef } from 'react';

import { Helmet } from 'react-helmet-async';
import { Link as RouterLink, NavLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box, Tooltip, Card, CardContent, Link, IconButton, Button } from '@mui/material';


import { motion, useMotionValue, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';
// Icons
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const StyledContent = styled('div')(({ theme }) => ({
  margin: 'auto',
  marginTop: '20%',
  display: 'flex',
  justifyContent: 'left',
  flexDirection: 'column',
  padding: 0,
  // messy height formatting - TODO FIX
  [theme.breakpoints.down('sm')]: {
    minHeight: '80vh',
  },
  minHeight: '70vh',
  [theme.breakpoints.up('lg')]: {
    marginTop: '10%',
    minHeight: '69vh',
  },
}));

const LandingParagraph = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  maxWidth: '80%',
  fontSize: 20,
  [theme.breakpoints.up('lg')]: {
    maxWidth: '40%',
  },
}));

const StyledEmojiContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
}));

const StyledDownArrowContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10vh'
}));


const StyledImage = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));


const SectonTitleContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const AboutMeContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '1em',
  color: 'black',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

const StyledSkillsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '1em',
  color: 'black',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

const TextContainer = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  color: 'black',
}));

const CustomLink = styled('a')(({ theme }) => ({
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: '2px',
    backgroundColor: theme.palette.primary,
    transition: 'width 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
  },
  '&:hover': {
    left: 0,
    right: 'auto',
    width: '100%',
  }
}));

// ----------------------------------------------------------------------

const SectionTitle = (text) => (
  <SectonTitleContainer>
    <Typography variant='h2' noWrap >
      {text}
    </Typography>
    <Box sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2 }} >
      <hr style={{ width: '100%', height: '1px', border: 'none', backgroundColor: 'black' }} />
    </Box>
  </SectonTitleContainer>
)


export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Luke Dalton </title>
      </Helmet>
      <Container>
        <StyledContent sx={{ textAlign: 'left', alignItems: 'left' }}>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
          >
            <StyledEmojiContainer>
              <Typography variant="h1" paragraph>
                Hey There!
              </Typography>
              <motion.div
                animate={{
                  rotate: [0, 30, -30, 30, -30, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.7, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                style={{ height: '100%', marginLeft: 20 }}>
                <Typography variant='h1' paragraph>
                  👋
                </Typography>
              </motion.div>
            </StyledEmojiContainer>

            <Typography variant="h1" paragraph>
              My name is Luke Dalton.
            </Typography>

            <Typography variant="h3" sx={{ color: 'text.secondary' }}>
              I'm a third year Computer Science student at UCLA.
            </Typography>

            <LandingParagraph>
              <Typography variant="p" sx={{ color: 'text.secondary' }} >
                My main areas of experience so far are Web Development with React and analysis of large-scale systems using SQL to query data and C++ to log data.
              </Typography>
            </LandingParagraph>
          </motion.div>
          <StyledDownArrowContainer>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 2,
                scale: {
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 15,
                  delay: 4
                }
              }}
              animate={{
                scale: [1, 1.5, 1, 1.5, 1],
              }}
            >
              <Iconify
                width={50}
                icon="eva:chevron-down-fill"

              />
            </motion.div>
          </StyledDownArrowContainer>
        </StyledContent>

        <StyledContent>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
          >
            {SectionTitle('About Me')}
            <AboutMeContainer>
              <TextContainer>
                <Typography variant="p" sx={{ color: 'text.secondary', fontSize: 20 }} paragraph>
                  I'm currently a third-year student at UCLA majoring in Computer Science and am loving every moment of it.
                  After interning at Google last summer, I became more interested in the startup scene of Silicon Valley. I have decided to minor in entrepreneurship to learn more about starting my own company in the future.
                </Typography>
                <Typography variant="p" sx={{ color: 'text.secondary', fontSize: 20 }} paragraph>
                  I'm excited to return to Google for the summer of 2023 as a SWE intern!
                  Currently, I'm open to work opportunities in the fall quarter of 2023 as I plan to take a quarter off to get more work experienece.
                </Typography>
                <Typography variant="p" sx={{ color: 'text.secondary', fontSize: 20 }} >
                  I've also just started a new section of this site to review what I'm currently reading, available <RouterLink to='/blog'> here.</RouterLink>
                </Typography>
              </TextContainer>
              <StyledImage>
                <Box
                  component="img"
                  sx={{
                    borderRadius: '10%',
                    alignItems: 'center',
                    width: {
                      xs: '80%',
                      md: '70%',
                      lg: '60%',
                    },
                    marginTop: {
                      xs: 2,
                      lg: 0,
                    },
                    boxShadow: `6px 6px black`
                  }}
                  alt="The house from the offer."
                  src="/assets/images/portrait/desk_selfie.jpg"
                />
                <TextContainer sx={{ textAlign: "center", fontSize: 40 }}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      rotate: [0, 10, -10, 10, -10],
                    }}
                    transition={{
                      scale: {
                        duration: 0.2,
                      },
                      duration: 1,
                      ease: "easeInOut",
                      times: [0, 0.3, 0.5, 0.7, 1],
                      repeat: Infinity,
                      repeatDelay: 3
                    }}>
                    <Tooltip title='Me hard at work in the Google Bay View office' placement='bottom' sx={{ color: 'black' }} arrow>
                      <Typography variant="p">
                        🔎
                      </Typography>
                    </Tooltip>
                  </motion.div>
                </TextContainer>
              </StyledImage>
            </AboutMeContainer>
          </motion.div>
        </StyledContent>

        <StyledContent>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
          >
            {SectionTitle('Experience + Work')}
            <Typography variant='p' sx={{ fontSize: 20, marginTop: 3 }} paragraph>
              Currently, I've only worked at a few places:
            </Typography>
            <Card sx={{ /* custom sx here */ }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Google STEP Intern
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  June 2022 - September 2022
                </Typography>
                <Typography variant="body2">
                  Improved advertisement suggestion to users by creating an internal analysis tool that used across 3 advertisement teams.
                  <br />  Retrieved terabytes of data and calculated distributions with user inputs using advanced SQL queries.
                  <br />  Moved logging data throughout a machine learning process using C++.
                </Typography>
              </CardContent>

              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
            <Card sx={{ marginTop: 2 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Web Developer for UCLA Social Sciences Computing
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  May 2021 - May 2022
                </Typography>
                <Typography variant="body2">
                  Updated and maintained a UCLA Social Sciences website to make hate crimes occurrences available to the public.
                  <br />
                  Worked with PostgreSQL, NodeJS, and ReactJS to create an API and display data on an interactive map.
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
            <Card sx={{ marginTop: 2 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Learning Lab Developer for ACM Teach LA (ACM @ UCLA)
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  May 2021 - Mar 2022
                </Typography>
                <Typography variant="body2">
                  Alongside a small team, worked with ReactJS to create a small web app designed to educate aspiring child programmers on Python.
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
            <Typography variant='p' sx={{ fontSize: 20, marginTop: 3 }} paragraph>
              Outside of the work listed above, I have gotten comfortable with multiple other tools and languages through clubs, other work experiences, and course work.
            </Typography>
            <AboutMeContainer>
              <Card sx={{ marginTop: 2, width: '100%' }}>
                <CardContent>
                  <Typography variant="h4" component="div">
                    Languages
                  </Typography>
                  <Typography variant='p' sx={{}} paragraph >
                    <br /> {bull} JavaScript (ES6)
                    <br /> {bull} C/C++
                    <br /> {bull} TypeScript
                    <br /> {bull} SQL
                    <br /> {bull} Python
                  </Typography>
                </CardContent>
                {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
              </Card>
              <Card sx={{ marginTop: 2 }}>
                <CardContent>
                  <Typography variant="h4" component="div">
                    Technologies
                  </Typography>
                  <Typography variant='p' sx={{}} paragraph >
                    <br /> {bull} ReactJS
                    <br /> {bull} Git (along with other version control systems)
                    <br /> {bull} Jekyll
                    <br /> {bull} MongoDB
                    <br /> {bull} CSS/Sass
                  </Typography>
                </CardContent>
                {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
              </Card>
            </AboutMeContainer>
          </motion.div>
        </StyledContent>

        <StyledContent>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
          >
            {SectionTitle('Contact Me')}
            <Typography variant='p' sx={{ fontSize: 20 }} paragraph>
              Want to get into contact with me? Email me at <Link underline='hover' href='mailto:lukedalton221@gmail.com'>lukedalton221@gmail.com</Link>
            </Typography>
            <Typography variant='p' sx={{ fontSize: 20 }} paragraph>
              I'm always open to new work opportunities and ideas. Maybe we could build something great together!
            </Typography>
            <Typography variant='p' sx={{ fontSize: 20 }}>
              My socials are available at the following sites:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Button sx={{ marginTop: 2, marginRight: 2 }} variant='outlined' startIcon={<Iconify icon="eva:github-outline" />}>
                Github
              </Button>
              <Button sx={{ marginTop: 2, marginRight: 2 }} variant='outlined' startIcon={<Iconify icon="eva:linkedin-outline" />}>
                Linkedin
              </Button>
            </Box>
            <Typography sx={{ fontSize: 20, textAlign: 'center', marginTop: {xs: '15vh', lg: '20vh'}}}>
              Created with <motion.p
                animate={{
                  scale: [1, 1.4, 1, 1.4, 1]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                ❤️
              </motion.p>
              by Luke Dalton
            </Typography>
          </motion.div>

        </StyledContent>
      </Container>
    </>
  );
}
