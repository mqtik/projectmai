import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Detail from "./Detail";
import Movies from "./Movies";
import Results from "./Results";



export default function App() {

  return (
    <>
      <Nav />

      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/movies/:id" component={Detail} />
        <Route path ="/results" component={Results} />

      </Switch>
      <Footer />
    </>
  )
}

