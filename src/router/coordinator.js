export const goToLogin = (history) => {
    history.push('/login');
};

export const goToSignup = (history) => {
    history.push('/signup');
};

export const goToCreateMusic = (history) => {
    history.push('/music/create');
};

export const goToMusicFeed = (history) => {
    history.push('/music');
};

export const goToMusicDetails = (history, musicId) => {
    history.push(`/music/${musicId}`)
};

export const goToPlaylist = (history) => {
    history.push('/playlist');
};

export const goBack = (history) => {
    history.goBack();
};