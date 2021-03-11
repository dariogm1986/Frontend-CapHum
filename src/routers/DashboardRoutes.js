import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { CaphumScreen } from '../components/caphum/CaphumScreen';
import { EmpresaScreen } from '../components/empresa/EmpresaScreen';
import { EmpresaAdd } from '../components/empresa/EmpresaAdd';
import { UsuarioScreen } from '../components/register/UsuarioScreen';
import { UsuarioForm } from '../components/register/UsuarioForm';
import { UsuarioEdit } from '../components/register/UsuarioEdit';
import { Copyright } from '../components/shared/footer/Copyright';
import { Navbar } from '../components/shared/header/Navbar';
import { Sidebar } from '../components/shared/sidebar/Sidebar';
import { UnidadScreen } from '../components/uic/UICScreen';
import { UnidadAdd } from '../components/uic/UICAdd';
import { UnidadEdit } from '../components/uic/UICEdit';
import { TipoAreaScreen } from '../components/config/tipoarea/TipoAreaScreen';
import { TipoAreaAdd } from '../components/config/tipoarea/TipoAreaAdd';
import { TipoAreaEdit } from '../components/config/tipoarea/TipoAreaEdit';
import { PaisScreen } from '../components/config/pais/PaisScreen';
import { PaisEdit } from '../components/config/pais/PaisEdit';
import { PaisAdd } from '../components/config/pais/PaisAdd';
import { CarreraScreen } from '../components/config/carrera/CarreraScreen';
import { CarreraAdd } from '../components/config/carrera/CarreraAdd';
import { CarreraEdit } from '../components/config/carrera/CarreraEdit';
import { NivelEducacionalScreen } from '../components/config/niveleducacional/NivelEducacionalScreen';
import { NivelEducacionalAdd } from '../components/config/niveleducacional/NivelEducacionalAdd';
import { NivelEducacionalEdit } from '../components/config/niveleducacional/NivelEducacionalEdit';
import { EspecialidadEdit } from '../components/config/especialidad/EspecialidadEdit';
import { EspecialidadAdd } from '../components/config/especialidad/EspecialidadAdd';
import { EspecialidadScreen } from '../components/config/especialidad/EspecialidadScreen';
import { GradoCientificoScreen } from '../components/config/gradocientifico/GradoCientificoScreen';
import { GradoCientificoAdd } from '../components/config/gradocientifico/GradoCientificoAdd';
import { GradoCientificoEdit } from '../components/config/gradocientifico/GradoCientificoEdit';
import { RazaEdit } from '../components/config/raza/RazaEdit';
import { RazaAdd } from '../components/config/raza/RazaAdd';
import { RazaScreen } from '../components/config/raza/RazaScreen';
import { EstadoCivilScreen } from '../components/config/estadocivil/EstadoCivilScreen';
import { EstadoCivilAdd } from '../components/config/estadocivil/EstadoCivilAdd';
import { EstadoCivilEdit } from '../components/config/estadocivil/EstadoCivilEdit';
import { DefensaEdit } from '../components/config/defensa/DefensaEdit';
import { DefensaAdd } from '../components/config/defensa/DefensaAdd';
import { DefensaScreen } from '../components/config/defensa/DefensaScreen';
import { IntegracionAdd } from '../components/config/integracion/IntegracionAdd';
import { IntegracionScreen } from '../components/config/integracion/IntegracionScreen';
import { IntegracionEdit } from '../components/config/integracion/IntegracionEdit';
import { CatOcupacionalScreen } from '../components/config/catocupacional/CatOcupacionalScreen';
import { CatOcupacionalAdd } from '../components/config/catocupacional/CatOcupacionalAdd';
import { CatOcupacionalEdit } from '../components/config/catocupacional/CatOcupacionalEdit';
import { TipoEmpleadoScreen } from '../components/config/tipoempleado/TipoEmpleadoScreen';
import { TipoEmpleadoAdd } from '../components/config/tipoempleado/TipoEmpleadoAdd';
import { TipoEmpleadoEdit } from '../components/config/tipoempleado/TipoEmpleadoEdit';
import { GrupoEscalaScreen } from '../components/config/grupoescala/GrupoEscalaScreen';
import { GrupoEscalaAdd } from '../components/config/grupoescala/GrupoEscalaAdd';
import { GrupoEscalaEdit } from '../components/config/grupoescala/GrupoEscalaEdit';
import { CargoScreen } from '../components/config/cargo/CargoScreen';
import { CargoAdd } from '../components/config/cargo/CargoAdd';
import { CargoEdit } from '../components/config/cargo/CargoEdit';
import { CoeficienteScreen } from '../components/config/coeficiente/CoeficienteScreen';
import { CoeficienteAdd } from '../components/config/coeficiente/CoeficienteAdd';
import { CoeficienteEdit } from '../components/config/coeficiente/CoeficienteEdit';
import { SistemaPagoAdd } from '../components/config/sistemapago/SistemaPagoAdd';
import { SistemaPagoEdit } from '../components/config/sistemapago/SistemaPagoEdit';
import { SistemaPagoScreen } from '../components/config/sistemapago/SistemaPagoScreen';
import { ProvinciaScreen } from '../components/config/provincia/ProvinciaScreen';
import { ProvinciaAdd } from '../components/config/provincia/ProvinciaAdd';
import { ProvinciaEdit } from '../components/config/provincia/ProvinciaEdit';
import { MunicipioScreen } from '../components/config/municipio/MunicipioScreen';
import { MunicipioAdd } from '../components/config/municipio/MunicipioAdd';
import { MunicipioEdit } from '../components/config/municipio/MunicipioEdit';
import { EmpresaEdit } from '../components/empresa/EmpresaEdit';
import { AreaScreen } from '../components/config/area/AreaScreen';
import { AreaAdd } from '../components/config/area/AreaAdd';
import { AreaEdit } from '../components/config/area/AreaEdit';
import { EmpleadoScreen } from '../components/empleado/EmpleadoScreen';
import { EmpleadoAdd } from '../components/empleado/EmpleadoAdd';
import { PrenominaTimeScreen } from '../components/prenominatime/PrenominaTimeScreen';
import { PrenominaTimeAdd } from '../components/prenominatime/PrenominaTimeAdd';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export const DashboardRoutes = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            <Sidebar />
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Switch>
                    <Route exact path="/home" component={ CaphumScreen } />
                    <Route exact path="/register" component={ UsuarioScreen } />
                    <Route exact path="/usuarioform" component={ UsuarioForm } />
                    <Route exact path="/usuarioedit/:id" component={ UsuarioEdit} />
                    <Route exact path="/tipoarea" component={ TipoAreaScreen } />
                    <Route exact path="/addtipoarea" component={ TipoAreaAdd } />
                    <Route exact path="/tipoareaedit/:id" component={ TipoAreaEdit } />
                    <Route exact path="/pais" component={ PaisScreen } />
                    <Route exact path="/paisadd" component={ PaisAdd } />
                    <Route exact path="/paisedit/:id" component={ PaisEdit } />
                    <Route exact path="/provincia" component={ ProvinciaScreen } />
                    <Route exact path="/provinciaadd" component={ ProvinciaAdd } />
                    <Route exact path="/provinciaedit/:id" component={ ProvinciaEdit } />
                    <Route exact path="/municipio" component={ MunicipioScreen } />
                    <Route exact path="/municipioadd" component={ MunicipioAdd } />
                    <Route exact path="/municipioedit/:id" component={ MunicipioEdit } />
                    <Route exact path="/carrera" component={ CarreraScreen } />
                    <Route exact path="/carreraadd" component={ CarreraAdd } />
                    <Route exact path="/carreraedit/:id" component={ CarreraEdit } />
                    <Route exact path="/niveleducacional" component={ NivelEducacionalScreen } />
                    <Route exact path="/niveleducacionaladd" component={ NivelEducacionalAdd } />
                    <Route exact path="/niveleducacionaledit/:id" component={ NivelEducacionalEdit } />
                    <Route exact path="/especialidad" component={ EspecialidadScreen } />
                    <Route exact path="/especialidadadd" component={ EspecialidadAdd } />
                    <Route exact path="/especialidadedit/:id" component={ EspecialidadEdit } />
                    <Route exact path="/gradocientifico" component={ GradoCientificoScreen } />
                    <Route exact path="/gradocientificoadd" component={ GradoCientificoAdd } />
                    <Route exact path="/gradocientificoedit/:id" component={ GradoCientificoEdit } />
                    <Route exact path="/catocupacional" component={ CatOcupacionalScreen } />
                    <Route exact path="/catocupacionaladd" component={ CatOcupacionalAdd } />
                    <Route exact path="/catocupacionaledit/:id" component={ CatOcupacionalEdit } />
                    <Route exact path="/tipoempleado" component={ TipoEmpleadoScreen } />
                    <Route exact path="/tipoempleadoadd" component={ TipoEmpleadoAdd } />
                    <Route exact path="/tipoempleadoedit/:id" component={ TipoEmpleadoEdit } />
                    <Route exact path="/grupoescala" component={ GrupoEscalaScreen } />
                    <Route exact path="/grupoescalaadd" component={ GrupoEscalaAdd } />
                    <Route exact path="/grupoescalaedit/:id" component={ GrupoEscalaEdit } />
                    <Route exact path="/cargo" component={ CargoScreen } />
                    <Route exact path="/cargoadd" component={ CargoAdd } />
                    <Route exact path="/cargoedit/:id" component={ CargoEdit } />
                    <Route exact path="/coeficiente" component={ CoeficienteScreen } />
                    <Route exact path="/coeficienteadd" component={ CoeficienteAdd } />
                    <Route exact path="/coeficienteedit/:id" component={ CoeficienteEdit } />
                    <Route exact path="/sistemapago" component={ SistemaPagoScreen } />
                    <Route exact path="/sistemapagoadd" component={ SistemaPagoAdd } />
                    <Route exact path="/sistemapagoedit/:id" component={ SistemaPagoEdit } />
                    <Route exact path="/raza" component={ RazaScreen } />
                    <Route exact path="/razaadd" component={ RazaAdd } />
                    <Route exact path="/razaedit/:id" component={ RazaEdit } />
                    <Route exact path="/estadocivil" component={ EstadoCivilScreen } />
                    <Route exact path="/estadociviladd" component={ EstadoCivilAdd } />
                    <Route exact path="/estadociviledit/:id" component={ EstadoCivilEdit } />
                    <Route exact path="/integracion" component={ IntegracionScreen } />
                    <Route exact path="/integracionadd" component={ IntegracionAdd } />
                    <Route exact path="/integracionedit/:id" component={ IntegracionEdit } />
                    <Route exact path="/defensa" component={ DefensaScreen } />
                    <Route exact path="/defensaadd" component={ DefensaAdd } />
                    <Route exact path="/defensaedit/:id" component={ DefensaEdit } />
                    <Route exact path="/empresa" component={ EmpresaScreen } />
                    <Route exact path="/empresaadd" component={ EmpresaAdd } />
                    <Route exact path="/empresaedit/:id" component={ EmpresaEdit } />
                    <Route exact path="/unidad" component={ UnidadScreen } />
                    <Route exact path="/unidadadd" component={ UnidadAdd } />
                    <Route exact path="/unidadedit/:id" component={ UnidadEdit } />
                    <Route exact path="/area" component={ AreaScreen } />
                    <Route exact path="/areaadd" component={ AreaAdd } />
                    <Route exact path="/areaedit/:id" component={ AreaEdit } />
                    <Route exact path="/empleado" component={ EmpleadoScreen } />
                    <Route exact path="/empleadoadd" component={ EmpleadoAdd } />
                    <Route exact path="/prenominatime" component={ PrenominaTimeScreen } />
                    <Route exact path="/prenominatimeadd" component={ PrenominaTimeAdd } />

                    <Redirect to="/home" />
                </Switch>
            
            
            <Box pt={4}>
                <Copyright />
            </Box>
            </main>
        </div>
    )
}