import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// framer-motion
import { motion } from 'framer-motion';

// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';


// ----------------------------------------------------------------------


export default function BlogPage() {
  return (
    <>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
      >
        <Helmet>
          <title> Luke's Blog </title>
        </Helmet>

        <Container>
          <Stack direction="column" alignItems="left" justifyContent="space-between" mb={5}>
            <Typography variant="h4">
              My Blog
            </Typography>
            <Typography variant="p" >
              Been reading a lot lately. Thought I might as well add a blog onto my site to document what I've reading. Might also add some stuff later on about other things I'm up to.
            </Typography>
          </Stack>


          <Typography variant="h6" sx={{marginBottom: 2}}>
            Some Things I've Read Recently:
          </Typography>
          <Grid container spacing={3}>
            {POSTS.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </Container>
      </motion.div>
    </>
  );
}
