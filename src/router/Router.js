import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import CreateMusicScreen from '../screens/CreateMusicScreen/CreateMusicScreen';
import MusicFeedScreen from '../screens/MusicFeedScreen/MusicFeedScreen';
import MusicDetailsScreen from '../screens/MusicDetailsScreen/MusicDetailsScreen';
import ErrorScreen from '../screens/ErrorScreen/ErrorScreen';
import PlaylistScreen from '../screens/PlaylistScreen/PlaylistScreen';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={['/', '/login']}>
                    <HomeScreen/>
                </Route>
                <Route exact path={'/signup'}>
                    <SignupScreen/>
                </Route>    
                <Route exact path={'/music/create'}>
                    <CreateMusicScreen/>
                </Route>     
                <Route exact path={'/music'}>
                    <MusicFeedScreen/>
                </Route>     
                <Route exact path={'/music/:id'}>
                    <MusicDetailsScreen/>
                </Route>   
                <Route exact path={'/playlist'}>
                    <PlaylistScreen/>
                </Route>  
                <Route>
                    <ErrorScreen/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;