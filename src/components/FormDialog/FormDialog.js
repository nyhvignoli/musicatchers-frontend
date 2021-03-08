import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
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
import { createPlaylist } from '../../services/entities/playlist';

const FormDialog = (props) => {
    const history = useHistory();
    const { form, onChange } = useForm({name: "", description:""});

    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            name: form.name,
            description: form.description
        };

        createPlaylist(body, history, props.upDate);
        props.handleClose();
    };

    return (
        <DialogContainer>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog">
                <DialogTitle id="form-dialog">Que tal criar uma playlist?</DialogTitle>
                <FlexForm onSubmit={onSubmitForm}>
                    <StyledDialogContent>
                        <StyledTextField
                            required
                            label="Nome da playlist"
                            type="text"
                            variant="outlined"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                        />
                        <StyledTextField
                            required
                            multiline
                            label="Descrição"
                            type="text"
                            variant="outlined"
                            name="description"
                            value={form.description}
                            onChange={onChange}
                        />
                    </StyledDialogContent>
                    <StyledDialogActions>
                        <Button onClick={props.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <StyledButton type="submit" variant="contained" color="primary">
                            Criar playlist
                        </StyledButton>
                    </StyledDialogActions>
                </FlexForm>
            </Dialog>
        </DialogContainer>
    );
}

export default FormDialog;