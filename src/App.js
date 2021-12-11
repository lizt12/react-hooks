import './App.css';
import Example from './Class/StateExample/Example';
import Example2 from './Hooks/StateExample/Example';
import LifeExample from './Class/LifeExample/LifeExample';
import LifeExample2 from './Hooks/LifeExample/LifeExample';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <Example></Example>
      <Example2></Example2> */}
      <Router>
        <ul>
          <li><Link to="/">类State实例</Link></li>
          <li><Link to="/hooks/state">HooksState实例</Link></li>
          <li><Link to="/class/life">类生命周期实例</Link></li>
          <li><Link to="/hooks/life">Hooks生命周期实例</Link></li>
        </ul>
        <Routes>
          <Route path="/" exact={false} element={<Example/>} />
          <Route path="/hooks/state" exact={false} element={<Example2/>} />
          <Route path="/class/life" exact={false} element={<LifeExample/>} />
          <Route path="/hooks/life" exact={false} element={<LifeExample2/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
