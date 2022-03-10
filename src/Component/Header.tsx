import React from 'react';
import { FaBomb } from 'react-icons/fa';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import './Header.css';

const Header: React.VFC = () => {
    return (
        <header>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="header" sx={{ mr: 1 }}>
                        <FaBomb />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Minesweeper
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
