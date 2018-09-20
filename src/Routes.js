import React from '../node_modules/react';
import { BrowserRouter, Switch, Route} from '../node_modules/react-router-dom'

// The Todo Container Component

import RootContainer from './containers/rootContainer'


// The Routing Component providing all the routing Configuration

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>

                {/* It's setup at the default index route */}

                {/* <Route path="/" component={RootContainer} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }