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
      title: 'Tipo de Area',
      field: 'tipoarea'
    },
  ];

  //const baseUrl = "http://localhost:4000/api";

export const TipoAreaScreen = () => {

    const classes = useStyles();
    const classesb = useStylesb();

    const [data, setData] = useState([]);

    const getTipoArea = async () => {
      const resp = await fetchConToken( 'tipoarea' );
      const body = await resp.json();
      setData(body.tipoArea);
      //console.log(body);
    }

    useEffect(()=>{
      getTipoArea();
    },[])

    return (

        <div className={classes.root}>           
            <Container maxWidth="lg" className={classes.container}>
              <CabezalContent titulo="Gestionar Tipos de Areas" ruta="/addtipoarea"/> 
                
              <DataTable titulo="Lista de Tipos de Areas" columns={columns} data={data} endpoint="tipoarea" rutaPadre="/tipoarea" rutaform="/tipoarea" />
            </Container> 
        </div>
    )
}