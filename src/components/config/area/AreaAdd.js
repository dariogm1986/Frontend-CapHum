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

  export const AreaAdd = () => {

    const routerHistory = useHistory();

    const classes = useStyles();

    const [combotipoarea, setCombotipoarea] = useState([]);
    const [combosistemapago, setCombosistemapago] = useState([]);
    const [combounidad, setCombounidad] = useState([]);

    const getTipoArea = async () => {
      const resp = await fetchConToken( 'tipoarea' );
      const body = await resp.json();
      setCombotipoarea(body.tipoArea);
      //setData(body.Municipio);
      console.log('tipoarea', body.tipoArea);
    }

    const getSistemaPago = async () => {
      const resp = await fetchConToken( 'sistemapago' );
      const body = await resp.json();
      setCombosistemapago(body.sistemapago);
      //setData(body.Municipio);
      console.log('sistemapago', body.sistemapago);
    }

    const getUnidad = async () => {
      const resp = await fetchConToken( 'unidades' );
      const body = await resp.json();
      setCombounidad(body.unidades);
      //setData(body.Municipio);
      console.log('unidad',body.unidades);
    }

    useEffect(() => {
      getTipoArea();
      getSistemaPago();
      getUnidad();
    },[])

    const [ formAreaValues, handleInputChange ] = useForm({
      area: '',
      tipoarea: '',
      sistemapago: '',
      unidad: ''
    });

    const { area, tipoarea, sistemapago, unidad } = formAreaValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

          const resp = await fetchConToken( 'area', formAreaValues, 'POST' );
          //console.log(resp);
          if(!resp.ok){
            Swal.fire('Error', resp.msg, 'error');
            //console.log(resp);
          }else{
            Swal.fire('Exito', 'Area Agregado Satisfactoriamente', 'success');
            routerHistory.push('/area'); 
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
            Agregar Area
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="area"
                  label="Area"
                  name="area"
                  autoComplete="off"
                  value={area}
                  onChange={handleInputChange}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  select
                  required
                  fullWidth
                  id="tipoarea"
                  label="Tipo de Area"
                  name="tipoarea"
                  autoComplete="off"
                  value={tipoarea}
                  onChange={handleInputChange}
                >
                  {
                    combotipoarea.map((option)=> (
                      <MenuItem key={option._id} value={option._id}>
                        {option.tipoarea}
                      </MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  select
                  required
                  fullWidth
                  id="sistemapago"
                  label="Sistema de Pago"
                  name="sistemapago"
                  autoComplete="off"
                  value={sistemapago}
                  onChange={handleInputChange}
                >
                  {
                    combosistemapago.map((option)=> (
                      <MenuItem key={option._id} value={option._id}>
                        {option.sistemapago}
                      </MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12}>
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