import React, {Suspense} from 'react';
// import Loader from 'react-loader-spinner'
import './App.css';
// import AboutUs from './components/AboutUs
//Components 


function App() {
  const AboutUs = React.lazy(() => import('./components/AboutUs'))
  const Packages = React.lazy(() => import('./components/Packages'))
  
 
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
        <Suspense fallback={<h1 className='centerred'>Loading...</h1>}>
          <div className='centerred'>
          <AboutUs />
          <Packages />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
export default App;
