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
      title: 'Carrera',
      field: 'carrera'
    },
  ];

  //const baseUrl = "http://localhost:4000/api";

export const CarreraScreen = () => {

    const classes = useStyles();
    const classesb = useStylesb();

    const [data, setData] = useState([]);

    const getCarreras = async () => {
      const resp = await fetchConToken( 'carrera' );
      const body = await resp.json();
      setData(body.carrera);
      //console.log(body);
    }

    useEffect(()=>{
      getCarreras();
    },[])

    //console.log('data ', data);

    return (

        <div className={classes.root}>           
            <Container maxWidth="lg" className={classes.container}>
              <CabezalContent titulo="Gestionar Carreras" ruta="/carreraadd"/> 
                
              <DataTable titulo="Lista de Carreras" columns={columns} data={data} endpoint="carrera" rutaPadre="/carrera" rutaform="/carrera" />
            </Container> 
        </div>
    )
}