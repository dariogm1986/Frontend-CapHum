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
      title: 'Categoria Ocupacional',
      field: 'catocupacional'
    },
  ];

  //const baseUrl = "http://localhost:4000/api";

export const CatOcupacionalScreen = () => {

    const classes = useStyles();
    const classesb = useStylesb();

    const [data, setData] = useState([]);

    const getCatOcupacional = async () => {
      const resp = await fetchConToken( 'catocupacional' );
      const body = await resp.json();
      setData(body.catocupacional);
      //console.log(body);
    }

    useEffect(()=>{
      getCatOcupacional();
    },[])

    return (

        <div className={classes.root}>           
            <Container maxWidth="lg" className={classes.container}>
              <CabezalContent titulo="Gestionar Categoria Ocupacional" ruta="/catocupacionaladd"/> 
                
              <DataTable titulo="Lista de Categorias Ocupacional" columns={columns} data={data} endpoint="catocupacional" rutaPadre="/catocupacional" rutaform="/catocupacional" />
            </Container> 
        </div>
    )
}