import * as React from "react";
import { motion } from "framer-motion";

import { styled } from '@mui/material/styles';

const StyledLandingContainer = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '500px',
    background: 'white', /* linear-gradient(180deg, #05f, #09f) */
}));

const StyledIconContainer = styled('div')(({ theme }) => ({
    width: '150px',
    height: '150px',
    display: 'flex',
    placeContent: 'center',
    overflow: 'hidden',
    background: 'rgba(0, 0, 0, 1)',
    borderRadius: '30px'
}));

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
    }
};

export function LandingPage() {
    return (
        <StyledLandingContainer>
            <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
                    delay: 2.5,
                }}
            >
                <StyledIconContainer>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        style={{
                            width: '56%',
                            overflow: 'visible',
                            stroke: '#fff',
                            strokeWidth: 2,
                            strokeLinejoin: 'round',
                            strokeLinecap: 'round',
                        }}
                    >
                        <motion.path
                            d="M 10 0 L 30 0 L 30 80 L 90 80 L 90 100 L 10 100 z"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                        />

                    </motion.svg>
                </StyledIconContainer>
            </motion.div>
        </StyledLandingContainer>
    );
}