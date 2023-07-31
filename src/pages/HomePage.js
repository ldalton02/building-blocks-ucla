import * as React from 'react';
import { useRef } from 'react';

import { Helmet } from 'react-helmet-async';
import { Link as RouterLink, NavLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box, Tooltip, Card, CardContent, Link, IconButton, Button } from '@mui/material';

/* TODO
* fix drawer ()
* describe what we do? (what do we do)
* finish socials linking, create something to link to it (maybe a calendar?)
*/

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

import { wrap } from '@motionone/utils';
// Icons


import Iconify from '../components/iconify';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const ImageBox = (src) => (
  <Box
    component="img"
    sx={{
      alignItems: 'center',
      maxWidth: {
        sm: '100%',
        lg: '80%'
      },
      marginTop: 10
    }}
    alt="The house from the offer."
    src={src}
  />
)


const logos = [
  '/assets/companylogos/google.png',
  '/assets/companylogos/databricks.png',
  '/assets/companylogos/amazon.png',
  '/assets/companylogos/imc.png',
  '/assets/companylogos/accenture.png',
  '/assets/companylogos/mckinsey.png'
]

const StyledContent = styled('div')(({ theme }) => ({
  margin: 'auto',
  marginTop: '20%',
  display: 'flex',
  justifyContent: 'left',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 0,
  width: '100%',
  // messy height formatting - TODO FIX
  [theme.breakpoints.down('sm')]: {
  },
  minHeight: '50vh',
  [theme.breakpoints.up('lg')]: {
    marginTop: '10%',
  },
}));



const AboutMeSection = styled('div')(({ theme }) => ({
  margin: 'auto',
  marginTop: '30%',
  display: 'flex',
  justifyContent: 'left',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  // messy height formatting - TODO FIX
  minHeight: '50vh',
  [theme.breakpoints.up('lg')]: {
    marginTop: '20%',
  },
}));

const LandingParagraph = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
  fontSize: 20,
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingRight: '10%',
    paddingLeft: '10%',
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
  marginTop: '20Vh'
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
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '1em',
  color: 'black',
  marginTop: '2vh',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));


const WhatWeOfferContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '1em',
  color: 'black',
  // TODO: fix small screen styling 
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

const WhatWeDoContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '40%',
  textAlign: 'left',
  paddingRight: '10%',
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

const LogosContainer = styled('div')(({ theme }) => ({

  [theme.breakpoints.up('lg')]: {
    columnCount: 3,
    columnGap: 2,
    lineHeight: 0,
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
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
        <title> Building Blocks UCLA </title>
      </Helmet>
      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center', marginBottom: '10%' }}>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
          >

            <Typography variant="h1" paragraph>
              Dream Big UCLA
            </Typography>
            <LandingParagraph>
              <Typography variant="p" sx={{ color: 'text.secondary' }} >
                Whether it be interview preparation, resume review, or just simply providing information about your dream industry, we want to help you achieve your dreams.
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

        <AboutMeSection>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: '0.2'
            }}
            style={{ width: '100%' }}

          >
            {SectionTitle('What We Do')}
          </motion.div>

          <AboutMeContainer>

            <motion.div
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: -40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
              style={{ minHeight: { lg: '40vh' }, width: '100%' }}
            >

              <WhatWeDoContainer>
                <Typography
                  variant='h4'>
                  Interview Preparations
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom>
                  With members placed in top companies, we know how difficult the interview process can be.
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom>
                  Having gone through the stressful recruiting processes ourselves, we can help you figure out where to start and what exactly to do to get the internship of your dreams.
                </Typography>
              </WhatWeDoContainer>
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: -40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: '0.2'
              }}
              style={{ minHeight: { lg: '40vh' }, width: '100%' }}

            >
              <WhatWeDoContainer>
                <Typography
                  variant='h4'>
                  Resume Review
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom>
                  A stellar resume is one of the most important things to get you an interview at a great company.
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom>
                  At our resume review sessions, one of our members with internship application experience will help you review your resume.
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom>
                  We have members who can help tailor your resume to many types of roles, including software engineering, consulting, or investment banking.
                </Typography>
              </WhatWeDoContainer>
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: -40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: '0.4'
              }}
              style={{ minHeight: { lg: '40vh' }, width: '100%' }}
            >
              <WhatWeDoContainer>
                <Typography
                  variant='h4'>
                  Club Recruitment
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom>
                  Our board members know how difficult it is to get into some of the amazing clubs on campus.
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom>
                  We want to help you choose which club is right for you and help you get into the club you actually want.
                </Typography>
              </WhatWeDoContainer>
            </motion.div>
          </AboutMeContainer>
        </AboutMeSection>


        <StyledContent style={{ minHeight: 0 }} >

          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
          >
            {SectionTitle('Where our Members Are')}
            <Typography variant='body1' style={{ marginTop: 5 }}>
              We have board members of our club working at many prestigious companies:
            </Typography>

            <StyledContent
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}
            >
              <LogosContainer>
                {logos.map(each => (
                  ImageBox(each)))
                }
              </LogosContainer>
            </StyledContent>
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
            style={{ width: '100%' }}
          >
            {SectionTitle('Get Involved')}
            <Typography variant='p' sx={{ fontSize: 20 }} paragraph>
              Want to get involved with us?
            </Typography>

            <Typography variant='p' sx={{ fontSize: 20 }}>
              Most of our events will be posted on our instagram. Check it out below:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: '5vh' }}>
              <Link href="https://instagram.com/buildingblocksucla">
                <Button sx={{ marginTop: 2, marginRight: 2 }} variant='outlined' startIcon={<Iconify icon="ri:instagram-line" />}>
                  Instagram
                </Button>
              </Link>
            </Box>
            <Typography variant='p' sx={{ fontSize: 20 }} paragraph>
              You can also email us at <Link underline='hover' href='mailto:buildingblocksucla@gmail.com'>buildingblocksucla@gmail.com</Link>
            </Typography>
          </motion.div>
        </StyledContent>
      </Container>
    </>
  );
}
