import { Routes, Route } from 'react-router-dom';

import Loginform from "./components/loginform";
import Navigation from "./components/navigation";
import Listproduit from "./components/pages/produit/listproduit";
import UserList from './components/pages/users/userList';
import { useState } from 'react';
import { getAuthenticated } from './lib/authApi';
import PrivateRoutes from './lib/privateRoutes';
import PublicRoutes from './lib/publicRoutes';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(getAuthenticated)


  return (


    <div className='fixed h-full w-full '>
      {isAuthenticated && <Navigation />}

      <Routes>

        <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
          <Route path='/login' element={<Loginform setIsAuthenticate={setIsAuthenticated} />} />
        </Route>
        <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
          <Route exact path='/' element={<Listproduit />} />
          <Route path='/user' element={<UserList />} />
        </Route>


      </Routes>
    </div>

  );
}

export default App;
