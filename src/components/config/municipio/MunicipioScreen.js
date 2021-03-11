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
      title: 'Municipio',
      field: 'municipio'
    },
    {
      title: 'Provincia',
      field: 'provincia'
    },
  ];

  //const baseUrl = "http://localhost:4000/api";

export const MunicipioScreen = () => {

    const classes = useStyles();
    const classesb = useStylesb();

    const [data, setData] = useState([]);

    const getMunicipios = async () => {
      const resp = await fetchConToken( 'municipio' );
      const body = await resp.json();
      const datanew = body.municipio.map((item)=>{
        const objeto = {
          _id: item._id,
          municipio: item.municipio,
          provincia: item.provincia.provincia
        }
        //console.log('cargo1 ',item.catocupacional.catocupacional);
        return objeto;
      });
      setData(datanew);
      //setData(body.Municipio);
      //console.log(body);
    }

    useEffect(()=>{
      getMunicipios();
    },[])

    return (

        <div className={classes.root}>           
            <Container maxWidth="lg" className={classes.container}>
              <CabezalContent titulo="Gestionar Municipios" ruta="/municipioadd"/> 
                
              <DataTable titulo="Lista de Municipios" columns={columns} data={data} endpoint="municipio" rutaPadre="/municipio" rutaform="/municipio" />
            </Container> 
        </div>
    )
}