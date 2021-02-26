import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormContainer, StyledTextField, StyledButton } from '../BaseForm/styles';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import GenreToggleGroup from '../GenreToggleGroup/GenreToggleGroup';
import { createMusic } from '../../services/music';
import { useRequestData } from '../../hooks/useRequestData';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CreateMusicForm = () => {
    const classes = useStyles();
    const history = useHistory();
    const { data, getData } = useRequestData();
    const { form, onChange } = useForm({
        title: '',
        author: '',
        file: '',
        album: ''
    });
    const [genres, setGenres] = useState([]);

    const handleToggleChange = (event, genres) => {
        setGenres(genres);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            title: form.title,
            author: form.author,
            file: form.file,
            genres,
            album: form.album
        };

        createMusic(body, history, getData);
    };

    return (
        <div>
            <FormContainer 
                className={classes.root}  
                autoComplete="off"
                onSubmit={onSubmitForm}
            >
                <StyledTextField 
                    required
                    label='Título' 
                    type='text'
                    name='title'
                    variant="filled" 
                    color="secondary"
                    value={form.title} 
                    onChange={onChange}
                    fullWidth
                />
                <StyledTextField 
                    required
                    label='Artista' 
                    type='text'
                    name='author'
                    variant='filled' 
                    color='secondary'
                    value={form.author} 
                    onChange={onChange}
                    fullWidth
                />
                <StyledTextField 
                    required
                    label='URL' 
                    type='txt'
                    name='file'
                    variant="filled" 
                    color="secondary" 
                    value={form.file}
                    onChange={onChange}
                    fullWidth
                />
                <StyledTextField 
                    required
                    label='Álbum' 
                    type='text'
                    name='album'
                    variant="filled" 
                    color="secondary"
                    value={form.album} 
                    onChange={onChange}
                    fullWidth
                /> 
                <GenreToggleGroup
                    value={genres}
                    onChange={handleToggleChange}
                />       
                <StyledButton 
                    variant="outlined" 
                    color="secondary"
                    type="submit"
                >
                    Adicionar Música
                </StyledButton>
            </FormContainer>
        </div>
    );
};

export default CreateMusicForm;