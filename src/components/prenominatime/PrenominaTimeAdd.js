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

  export const PrenominaTimeAdd = () => {

    const routerHistory = useHistory();

    const classes = useStyles();

    //Para el Combo de las unidad
    const [combounidad, setCombounidad] = useState([]);

    const getUnidad = async () => {
      const resp = await fetchConToken( 'unidades' );
      const body = await resp.json();
      setCombounidad(body.unidades);
    }

    //Para el Combo de las area
    const [comboarea, setComboarea] = useState([]);

    const getArea = async () => {
      const resp = await fetchConToken( 'area' );
      const body = await resp.json();
      setComboarea(body.area);
    }

    useEffect(()=>{
      getUnidad();
      getArea();
    })

    const [ formPrenominaTimeValues, handleInputChange ] = useForm({
      mes: '',
      year:'',
      fechacreacion: ''
    });

    const { mes, year, fechacreacion } = formPrenominaTimeValues;

    const unidad = '';
    const area = '';

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {

        //   const resp = await fetchConToken( 'prenominatime', formPrenominaTimeValues, 'POST' );
        //   //console.log(resp);
        //   if(!resp.ok){
        //     Swal.fire('Error', resp.msg, 'error');
        //     //console.log(resp);
        //   }else{
        //     Swal.fire('Exito', 'Prenomina de tiempo Agregada Satisfactoriamente', 'success');
        //     routerHistory.push('/prenominatime'); 
        //   }
          
        // } catch (error) {
        //   Swal.fire(error);
        // }
        
    }

    return (
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Agregar Prenomina de Tiempo
          </Typography>
          <Grid container spacing={2}>             
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                select
                required
                fullWidth
                id="unidad"
                label="Unidad"
                name="unidad"
                autoComplete="off"
                value={unidad}
                onChange={handleInputChange}
              >
                {
                  combounidad.map((option)=> (
                    <MenuItem key={option._id} value={option._id}>
                      {option.nombre}
                    </MenuItem>
                  ))
                }
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                select
                required
                fullWidth
                id="area"
                label="Area"
                name="area"
                autoComplete="off"
                value={area}
                onChange={handleInputChange}
              >
                {
                  comboarea.map((option)=> (
                    <MenuItem key={option._id} value={option._id}>
                      {option.area}
                    </MenuItem>
                  ))
                }
              </TextField>
            </Grid>
            
          </Grid>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>             
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="mes"
                  label="Mes"
                  name="mes"
                  autoComplete="off"
                  value={mes}
                  onChange={handleInputChange}
                >
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="year"
                  label="Year"
                  name="year"
                  autoComplete="off"
                  value={year}
                  onChange={handleInputChange}
                >
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="fechacreacion"
                  label="Fecha Creacion"
                  name="fechacreacion"
                  autoComplete="off"
                  value={fechacreacion}
                  onChange={handleInputChange}
                >
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