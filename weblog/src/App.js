import React from "react";
import { Route,Link } from "react-router-dom";

const App = ()=> {
  return (
    <>
    <ul>
      <li><Link to="/">صفحه اصلی</Link></li>
      <li><Link to="/chekhabar">صفحه غیر اصلی</Link></li>
    </ul>
   <Route path="/" exact render={()=><p>salam inja safe avale</p>} />
   <Route path="/chekhabar" exact render={()=><p>saalaaaaaaam</p>} />
   <Route path="/chekhabar" exact render={()=><p>saalaaaaaaam</p>} />
   <Route path="/chekhabar" exact render={()=><p>saalaaaaaaam</p>} />
   </>
  );
}

export default App;
