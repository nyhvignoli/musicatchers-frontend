import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyledTextField, StyledButton } from '../BaseForm/styles';
import { Container, FormContainer } from "../../global/styles";
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import GenreToggleGroup from '../GenreToggleGroup/GenreToggleGroup';
import { createMusic } from '../../services/entities/music';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/requestConfig';

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
    const { data } = useRequestData(`${BASE_URL}/music/genres`, undefined, undefined);
    const { form, onChange } = useForm({
        title: '',
        author: '',
        file: '',
        album: ''
    });

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    useEffect(() => {
        setGenres(data)
    }, [data]);

    const handleToggleChange = (event, genres) => {
        setSelectedGenres(genres)
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            title: form.title,
            author: form.author,
            file: form.file,
            genres: selectedGenres,
            album: form.album
        };

        createMusic(body, history);
    };

    return (
        <Container>
            <FormContainer  
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
                    genres={genres}
                    value={selectedGenres}
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
        </Container>
    );
};

export default CreateMusicForm;