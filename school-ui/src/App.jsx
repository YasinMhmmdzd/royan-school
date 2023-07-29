import { useRoutes } from 'react-router-dom';
import './App.css';
import pageRoutes from './Routes';
function App() {
  let router = useRoutes(pageRoutes)
  return (
    <div className='App'>
      {router}
    </div>
  );
}

export default App;
