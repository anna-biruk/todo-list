import React from 'react';
import Menu from "./components/Menu/Menu";
import List from "./components/List/List";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/Login/Login";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={() => (
                        <>
                            <Menu/>
                            <List/>
                        </>
                    )}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
