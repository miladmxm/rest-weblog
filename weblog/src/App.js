import React from "react";
import { Route,Switch } from "react-router-dom";
import Blog from "./components/layouts/blog/bloglayout";
import HeaderBlog from "./components/layouts/blog/common/header";
import Single from "./components/layouts/blog/single";
import dashboard from "./components/layouts/dashboard/dashlayout";

const App = () => {
  return (
    <>
      <HeaderBlog />
      <Switch>
        {/* blog router  */}
        <Route path="/" exact component={Blog} />
        <Route path="/single/:id" exact component={Single} />
        <Route path="/login" exact component={Blog} />
        <Route path="/register" exact component={Blog} />
        <Route path="/contact" exact component={Blog} />


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
