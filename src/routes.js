import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Erro from "./pages/Erro";
import Favoritos from "./pages/favoritos";
import Filme from "./pages/filme";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
