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

    const seeMusicItem = <MenuItem 
        onClick={() => goToMusicDetails(props.history, props.music.id)}>
        Ver música
    </MenuItem>

    return (
        <div>
            <Menu
                id="custom-menu"
                anchorEl={props.anchorEl}
                keepMounted
                open={Boolean(props.anchorEl)}
                onClose={props.handleClose}
            >
                {props.isFeedScreen && seeMusicItem}    
                <MenuItem onClick={handleClickOpen}>Adicionar à playlist...</MenuItem>
                <MenuItem onClick={props.handleClose}>Excluir</MenuItem>
            </Menu>
            { open && 
                <SelectPlaylistDialog 
                    open={open}
                    handleClose={handleClose}
                    music={props.music}
                />
            }
        </div>
    );
};

export default CustomMenu;