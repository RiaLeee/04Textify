import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import style from '../style/Header.module.css';
import logo from '../image/logo.png';

export const Header = () => {
    return <>
        <AppBar position="static">
            <Toolbar className={style.toolbar}>
                <img src={logo} alt='logo' className={style.logo}/>
            </Toolbar>
        </AppBar>
    </>
};