import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import PrichingCard from './components/PrichingCard/PrichingCard';
import ReChart from './components/ReCharts/ReChart';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import Axios from './components/Axios/Axios';

const prichingPromise = async ()=>{
  const res = await fetch('/priching.json');
  return res.json()
}
const prichingData = prichingPromise()

// axios feaching rule:::
const axiosPromise = axios.get('/axios.json');



const App = () => {
  return (
    <div>
     <Navbar></Navbar>
    <Suspense fallback={<p>loading...</p>}>
       <PrichingCard prichingData={prichingData}></PrichingCard>
    </Suspense>
    <ReChart></ReChart>
    <Suspense fallback={<p>loading...</p>}>
      <Axios axiosPromise={axiosPromise}></Axios>
    </Suspense>
    <Footer></Footer>
    

    
    </div>
  );
};

export default App;