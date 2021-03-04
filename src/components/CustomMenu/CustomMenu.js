import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { goToMusicDetails } from '../../router/coordinator';

const CustomMenu = (props) => {

    return (
        <div>
            <Menu
                id="custom-menu"
                anchorEl={props.anchorEl}
                keepMounted
                open={Boolean(props.anchorEl)}
                onClose={props.handleClose}
            >
            {props.isFeedScreen && 
                <MenuItem onClick={() => goToMusicDetails(props.history, props.musicId)}>
                    Ver música
                </MenuItem>
            }    
            
            <MenuItem onClick={props.handleClose}>Adicionar à playlist...</MenuItem>
            <MenuItem onClick={props.handleClose}>Excluir</MenuItem>
            </Menu>
        </div>
    );
};

export default CustomMenu;