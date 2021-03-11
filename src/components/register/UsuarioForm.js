import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Copyright } from '../shared/footer/Copyright';
import { useForm } from '../../hooks/useForm';
import { fetchConToken } from '../../helpers/fetch';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  export const UsuarioForm = () => {

    const routerHistory = useHistory();

    const classes = useStyles();

    const [ formRegisterValues, handleInputChange ] = useForm({
      nombre: '',  
      email: '',
      password: '',
      role: ''
    });

    const { nombre, email, password, role } = formRegisterValues;

    const currencies = [
      {
        value: 'ADMIN_ROLE',
        label: 'ADMIN_ROLE'
      },
      {
        value: 'RH_ROLE',
        label: 'RH_ROLE'
      }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

          const resp = await fetchConToken( 'usuarios', formRegisterValues, 'POST' );
          //console.log(resp);
          if(!resp.ok){
            Swal.fire('Error', resp.msg, 'error');
            //console.log(resp);
          }else{
            Swal.fire('Exito', 'Usuario Agregado Satisfactoriamente', 'success');
            routerHistory.push('/register'); 
          }
          
        } catch (error) {
          Swal.fire(error);
        }
        
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrar Usuario
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre Completo"
                  name="nombre"
                  autoComplete="off"
                  value={nombre}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  value={email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={handleInputChange}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  select
                  required
                  fullWidth
                  name="role"
                  label="Role"
                  id="role"
                  autoComplete="off"
                  value={role}
                  onChange={handleInputChange}
                >
                  {
                    currencies.map((option)=> (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Guardar
            </Button>
            
          </form>
        </div>
        
      </Container>
    );
  }