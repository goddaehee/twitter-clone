import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import React from "react";


const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" >
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile" >
                            <Profile userObj={userObj} refreshUser={refreshUser} />
                        </Route>
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </BrowserRouter >
    )
}

export default AppRouter;