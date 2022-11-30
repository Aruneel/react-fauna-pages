import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import HomePage from './screens/HomePage'
import Users from './screens/Users'

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
      </Routes >
    </Router>
    // <HomePage />
  );
}

export default App;