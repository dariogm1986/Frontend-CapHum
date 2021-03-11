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
      title: 'Area',
      field: 'area'
    },
    {
      title: 'Tipo de Area',
      field: 'tipoarea'
    }
  ];

  //const baseUrl = "http://localhost:4000/api";

export const AreaScreen = () => {

    const classes = useStyles();
    const classesb = useStylesb();

    const [data, setData] = useState([]);

    const getAreas = async () => {
      const resp = await fetchConToken( 'area' );
      const body = await resp.json(); 
      const datanew = body.area.map((item)=>{
        const objeto = {
          _id: item._id,
          area: item.area,
          tipoarea: item.tipoarea.tipoarea,
          sistemapago: item.sistemapago.sistemapago,
          unidad: item.unidad.nombre
        }
        //console.log('Area1 ',item.catocupacional.catocupacional);
        return objeto;
      });
      console.log('bodyarea ',body.area);
      //setData(body.Area);
      setData(datanew);
      //console.log(body);
    }

    useEffect(()=>{
      getAreas();
    },[])

    console.log('data ', data);

    return (

        <div className={classes.root}>           
            <Container maxWidth="lg" className={classes.container}>
              <CabezalContent titulo="Gestionar Areas" ruta="/areaadd"/> 
                
              <DataTable titulo="Lista de Areas" columns={columns} data={data} endpoint="area" rutaPadre="/area" rutaform="/area" />
            </Container> 
        </div>
    )
}