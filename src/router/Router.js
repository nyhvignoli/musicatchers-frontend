import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import CreateMusicScreen from '../screens/CreateMusicScreen/CreateMusicScreen';
import MusicFeedScreen from '../screens/MusicFeedScreen/MusicFeedScreen';
import MusicDetailsScreen from '../screens/MusicDetailsScreen/MusicDetailsScreen';
import ErrorScreen from '../screens/ErrorScreen/ErrorScreen';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact path={['/', '/login']}
                    component={HomeScreen}
                />
                <Route 
                    exact path={'/signup'}
                    component={SignupScreen}
                />
                <Route 
                    exact path={'/music/create'}
                    component={CreateMusicScreen}
                />
                <Route 
                    exact path={'/music'}
                    component={MusicFeedScreen}
                />
                <Route 
                    exact path={'/music/:id'}
                    component={MusicDetailsScreen}
                />
                <Route 
                    component={ErrorScreen}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;