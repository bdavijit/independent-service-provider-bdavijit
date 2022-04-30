import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Product';
// import Login from '../Login/Login';

import "./Home.css"

const Home = () => {
      const { user } = useFirebase();
      return (
            <div>
                  <h1>
                        Current User is : {user ? user.displayName : 'Vooooot'}
                  </h1>

                  <Banner></Banner>
                  <h1 className='text-center'>Products</h1>
                  <Products/>
                  
                  <Footer/>
            </div>
      );
};

export default Home;
