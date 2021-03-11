import React, { useEffect, useState } from 'react';
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
import { useHistory, useParams } from 'react-router-dom';
import { Input } from '@material-ui/core';

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

  export const EmpresaEdit = () => {

    const routerHistory = useHistory();

    const classes = useStyles();

    const {id} = useParams();

    //const usuario = JSON.parse(data); esto es para castear. convertir un string a objeto

    const [ formEmpresaValues, setformEmpresaValues ] = useState({
      nombre: '',
      reup: '',
      nit: '',
      direccion: '',
      email: '',
      telefono: '',
      director:''
    });

    const getEmpresas = async () => {

      const resp = await fetchConToken( 'empresa/'+id );
      const body = await resp.json();
      setformEmpresaValues(body.empresaDB);
      //console.log(body);
    }

    useEffect(()=>{
      getEmpresas();      
    },[])
    
    const handleInputChange = ({ target }) => {

      setformEmpresaValues({
        ...formEmpresaValues,
        [ target.name ]: target.value
      });
      //console.log('formRegisterValue:',formRegisterValues);

    }
  
    const { nombre, reup, nit, direccion, email, telefono, director } = formEmpresaValues;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

          const resp = await fetchConToken( 'empresa/'+id, formEmpresaValues, 'PUT' );
          //console.log(resp);
          if(!resp.ok){
            Swal.fire('Error', resp.msg, 'error');
          }else{
            Swal.fire('Exito', 'Empresa Actualizado Satisfactoriamente', 'success');
            routerHistory.push('/empresa'); 
          }
          
        } catch (error) {
          Swal.fire(error)
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
            Actualizar Empresa
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nombre"
                  label="Empresa"
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
                  id="reup"
                  label="Codigo Reup"
                  name="reup"
                  autoComplete="off"
                  value={reup}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nit"
                  label="Codigo Nit"
                  name="nit"
                  autoComplete="off"
                  value={nit}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="direccion"
                  label="Direccion"
                  name="direccion"
                  autoComplete="off"
                  value={direccion}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
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
                  id="telefono"
                  label="Telefono"
                  name="telefono"
                  autoComplete="off"
                  value={telefono}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="director"
                  label="director"
                  name="director"
                  autoComplete="off"
                  value={director}
                  onChange={handleInputChange}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Actualizar
            </Button>
            
          </form>
        </div>
        
      </Container>
    );
  }