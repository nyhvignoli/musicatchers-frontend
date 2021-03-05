import React, { useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { goToMusicDetails } from '../../router/coordinator';
import SelectPlaylistDialog from '../../components/SelectPlaylistDialog/SelectPlaylistDialog';

const CustomMenu = (props) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
            
            <MenuItem onClick={handleClickOpen}>Adicionar à playlist...</MenuItem>
            <MenuItem onClick={props.handleClose}>Excluir</MenuItem>
            </Menu>
            { open && 
                <SelectPlaylistDialog 
                    open={open}
                    handleClose={handleClose}
                />
            }
        </div>
    );
};

export default CustomMenu;