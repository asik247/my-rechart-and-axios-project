import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import PrichingCard from './components/PrichingCard/PrichingCard';
import ReChart from './components/ReCharts/ReChart';

const prichingPromise = async ()=>{
  const res = await fetch('/priching.json');
  return res.json()
}
const prichingData = prichingPromise()


const App = () => {
  return (
    <div>
     <Navbar></Navbar>
    <Suspense fallback={<p>loading...</p>}>
       <PrichingCard prichingData={prichingData}></PrichingCard>
    </Suspense>
    <ReChart></ReChart>
    

    
    </div>
  );
};

export default App;