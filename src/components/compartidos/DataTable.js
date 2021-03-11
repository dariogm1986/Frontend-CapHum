import React, { useState } from 'react';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import { fetchConToken } from '../../helpers/fetch';
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import { ColorLensOutlined } from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

// const columns = [
//   {
//     title: 'ID',
//     field: '_id'
//   },
//   {
//     title: 'Nombre',
//     field: 'nombre'
//   },
//   {
//     title: 'Director',
//     field: 'director'
//   },
//   {
//     title: 'Direccion',
//     field: 'direccion'
//   },
// ];

// const data = [
//   {_id: '1234', nombre: 'INVESCONS', director: 'Jorge Luis', direccion: 'Calle Vento entre 100 y alta habana'},
//   {_id: '4321', nombre: 'ENIA', director: 'Perez Roque', direccion: 'Calle Sol numero 20'},
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
}));

export const DataTable = ({titulo, columns, data, endpoint, rutaPadre, rutaform}) => {

  const classes = useStyles();

  const routerHistory = useHistory();

  const borrar = async (id) => {
    const res = await fetchConToken( endpoint+"/"+id,{}, 'DELETE' );
    return res;
    // const resp = await res.json();
  }

  const Delete = async (id, endpoint) => {
    Swal.fire({
      title: 'Estas Seguro?',
      text: 'Si lo Eliminas no podras recuperarlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if(result.isConfirmed){
        
          const res = fetchConToken( endpoint+"/"+id,{}, 'DELETE' ).then(resolve => {
            if(resolve.ok){
              Swal.fire(
                'Eliminado',
                'Registro Eliminado satisfactoriamente',
                'success'
              );
              //console.log('entro al if');
              routerHistory.push(rutaPadre);
            }else{
              Swal.fire(
                resolve.msg
              )
            }
          }).catch(err =>{
            Swal.fire(
              err
            )
          });
         
            
      }
    })
  }
  
  return (
    <div className={classes.root}>
      <MaterialTable 
        icons={tableIcons} // Para que muestre los iconos de la la tabla
        columns={columns} //los nombres de las columnas con su campo que relaciona con la data
        data={data}  //data los datos a mostrar en la tabla
        title={titulo} //titulo de la tabla
        actions={[ //columna de acciones para mostrar los iconos de editar y eliminar
          {
            icon: tableIcons.Edit,
            tooltip: `Editar ${endpoint}`,
            onClick: (event, rowData) => {
              routerHistory.push(rutaform+"edit/"+rowData._id);
              //console.log(rutaform+"edit/");
            }//Editar(rowData, endpoint)
          },
          {
            icon: tableIcons.Delete,
            tooltip: `Eliminar ${endpoint}`,
            onClick: (event, rowData) => Delete(rowData._id, endpoint)
          }
        ]}
        options={{actionsColumnIndex: -1}} //poner al final la columna de actions
        localization={{ //Cambiar a espanol el encabeza de actions a acciones
          header: {
            actions: 'Acciones'
          }
        }}
      />
    </div>
  );
}