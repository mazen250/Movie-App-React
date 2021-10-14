import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoiveList from "./components/MovieList";
import Searched from "./components/Searched";
import SingleMovie from "./components//SingleMovie";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={MoiveList} />
        <Route path="/movie/search" exact component={Searched} />
        <Route path="/movie/:id" exact component={SingleMovie} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
