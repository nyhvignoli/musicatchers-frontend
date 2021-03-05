import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MenuItem, Button, Select } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { 
    DialogContainer, 
    StyledDialogContent, 
    FlexForm, 
    StyledTextField,
    StyledDialogActions,
    StyledButton 
} from './styles';
import { useHistory } from 'react-router-dom';
import {useRequestData} from '../../hooks/useRequestData';
import { BASE_URL, axiosConfig } from '../../constants/requestConfig';

const SelectPlaylistDialog = (props) => {
    const history = useHistory();
    const { data, getData } = useRequestData(`${BASE_URL}/playlist`, axiosConfig, undefined);
    const { form, onChange, setValues } = useForm({ option: '' });

    useEffect(() => {
        data && setValues({ option: data[0].name })
    }, [data]);

    const onSubmitForm = (event) => {
        console.log('adicionou');
        event.preventDefault();
    };

    return (
        <DialogContainer>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog">
                <DialogTitle id="select-playlist-dialog">Selecione uma playlist para adicionar essa música:</DialogTitle>
                <FlexForm onSubmit={onSubmitForm}>
                    <StyledDialogContent>
                        <Select
                            name="option"
                            labelId="select"
                            id="select"
                            value={form.option}
                            variant="outlined"
                            onChange={onChange}
                        >
                            {data && data.map((playlist) => {
                                return (
                                    <MenuItem value={playlist.name}>{playlist.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </StyledDialogContent>
                    <StyledDialogActions>
                        <Button onClick={props.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <StyledButton type="submit" variant="contained" color="primary">
                            Adicionar
                        </StyledButton>
                    </StyledDialogActions>
                </FlexForm>
            </Dialog>
        </DialogContainer>
    );
}

export default SelectPlaylistDialog;