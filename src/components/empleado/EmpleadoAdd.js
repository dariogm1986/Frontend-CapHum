import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, MenuItem, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useForm } from '../../hooks/useForm';
import { fetchConToken } from '../../helpers/fetch';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { Label } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
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

export const EmpleadoAdd = () => {

  const routerHistory = useHistory();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Para el Combo de Estado Civil
  const [comboestadocivil, setComboestadocivil] = useState([]);

  const getEstadoCivil = async () => {
    const resp = await fetchConToken( 'estadocivil' );
    const body = await resp.json();
    setComboestadocivil(body.estadocivil);
  }

  //Para el Combo de Raza
  const [comboraza, setComboraza] = useState([]);

  const getRaza = async () => {
    const resp = await fetchConToken( 'raza' );
    const body = await resp.json();
    setComboraza(body.raza);
  }

  //Para el Combo de Sexo
  const currencies = [
    {
      value: 'Femenino',
      label: 'Femenino'
    },
    {
      value: 'Masculino',
      label: 'Masculino'
    },
    {
      value: 'Otro',
      label: 'Otro'
    }
  ]

  //Para el Combo de los Paises
  const [combopais, setComboPais] = useState([]);

  const getPais = async () => {
    const resp = await fetchConToken( 'pais' );
    const body = await resp.json();
    setComboPais(body.pais);
  }

  //Para el combo provincias
  const [comboprovincia, setComboprovincia] = useState([]);

  const getProvincia = async () => {
    const resp = await fetchConToken( 'provincia' );
    const body = await resp.json();
    setComboprovincia(body.provincia);
  }

  //Para el combo municipios
  const [combomunicipio, setCombomunicipio] = useState([]);

  const getmunicipio = async () => {
    const resp = await fetchConToken( 'municipio' );
    const body = await resp.json();
    setCombomunicipio(body.municipio);
  }

  //Para el combo NivelEducacional
  const [comboniveleducacional, setComboniveleducacional] = useState([]);

  const getNivelEducacional = async () => {
    const resp = await fetchConToken( 'niveleducacional' );
    const body = await resp.json();
    setComboniveleducacional(body.niveleducacional);
  }

  //Para el combo Carrera
  const [combocarrera, setCombocarrera] = useState([]);

  const getCarrera = async () => {
    const resp = await fetchConToken( 'carrera' );
    const body = await resp.json();
    setCombocarrera(body.carrera);
  }

  //Para el combo especialidad
  const [comboespecialidad, setComboespecialidad] = useState([]);

  const getEspecialidad = async () => {
    const resp = await fetchConToken( 'especialidad' );
    const body = await resp.json();
    setComboespecialidad(body.especialidad);
  }

  //Para el combo Grado Cientifico
  const [combogradocientifico, setCombogradocientifico] = useState([]);

  const getGradoCientifico = async () => {
    const resp = await fetchConToken( 'gradocientifico' );
    const body = await resp.json();
    setCombogradocientifico(body.gradocientifico);
  }

  //Para el Combo de las empresas
  const [comboempresa, setComboEmpresa] = useState([]);

  const getEmpresa = async () => {
    const resp = await fetchConToken( 'empresa' );
    const body = await resp.json();
    setComboEmpresa(body.empresa);
    //setData(body.provincia);
    //console.log(body);
  }

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

  //Para el Combo de las cargo
  const [combocargo, setCombocargo] = useState([]);

  const getCargo = async () => {
    const resp = await fetchConToken( 'cargo' );
    const body = await resp.json();
    setCombocargo(body.cargo);
  }

  //Para el Combo de Tipo de Empleado
  const [combotipoempleado, setCombotipoempleado] = useState([]);

  const getTipoEmpleado = async () => {
    const resp = await fetchConToken( 'tipoempleado' );
    const body = await resp.json();
    setCombotipoempleado(body.tipoempleado);
  }

  //Para el Combo de Defensa
  const [combodefensa, setCombodefensa] = useState([]);

  const getDefensa = async () => {
    const resp = await fetchConToken( 'defensa' );
    const body = await resp.json();
    setCombodefensa(body.defensa);
  }

  //Para La Integracion
  const [combointegracion, setCombointegracion] = useState([]);

  const getIntegracion = async () => {
    const resp = await fetchConToken( 'integracion' );
    const body = await resp.json();
    setCombointegracion(body.integracion);
    //console.log('integracion ',body.integracion );
  }

    useEffect(()=>{
      getEstadoCivil();
      getRaza();
      //getSexo();
      getPais();
      getProvincia();
      getmunicipio();
      getNivelEducacional();
      getCarrera();
      getEspecialidad();
      getGradoCientifico();
      getEmpresa();
      getUnidad();
      getArea();
      getCargo();
      getTipoEmpleado();
      getDefensa();
      getIntegracion();
    },[])

    const [ formEmpleadoValues, handleInputChange ] = useForm({
      carne: '',
      nombre: '',
      apellidos: '',
      estadocivil: '',
      raza: '',
      sexo: '',
      direccion: '',
      telefono: '',
      pais: '',
      provincia: '',
      municipio: '',
      niveleducacional: '',
      fechagraduado: '',
      carrera:'',
      especialidad: '',
      gradocientifico: '',
      empresa: '',
      unidad: '',
      area: '',
      cargo: '',
      tipoempleado: '',
      numempleado: '',
      fechacontrato: '',
      fechainicio: '',
      integracion: [],
      defensa: ''
    });

    
    //console.log(comboempresa);

    const { carne, nombre, apellidos, direccion, pais, provincia, municipio, estadocivil, raza, sexo, telefono,
            calzado, camisa, pantalon, niveleducacional, fechagraduado, carrera, especialidad, gradocientifico, 
            empresa, unidad, area, cargo, tipoempleado, numempleado, fechacontrato, fechainicio, integracion, 
            defensa
    } = formEmpleadoValues;

    console.log(pais);


    const [checkintegracion, setCheckIntegracion] = useState([]);

    const handleCheckChange = ({ target }) => {
      if(target.checked){
        setCheckIntegracion({
          ...checkintegracion,
          [ target.name ]: target.value
        });

      }
      console.log(checkintegracion);
      
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        for(let i=0;i<checkintegracion.length;i++){
          formEmpleadoValues.integracion.push(checkintegracion[i]);
        }
        
        formEmpleadoValues.integracion.push(checkintegracion);
        //setCheckIntegracion();
        // try {

        //   const resp = await fetchConToken( 'empleado', formEmpleadoValues, 'POST' );
        //   //console.log(resp);
        //   if(!resp.ok){
        //     Swal.fire('Error', resp.msg, 'error');
        //     //console.log(resp);
        //   }else{
        //     Swal.fire('Exito', 'Empleado Agregada Satisfactoriamente', 'success');
        //     routerHistory.push('/empleado'); 
        //   }
          
        // } catch (error) {
        //   Swal.fire(error);
        // }
        console.log('empleado ', formEmpleadoValues)
        
    }

  return (

    <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Agregar Empleado
          </Typography>

          <form className={classes.form} noValidate onSubmit={handleSubmit}>

            
            <div className={classes.root}>
              <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Datos Personales" {...a11yProps(0)} />
                  <Tab label="Formacion Profesional" {...a11yProps(1)} />
                  <Tab label="Informaciona Laboral" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Grid container spacing={2}>              
                  <Grid item xs={3}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="carne"
                      label="Carne de Identidad"
                      name="carne"
                      autoComplete="off"
                      value={carne}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>              
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="nombre"
                      label="Nombre"
                      name="nombre"
                      autoComplete="off"
                      value={nombre}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="apellidos"
                      label="Apellidos"
                      name="apellidos"
                      autoComplete="off"
                      value={apellidos}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                        variant="outlined"
                        select
                        required
                        fullWidth
                        name="estadocivil"
                        label="Estado Civil"
                        id="estadocivil"
                        autoComplete="off"
                        value={estadocivil}
                        onChange={handleInputChange}
                    >
                      {
                        comboestadocivil.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.estadocivil}
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
                        name="raza"
                        label="Raza"
                        id="raza"
                        autoComplete="off"
                        value={raza}
                        onChange={handleInputChange}
                    >
                      {
                        comboraza.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.raza}
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
                        name="sexo"
                        label="Sexo"
                        id="sexo"
                        autoComplete="off"
                        value={sexo}
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
                  <Grid item xs={8}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="direccion"
                      label="Direccion Particular"
                      name="direccion"
                      autoComplete="off"
                      value={direccion}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="telefono"
                      label="Telefono"
                      name="telefono"
                      autoComplete="off"
                      value={telefono}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
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
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      select
                      required
                      fullWidth
                      name="provincia"
                      label="Provincia"
                      id="provincia"
                      autoComplete="off"
                      value={provincia}
                      onChange={handleInputChange}
                    >
                      {
                        comboprovincia.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.provincia}
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
                      name="municipio"
                      label="Municipio"
                      id="municipio"
                      autoComplete="off"
                      value={municipio}
                      onChange={handleInputChange}
                    >
                      {
                        combomunicipio.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.municipio}
                          </MenuItem>
                        ))
                      }
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="calzado"
                      label="Calzado No."
                      name="calzado"
                      autoComplete="off"
                      value={calzado}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="camisa"
                      label="Camisa Talla"
                      name="camisa"
                      autoComplete="off"
                      value={camisa}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="pantalon"
                      label="Pantalon Talla"
                      name="pantalon"
                      autoComplete="off"
                      value={pantalon}
                      onChange={handleInputChange}
                    />
                  </Grid>                  
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container spacing={2}>              
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      select
                      required
                      fullWidth
                      id="niveleducacional"
                      label="Nivel Educacional"
                      name="niveleducacional"
                      autoComplete="off"
                      value={niveleducacional}
                      onChange={handleInputChange}
                    >
                    {
                      comboniveleducacional.map((option)=> (
                        <MenuItem key={option._id} value={option._id}>
                          {option.niveleducacional}
                        </MenuItem>
                      ))
                    }
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="fechagraduado"
                      label="Fecha de Graduado"
                      name="fechagraduado"
                      autoComplete="off"
                      value={fechagraduado}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      variant="outlined"
                      select
                      fullWidth
                      id="carrera"
                      label="Carrera"
                      name="carrera"
                      autoComplete="off"
                      value={carrera}
                      onChange={handleInputChange}
                    >
                      {
                        combocarrera.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.carrera}
                          </MenuItem>
                        ))
                      }
                    </TextField>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      variant="outlined"
                      select
                      fullWidth
                      id="especialidad"
                      label="Especialidad"
                      name="especialidad"
                      autoComplete="off"
                      value={especialidad}
                      onChange={handleInputChange}
                    >
                      {
                        comboespecialidad.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.especialidad}
                          </MenuItem>
                        ))
                      }
                    </TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      variant="outlined"
                      select
                      fullWidth
                      id="gradocientifico"
                      label="Grado Cientifico"
                      name="gradocientifico"
                      autoComplete="off"
                      value={gradocientifico}
                      onChange={handleInputChange}
                    >
                      {
                        combogradocientifico.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.gradocientifico}
                          </MenuItem>
                        ))
                      }
                    </TextField>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid container spacing={2}>              
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      select
                      required
                      fullWidth
                      id="empresa"
                      label="Empresa"
                      name="empresa"
                      autoComplete="off"
                      value={empresa}
                      onChange={handleInputChange}
                    >
                      {
                        comboempresa.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.nombre}
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
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      select
                      required
                      fullWidth
                      id="tipoempleado"
                      label="Tipo de Empleado"
                      name="tipoempleado"
                      autoComplete="off"
                      value={tipoempleado}
                      onChange={handleInputChange}
                    >
                      {
                        combotipoempleado.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.tipoempleado}
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
                      id="cargo"
                      label="Cargo"
                      name="cargo"
                      autoComplete="off"
                      value={cargo}
                      onChange={handleInputChange}
                    >
                      {
                        combocargo.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.cargo}
                          </MenuItem>
                        ))
                      }
                    </TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="numempleado"
                      label="Numero de Empleado"
                      name="numempleado"
                      autoComplete="off"
                      value={numempleado}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="fechacontrato"
                      label="Fecha de Contrato"
                      name="fechacontrato"
                      autoComplete="off"
                      value={fechacontrato}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="fechainicio"
                      label="Fecha de Comienzo Laboral"
                      name="fechainicio"
                      autoComplete="off"
                      value={fechainicio}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      variant="outlined"
                      select
                      fullWidth
                      id="defensa"
                      label="Situacion de la Defensa"
                      name="defensa"
                      autoComplete="off"
                      value={defensa}
                      onChange={handleInputChange}
                    >
                      {
                        combodefensa.map((option)=> (
                          <MenuItem key={option._id} value={option._id}>
                            {option.defensa}
                          </MenuItem>
                        ))
                      }
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                  <Typography >
                    Integracion
                  </Typography>
                  </Grid>                   
                  {
                    combointegracion.map((option)=> (
                      <Grid item xs={3}> 
                        <FormControlLabel
                          control={
                            <Checkbox 
                              key={option._id} 
                              value={option._id} 
                              color="primary" 
                              onChange={handleCheckChange} 
                              name={option.integracion}
                            />
                          }
                          label={option.integracion}
                        />                      
                      </Grid>
                    ))
                  }
                    
                  
                </Grid>
              </TabPanel>
            </div>
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