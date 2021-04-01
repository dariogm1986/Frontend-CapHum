import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Avatar, Button, Container, CssBaseline, Grid, MenuItem, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { useForm } from '../../hooks/useForm';
import { fetchConToken } from '../../helpers/fetch';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function getStyles(name, integracionrev, theme) {
  return {
    fontWeight:
      integracionrev.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const EmpleadoAdd = () => {

  const routerHistory = useHistory();

  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [integracionrev, setIntegracion] = React.useState([]);

  const handleChangeSelectMul = ({target}) => {
    setIntegracion(target.value);
    setformEmpleadoValues({
      ...formEmpleadoValues,
      integracion: target.value
    });
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setIntegracion(value);
  };

  //Para el Combo de Estado Civil
  const [comboestadocivil, setComboestadocivil] = useState([]);

  const getEstadoCivil = async () => {
    const resp = await fetchConToken( 'estadocivil' );
    const body = await resp.json();
    if(body.ok){
      setComboestadocivil(body.estadocivil);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
  }

  //Para el Combo de Raza
  const [comboraza, setComboraza] = useState([]);

  const getRaza = async () => {
    const resp = await fetchConToken( 'raza' );
    const body = await resp.json();
    
    if(body.ok){
      setComboraza(body.raza);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
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
    if(body.ok){
      setComboPais(body.pais);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
  }

  //Para el combo NivelEducacional
  const [comboniveleducacional, setComboniveleducacional] = useState([]);

  const getNivelEducacional = async () => {
    const resp = await fetchConToken( 'niveleducacional' );
    const body = await resp.json();
    if(body.ok){
      setComboniveleducacional(body.niveleducacional);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
  }

  //Para el combo Carrera
  const [combocarrera, setCombocarrera] = useState([]);

  const getCarrera = async () => {
    const resp = await fetchConToken( 'carrera' );
    const body = await resp.json();
    if(body.ok){
      setCombocarrera(body.carrera);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
  }

  //Para el combo especialidad
  const [comboespecialidad, setComboespecialidad] = useState([]);

  const getEspecialidad = async () => {
    const resp = await fetchConToken( 'especialidad' );
    const body = await resp.json();
    if(body.ok){
      setComboespecialidad(body.especialidad);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
  }

  //Para el combo Grado Cientifico
  const [combogradocientifico, setCombogradocientifico] = useState([]);

  const getGradoCientifico = async () => {
    const resp = await fetchConToken( 'gradocientifico' );
    const body = await resp.json();
    if(body.ok){
      setCombogradocientifico(body.gradocientifico);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
  }

  //Para el Combo de las empresas
  const [comboempresa, setComboEmpresa] = useState([]);

  const getEmpresa = async () => {
    const resp = await fetchConToken( 'empresa' );
    const body = await resp.json();
    if(body.ok){
      setComboEmpresa(body.empresa);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
    //setData(body.provincia);
    //console.log(body);
  }

  //Para el Combo de las cargo
  const [combocargo, setCombocargo] = useState([]);

  const getCargo = async () => {
    const resp = await fetchConToken( 'cargo' );
    const body = await resp.json();
    if(body.ok){
      setCombocargo(body.cargo);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
  }

  //Para el Combo de Tipo de Empleado
  const [combotipoempleado, setCombotipoempleado] = useState([]);

  const getTipoEmpleado = async () => {
    const resp = await fetchConToken( 'tipoempleado' );
    const body = await resp.json();
    if(body.ok){
      setCombotipoempleado(body.tipoempleado);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
  }

  //Para el Combo de Defensa
  const [combodefensa, setCombodefensa] = useState([]);

  const getDefensa = async () => {
    const resp = await fetchConToken( 'defensa' );
    const body = await resp.json();
    if(body.ok){
      setCombodefensa(body.defensa);
      //console.log('bodyProvincias---->>>',body)
      //setComboProvincia(body.provincia);
    }
    
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
    //getProvincia();
    //getmunicipio();
    getNivelEducacional();
    getCarrera();
    getEspecialidad();
    getGradoCientifico();
    getEmpresa();
    //getUnidad();
    //getArea();
    getCargo();
    getTipoEmpleado();
    getDefensa();
    getIntegracion();
  },[])

    //const [ formEmpleadoValues, handleInputChange ] = useForm({
    const [ formEmpleadoValues, setformEmpleadoValues ] = useState({
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
      integracion: '',
      defensa: ''
    });

    
    //console.log(comboempresa);

    const { carne, nombre, apellidos, direccion, pais, provincia, municipio, estadocivil, raza, sexo, telefono,
            calzado, camisa, pantalon, niveleducacional, fechagraduado, carrera, especialidad, gradocientifico, 
            empresa, unidad, area, cargo, tipoempleado, numempleado, fechacontrato, fechainicio, integracion, 
            defensa
    } = formEmpleadoValues;

    const handleInputChange = ({target}) =>{
      setformEmpleadoValues({
        ...formEmpleadoValues,
        [ target.name ]: target.value
      });
      //console.log(target.value);
    }

    //Para el Combo de los provincia
  const [comboprovincia, setComboProvincia] = useState([]);

  const getProvincia = async (paisId) => {
    const obj = {
      pais: paisId
    }
    //console.log("pais++++++++", pais);
    const resp = await fetchConToken( 'provincia/pais', obj, 'POST' );
    const body = await resp.json();
    
    if(body.ok){
      //console.log('bodyProvincias---->>>',body)
      setComboProvincia(body.provincia);
    }
    
  }

  //Para el combo municipios
  const [combomunicipio, setCombomunicipio] = useState([]);

  const getmunicipio = async (provincia) => {    
    const obj = {
      provincia
    }
    //console.log("pais++++++++", pais);
    const resp = await fetchConToken( 'municipio/provincia', obj, 'POST' );
    const body = await resp.json();    
    if(body.ok){
      //console.log('bodyMunicipio---->>>',body);
      setCombomunicipio(body.municipio);
    }    
  }

  //Para el Combo de las unidad
  const [combounidad, setCombounidad] = useState([]);

  const getUnidad = async (empresa) => {
    
    const obj = {
      empresa
    }
    //console.log("pais++++++++", pais);
    const resp = await fetchConToken( 'unidades/empresa', obj, 'POST' );
    const body = await resp.json();    
    if(body.ok){
      //console.log('bodyMunicipio---->>>',body);
      setCombounidad(body.unidades);
    }  
    
  }

  //Para el Combo de las area
  const [comboarea, setComboarea] = useState([]);

  const getArea = async (unidad) => {
    
    const obj = {
      unidad
    }
    //console.log("pais++++++++", pais);
    const resp = await fetchConToken( 'area/unidad', obj, 'POST' );
    const body = await resp.json();    
    if(body.ok){
      //console.log('bodyMunicipio---->>>',body);
      setComboarea(body.area);
    }  
    
  }

  useEffect(()=>{
    getProvincia(pais);
  },[pais])

  useEffect(()=>{
    getmunicipio(provincia);
  },[provincia])

  useEffect(()=>{
    getUnidad(empresa);
  },[empresa])

  useEffect(()=>{
    getArea(unidad);
  },[unidad])

  const [selectedDate1, setSelectedDate1] = React.useState(new Date());
  const [selectedDate2, setSelectedDate2] = React.useState(new Date());

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
    setformEmpleadoValues({
      ...formEmpleadoValues,
      fechacontrato: date
    });

  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
    setformEmpleadoValues({
      ...formEmpleadoValues,
      fechainicio: date
    });
  };
   
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //setCheckIntegracion();
        try {

          const resp = await fetchConToken( 'empleado', formEmpleadoValues, 'POST' );
          console.log(resp);
          if(!resp.ok){
            Swal.fire('Error', resp.msg, 'error');
            //console.log(resp);
          }else{
            Swal.fire('Exito', 'Empleado Agregada Satisfactoriamente', 'success');
            routerHistory.push('/empleado'); 
          }
          
        } catch (error) {
          Swal.fire(error);
        }
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
                  <Grid item xs={4}>
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
                  <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-mutiple-chip-label">Integracion</InputLabel>
                      <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        name="integracion"
                        value={integracionrev}
                        onChange={handleChangeSelectMul}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} className={classes.chip} />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      >
                        {combointegracion.map((name) => (
                          <MenuItem key={name.integracion} value={name.integracion} style={getStyles(name.integracion, integracionrev, theme)}>
                            {name.integracion}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
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
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        variant='outlined'
                        id="date-picker-dialog"
                        label="Fecha de Contrato"
                        format="dd/MM/yyyy"
                        name={fechacontrato}
                        value={selectedDate1}
                        onChange={handleDateChange1}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                      <KeyboardDatePicker
                        margin="normal"
                        variant='outlined'
                        id="date-picker-dialog"
                        label="Comienzo Laboral"
                        format="dd/MM/yyyy"
                        name={fechainicio}
                        value={selectedDate2}
                        onChange={handleDateChange2}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />

                    </Grid>
                  </MuiPickersUtilsProvider>

                  
                    
                  
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