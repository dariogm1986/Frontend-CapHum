import React, { useEffect, useState } from 'react';

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { DataTable } from '../../compartidos/DataTable';
import { CabezalContent } from '../../compartidos/CabezalContent';
import { fetchConToken } from '../../../helpers/fetch';

const useStylesb = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },    
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));

  const columns = [
    {
      title: 'ID',
      field: '_id'
    },
    {
      title: 'Grupo Escala',
      field: 'grupoescala'
    },
    {
      title: 'Salario Escala',
      field: 'salarioescala'
    },
  ];

  //const baseUrl = "http://localhost:4000/api";

export const GrupoEscalaScreen = () => {

    const classes = useStyles();
    const classesb = useStylesb();

    const [data, setData] = useState([]);

    const getGrupoEscalas = async () => {
      const resp = await fetchConToken( 'grupoescala' );
      const body = await resp.json();
      setData(body.grupoescala);
      //console.log(body);
    }

    useEffect(()=>{
      getGrupoEscalas();
    },[])

    return (

        <div className={classes.root}>           
            <Container maxWidth="lg" className={classes.container}>
              <CabezalContent titulo="Gestionar Grupo Escala" ruta="/grupoescalaadd"/> 
                
              <DataTable titulo="Lista de Grupos Escala" columns={columns} data={data} endpoint="grupoescala" rutaPadre="/grupoescala" rutaform="/grupoescala" />
            </Container> 
        </div>
    )
}