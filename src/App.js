import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './component/Blog';
import Home from './component/Home';
import Author from './component/Author';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/blog/:id" component={Blog} />
      <Route path="/author/:userId" component={Author} />
    </Router>
  );
}

export default App;
