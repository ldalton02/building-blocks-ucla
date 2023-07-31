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
        minHeight: '80vh',
    },
    minHeight: '70vh',
    [theme.breakpoints.up('lg')]: {
        marginTop: '10%',
        minHeight: '69vh',
    },
}));


const MainSection = styled('div')(({ theme }) => ({
    margin: 'auto',
    padding: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
        marginLeft: '10%',
        marginRight: '10%'
    }

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
    marginTop: '10vh',
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

const AboutUsContainer = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}));
const ImageHolder = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    objectFit: 'contain'
}));

const EBoardContainer = styled('div')(({ theme }) => ({

    [theme.breakpoints.up('lg')]: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 15%'
    },

    [theme.breakpoints.down('md')]: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 10%',
        gridGap: '5%'
    }
}));





// ----------------------------------------------------------------------


const ImageBox = (src) => (
    <Box
        component="img"
        sx={{
            alignItems: 'center',
            maxWidth: {
                sm: '80%',
                lg: '60%'
            },
            borderRadius: '3%',
        }}
        alt="Portrait photo"
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


export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title> About Us </title>
            </Helmet>
            <Container>
                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ y: -40, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                    }}
                    style={{ marginTop: 5, }}
                >
                    <Typography variant="h1" textAlign='center' paragraph>
                        About Us
                    </Typography>
                    <AboutUsContainer>
                        <MainSection>
                            <Typography variant="body1" textAlign='left' gutterBottom>
                                Our founders, Albert and Luke, had to work very hard to get their current summmer internships as an Accenture Summer Analyst and Google Software Engineering intern, respectively.
                            </Typography>
                            <Typography variant="body1" textAlign='left' paragraph>
                                They felt this whole process would have been much simple if they were able to find some information about how to get their dream internships from somebody at their school.
                            </Typography>
                            <Typography variant="body1" textAlign='left' paragraph>
                                They both spent a lot of time researching online, without any guidance, making the internship application grind a painful process.
                            </Typography>
                            <Typography variant="body1" textAlign='left' paragraph>
                                This process doesn't need to be so hard, and we want to make it easier for young UCLA students to figure out how to get the internship of their dreams.
                            </Typography>
                        </MainSection>
                        {/* <ImageHolder>
                            {ImageBox('/assets/images/portrait/albertwang.jpg',)}
                            <Typography variant='body2'>Albert Wang, Co-Founder</Typography>
                        </ImageHolder>
                        <ImageHolder>
                            {ImageBox('/assets/images/portrait/lukedalton.jpg')}
                            <Typography variant='body2'>Luke Dalton, Co-Founder</Typography>
                        </ImageHolder> */}
                    </AboutUsContainer>
                    <Typography variant="h3" textAlign='center' paragraph>
                        Current Executive Board
                    </Typography>
                    <EBoardContainer>
                        <ImageHolder>
                            {ImageBox('/assets/images/portrait/albertwang.jpg',)}
                            <Typography variant='body2' color='text.secondary'>Albert Wang, Co-Founder</Typography>
                        </ImageHolder>
                        <ImageHolder>
                            {ImageBox('/assets/images/portrait/lukedalton.jpg')}
                            <Typography variant='body2' color='text.secondary'>Luke Dalton, Co-Founder</Typography>
                        </ImageHolder>
                    </EBoardContainer>
                </motion.div>
            </Container >
        </>
    );
}
