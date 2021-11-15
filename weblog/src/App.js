import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DashContext from "./components/context/dashContext";
import Blog from "./components/layouts/blog/bloglayout";
import Contact from "./components/layouts/blog/contact";
import Login from "./components/layouts/blog/login";
import Rejister from "./components/layouts/blog/register";
import Single from "./components/layouts/blog/single";
import AddPost from "./components/layouts/dashboard/addPost";
import DashBlogs from "./components/layouts/dashboard/DashBlogs";
import Logout from "./components/layouts/blog/logout";
import { Messages } from "./components/ui/messages";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "./action/user";
import { decodedToken } from "./components/utils/decodedToken";
import isEmpty from "./components/utils/isEmpty";
import Loader from "./components/ui/loader";
import { cleareDash } from "./action/dashboard";
import NotFound from "./components/layouts/404";
import EditPost from "./components/layouts/dashboard/editPost";
import { getAllPosts } from "./services/dashServises";
import ForgetPass from "./components/layouts/blog/forgetPass";
import ResetPass from "./components/layouts/blog/resetPass";
import Settings from "./components/layouts/dashboard/setting";
import DeleteUser from "./components/layouts/blog/deleteuser";
import Dashboard from "./components/layouts/dashboard/dashlayout";
import HeaderBlog from "./components/layouts/blog/common/header";
import Users from "./components/layouts/dashboard/users";
import SettingUserByAdmin from "./components/layouts/dashboard/settingByAdmin";
import AddUser from "./components/layouts/dashboard/addUser";

const App = () => {
  const user = useSelector((state) => state.userHandler);
  const dispatch = useDispatch();

  useEffect(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const { payload } = decodedToken(token);
      if (payload.exp > Date.now() / 1000) {
        dispatch(updateUser());
      } else {
        localStorage.removeItem("token");
        dispatch(deleteUser());
        dispatch(cleareDash());
      }
    }
  }, []);
  return (
    <>
      <DashContext>
        <Loader />
        <Messages />
        <Switch>
          <Route
            path={[
              "/dashboard",
              "/dashboard/add-post",
              "/dashboard/edit-post/:id",
              "/dashboard/setting",
              "/dashboard/users",
            ]}
          >
            {isEmpty(user) ? (
              <Dashboard>
                <Switch>
                  <Route path="/dashboard" exact component={DashBlogs} />
                  <Route path="/dashboard/add-post" exact component={AddPost} />
                  <Route
                    path="/dashboard/edit-post/:id"
                    exact
                    component={EditPost}
                  />
                  <Route path="/dashboard/setting/:id" exact component={Settings} />
                  <Route path="/dashboard/setting-user/:id" exact component={SettingUserByAdmin} />
                  <Route path="/dashboard/users" exact component={Users} />
                  <Route path="/dashboard/add-user" exact component={AddUser} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </Dashboard>
            ) : (
              <>
              <HeaderBlog />
              <Route path="*" component={NotFound} />
              </>
            )}
          </Route>

          <Route
            path={[
              "/",
              "/single/:id",
              "/contact",
              "/forget-password",
              "/reset-password/:token",
            ]}
          >
            <HeaderBlog />
            <Switch>
              {/* dashboard router  */}
              <Route path="/" exact component={Blog} />
              <Route path="/single/:id" exact component={Single} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/forget-password" exact component={ForgetPass} />
              <Route
                path="/reset-password/:token"
                exact
                component={ResetPass}
              />
              {!isEmpty(user) ? (
                <Switch>
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Rejister} />
                  <Route
                    path="/delete-user/:token"
                    exact
                    component={DeleteUser}
                  />
                <Route path="*" component={NotFound} />
                </Switch>
              ) : (
                <Switch>
                <Route path="/logout" exact component={Logout} />
                <Route path="*" component={NotFound} />
                </Switch>
              )}
          
            </Switch>
          </Route>
        </Switch>
      </DashContext>
    </>
  );
};

export default App;
