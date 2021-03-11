import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {useSelector, useDispatch} from 'react-redux';
import { startLogout } from '../../../actions/auth';

export const MenuBar = () => {

  const dispatch = useDispatch();
  const { nombre } = useSelector(state => state.auth);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(startLogout());
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {nombre}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Editar Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Cambiar Password</MenuItem>
        <MenuItem onClick={handleLogout}>Cerrar Sesion</MenuItem>
      </Menu>
    </div>
  );
}