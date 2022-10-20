import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';

function Header({ cartRef, count }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appbar" position="fixed" color="inherit">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Gsap Add to Cart Animation
          </Typography>
          <IconButton
            ref={cartRef}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Badge badgeContent={count} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
