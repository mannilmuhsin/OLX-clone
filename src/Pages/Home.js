import React, { useState } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import Car, { Apple } from '../store/Apple';


function Home(props) {

const [ap,setAp] = useState(10)
  return (
    <div className="homeParentDiv">
        <Apple.Provider value={{voo : ap, see:setAp}}>    

      <Header />
      <Banner />
      <Posts />
        <Car>

      <Footer />
        </Car>

        </Apple.Provider>    
    </div>
  );
}

export default Home;
 
