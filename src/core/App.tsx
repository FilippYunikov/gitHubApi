import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { PageHome } from '../pages/page-home';
import { PageUser } from '../pages/page-user';
import { NotFound } from '../pages/not-found';

const App = () => {

return(
  <Router>
    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/user" element={<PageUser/>}/>
      <Route element={<NotFound />} />
    </Routes>
</Router>
)
};

export default App;
