import React from "react";
import { Route,Switch } from "react-router-dom";
import Blog from "./components/layouts/blog/bloglayout";
import HeaderBlog from "./components/layouts/blog/common/header";
import Contact from "./components/layouts/blog/contact";
import Login from "./components/layouts/blog/login";
import Rejister from "./components/layouts/blog/register";
import Single from "./components/layouts/blog/single";
import dashboard from "./components/layouts/dashboard/dashlayout";

const App = () => {
  return (
    <>
      <HeaderBlog />
      <Switch>
        {/* blog router  */}
        <Route path="/" exact component={Blog} />
        <Route path="/login" exact component={Login} />
        <Route path="/single/:id" exact component={Single} />
        <Route path="/register" exact component={Rejister} />
        <Route path="/contact" exact component={Contact} />


        {/* dashboard router  */}
        <Route path="/dashboard" exact component={dashboard} />
        <Route path="/add-post" exact component={dashboard} />
        <Route path="/edit-post" exact component={dashboard} />

        
        <Route path="*" render={()=><p>404</p>} />
      </Switch>
    </>
  );
}

export default App;
