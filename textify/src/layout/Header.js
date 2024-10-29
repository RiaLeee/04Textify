import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import style from '../style/Header.module.css';
import logo from '../image/logo.png';
import { IconButton } from '@mui/material';

export const Header = () => {
    return <>
        <AppBar position="static">
            <Toolbar className={style.toolbar}>
                <img src={logo} alt='logo' className={style.logo}/>
                <div>사이트소개</div>
            </Toolbar>
        </AppBar>
    </>
};