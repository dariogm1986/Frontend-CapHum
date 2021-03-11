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
import { Copyright } from '../../shared/footer/Copyright';
import { useForm } from '../../../hooks/useForm';
import { fetchConToken } from '../../../helpers/fetch';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

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

  export const ProvinciaAdd = () => {

    const routerHistory = useHistory();

    const classes = useStyles();

    const [combopais, setComboPais] = useState([]);

    const getPais = async () => {
      const resp = await fetchConToken( 'pais' );
      const body = await resp.json();
      setComboPais(body.pais);
      //setData(body.provincia);
      //console.log(body);
    }

    useEffect(() => {
      getPais();
    },[])

    const [ formProvinciaValues, handleInputChange ] = useForm({
      provincia: '',
      pais: ''
    });

    //console.log(formProvinciaValues);

    const { provincia, pais} = formProvinciaValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

          const resp = await fetchConToken( 'provincia', formProvinciaValues, 'POST' );
          //console.log(resp);
          if(!resp.ok){
            Swal.fire('Error', resp.msg, 'error');
            //console.log(resp);
          }else{
            Swal.fire('Exito', 'Provincia Agregado Satisfactoriamente', 'success');
            routerHistory.push('/provincia'); 
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
            Agregar Provincia
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                            
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="provincia"
                  label="Provincia"
                  name="provincia"
                  autoComplete="off"
                  value={provincia}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  select
                  required
                  fullWidth
                  name="pais"
                  label="Pais"
                  id="pais"
                  autoComplete="off"
                  value={pais}
                  onChange={handleInputChange}
                >
                  {
                    combopais.map((option)=> (
                      <MenuItem key={option._id} value={option._id}>
                        {option.pais}
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