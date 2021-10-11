import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Blog from "./components/layouts/blog/bloglayout";
import Contact from "./components/layouts/blog/contact";
import Login from "./components/layouts/blog/login";
import Rejister from "./components/layouts/blog/register";
import Single from "./components/layouts/blog/single";
import DashBlogs from "./components/layouts/dashboard/DashBlogs";
import MainLayout from "./components/layouts/mainLayout";

const App = ({ location }) => {
  const isDashboard = location.pathname.includes("dashboard")
  return (
    <>
      <MainLayout dashboard={isDashboard}>
        <Switch>
          {/* blog router  */}
          <Route path="/" exact component={Blog} />
          <Route path="/login" exact component={Login} />
          <Route path="/single/:id" exact component={Single} />
          <Route path="/register" exact component={Rejister} />
          <Route path="/contact" exact component={Contact} />


          {/* dashboard router  */}
          <Route path="/dashboard" exact component={DashBlogs} />
          <Route path="/dashboard/add-post" exact component={DashBlogs} />
          <Route path="/dashboard/edit-post" exact component={DashBlogs} />


          <Route path="*" render={() => <p style={{ margin: '150px auto', width: '100%' }}>404</p>} />
        </Switch>
      </MainLayout>
    </>
  );
}

export default withRouter(App);
