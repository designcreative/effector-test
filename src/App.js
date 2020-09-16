import React, { useEffect } from "react";
import { useList, useStore } from "effector-react";
import routes from "./routes";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter,
} from "react-router-dom";
import { Container, RowCenter } from "./styled/Components";

import "./App.css";

// Assets
import logo from "./assets/logo.png";

const App = () => {
    return (
        <Container>
            <RowCenter>
                <img src={logo} alt="logo" />
            </RowCenter>
            <Router>
                <Switch>
                    {routes.map((route, idx) => (
                        <Route
                            path={route.path}
                            component={route.component}
                            key={idx}
                        />
                    ))}
                </Switch>
            </Router>
        </Container>
    );
};

export default App;
