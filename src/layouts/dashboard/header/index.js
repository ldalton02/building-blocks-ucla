import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
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
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <IconButton
            sx={{
              mr: 1,
              color: 'text.primary',
              marginRight: 0,
            }}
          >
            <Link sx={{ color: 'text.primary' }} href='https://github.com/ldalton02' >
              <Iconify icon="eva:github-outline" />
            </Link>
          </IconButton>
          <IconButton
            sx={{
              mr: 1,
              color: 'text.primary',
              marginRight: 40,
            }}
          >
            <Link sx={{ color: 'text.primary' }} href='https://www.linkedin.com/in/luke-dalton-195996209/' >
              <Iconify icon="eva:linkedin-outline" />
            </Link>
          </IconButton>
          <Typography
            sx={{
              color: 'black',
            }}
          >
            Luke Dalton
          </Typography>
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
