import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF742B',
        },
        secondary: {
            main: '#F6F6EF',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                    <CssBaseline />
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
