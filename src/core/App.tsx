import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { PageHome } from '../pages/page-home';
import { PageUser } from '../pages/page-user';
import { NotFound } from '../pages/not-found';
import { Navigation } from './router';

const App = () => {

return(
 <>
  <Navigation/>
</>
)
};

export default App;
