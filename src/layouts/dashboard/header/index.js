import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
import { Link as RouterLink, NavLink } from 'react-router-dom';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components


import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const NAV_WIDTH = 0;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <RouterLink to='/home' style={{ textDecoration: 'none', color: 'text.primary' }}>
          <Typography
            variant='h3'
            sx={{
              color: 'black',
            }}
          >
            Building Blocks
          </Typography>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Link style={{ textDecoration: 'none' }}>
            <RouterLink to='/about' style={{ textDecoration: 'none', color: 'text.primary' }}> About Us</RouterLink>
          </Link>
          <IconButton
            sx={{
              mr: 1,
              color: 'text.primary',
            }}
          >
            <Link sx={{ color: 'text.primary' }} href='https://instagram.com/buildingblocksucla' >
              <Iconify icon="ri:instagram-line" />
            </Link>
          </IconButton>
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
