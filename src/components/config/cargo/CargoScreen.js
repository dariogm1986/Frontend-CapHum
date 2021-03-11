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
      title: 'Cargo',
      field: 'cargo'
    },
    {
      title: 'Categoria Ocupacional',
      field: 'catocupacional'
    },
    {
      title: 'Grupo Escala',
      field: 'grupoescala'
    },
  ];

  //const baseUrl = "http://localhost:4000/api";

export const CargoScreen = () => {

    const classes = useStyles();
    const classesb = useStylesb();

    const [data, setData] = useState([]);

    const getCargos = async () => {
      const resp = await fetchConToken( 'cargo' );
      const body = await resp.json(); 
      const datanew = body.cargo.map((item)=>{
        const objeto = {
          _id: item._id,
          cargo: item.cargo,
          catocupacional: item.catocupacional.catocupacional,
          grupoescala: item.grupoescala.grupoescala
        }
        //console.log('cargo1 ',item.catocupacional.catocupacional);
        return objeto;
      });
      //console.log('datanueva ',datanew);
      //setData(body.cargo);
      setData(datanew);
      //console.log(body);
    }

    useEffect(()=>{
      getCargos();
    },[])

    //console.log('data ', data);

    return (

        <div className={classes.root}>           
            <Container maxWidth="lg" className={classes.container}>
              <CabezalContent titulo="Gestionar Cargo" ruta="/cargoadd"/> 
                
              <DataTable titulo="Lista de Cargos" columns={columns} data={data} endpoint="cargo" rutaPadre="/cargo" rutaform="/cargo" />
            </Container> 
        </div>
    )
}