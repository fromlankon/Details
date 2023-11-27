import '../src/layouts/main/components/main.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './layouts/main/Main';
import Detail from './layouts/main/pages/Detail';
import Home from './layouts/main/pages/Home';
import { MainRouter } from './router';

function App() {
  return <MainRouter/>
}

export default App