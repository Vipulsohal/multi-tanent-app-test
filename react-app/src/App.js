import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login';
import Chat from './components/Chats';
import ProjectManagement from './components/ProjectsManagement';
import OrganizationManagement from './components/OrganizationsManagement';

const App = () => {
    const { user } = useContext(AuthContext);

    const roleBasedRoute = (Component, role) => {
        return user && user.role === role ? <Component /> : <Redirect to="/" />;
    };

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/chat/:roomId" exact render={(props) => <Chat {...props} roomId={props.match.params.roomId} />} />
                <Route path="/projects" exact component={ProjectManagement} />
                <Route path="/organizations" exact component={OrganizationManagement} />
                <Route path="/admin" exact render={() => roleBasedRoute(OrganizationManagement, 'admin')} />
            </Switch>
        </Router>
    );
};

export default App;
