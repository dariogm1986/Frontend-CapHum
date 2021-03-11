import React from 'react';

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {Link} from 'react-router-dom';

const useStylesb = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      display: 'flex',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    division: {        
        marginTop: 20,
        marginBottom: 20,
    },
    link:{
      textDecoration: 'none',
      color: 'inherit',
    },
  }));

export const CabezalContent = ({titulo, ruta}) => {

    const classesb = useStylesb();

    return (
        <div className={classesb.root}>           
            
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classesb.title}>
                {titulo}
            </Typography>
            <Link className={classesb.link} to={ruta}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
            <Divider className={classesb.division}/>
        </div>
    )
}