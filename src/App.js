import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import HomePageLoading from './pages/Shared/HomePageLoading/HomePageLoading';
import { AuthContext } from './context/AuthProvider';
function App() {
  const { theme } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  return (
    <div
      data-theme={
        theme ? 'dark' : 'doctortheme'
      }
    >
      <div
        className='max-w-[1440px] mx-auto'>
        {
          loading ? <HomePageLoading /> : <>
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
          </>
        }
      </div>
    </div>
  );
}

export default App;
