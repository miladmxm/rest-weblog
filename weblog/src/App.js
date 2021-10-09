import React from "react";
import { Route,Switch } from "react-router-dom";
import blog from "./components/layouts/blog/bloglayout";
import dashboard from "./components/layouts/dashboard/dashlayout";

const App = () => {
  return (
    <>
      <Switch>
        {/* blog router  */}
        <Route path="/" exact component={blog} />
        <Route path="/single" exact component={blog} />
        <Route path="/login" exact component={blog} />
        <Route path="/register" exact component={blog} />
        <Route path="/contact" exact component={blog} />


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
