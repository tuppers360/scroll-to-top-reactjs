import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

import { About } from "./About";
import { Contact } from "./Contact";
import ScrollToTop from "./ScrollToTop";
import { Application } from "./Application";
import { Stories } from "./Stories";
import { Donate } from "./Donate";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import { Footer } from "./components/footer/footer.component";

const routing = (
  <BrowserRouter>
    <ScrollToTop>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/stories" component={Stories} />
        <Route path="/application" component={Application} />
        <Route path="/donate" component={Donate} />
      </Switch>
      <Footer />
    </ScrollToTop>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
