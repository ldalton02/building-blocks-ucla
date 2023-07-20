import { useState, forwardRef, } from 'react';
import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Link, Card, Grid, Typography, CardContent, Dialog, Button, ListItem, ListItemText, List, Divider, AppBar, Slide, Toolbar } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
//
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});


const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  position: 'absolute',
  marginTop: 3
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  const { id, cover, title, author, createdAt, review } = post;
  const latestPostLarge = false;
  const latestPost = false;

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative', cursor: "pointer" }} onClick={handleClickOpen}>
        <StyledCardMedia
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          <SvgColor
            color="paper"
            src="/assets/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          />
          <StyledCover alt={title} src={cover} />
        </StyledCardMedia>

        <CardContent
          sx={{
            height: '30%',
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {fDate(createdAt)}
          </Typography>

          <StyledTitle
            color="inherit"
            variant="subtitle2"
            underline="hover"
            gutterBottom
            sx={{
              typography: 'h5', minHeight: 60,
              color: 'common.black',
            }}
          >
            {title}
          </StyledTitle>

          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            by {author && author}
          </Typography>

        </CardContent>
      </Card>
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative', backgroundColor: 'black' }}>
            <Toolbar>
              <Button
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                Close
              </Button>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title} Review
              </Typography>
            </Toolbar>
          </AppBar>
          {review.split('\n').map((each, idx) => (
            <Typography key={`${id}_paragraph_${idx}`} sx={{ margin: 1 }} variant='p'>
              {each}
            </Typography>
          ))}

        </Dialog>
      </div>
    </Grid >
  );
}
