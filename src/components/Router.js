import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import React from "react";


const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" >
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </>
                ) : (
                    <>
                        <Route path="/">
                            <Auth />
                        </Route>
                        {/* <Redirect from="*" to="/" /> */}
                    </>
                )}
            </Switch>
        </BrowserRouter >
    )
}

export default AppRouter;