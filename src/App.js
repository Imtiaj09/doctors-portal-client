import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import HomePageLoading from './pages/Shared/HomePageLoading/HomePageLoading';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto'>
      {
        loading ? <HomePageLoading /> : <>
          <RouterProvider router={router}></RouterProvider>
          <Toaster />
        </>
      }
    </div>
  );
}

export default App;
