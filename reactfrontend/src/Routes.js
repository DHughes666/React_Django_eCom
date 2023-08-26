import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Home from "./core/Home";

// const router = createBrowserRouter([
//     {path: "/", element: <Home />},
// ])

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes