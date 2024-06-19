import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./auth/Login'));
const Register = lazy(() => import('./auth/Register'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));

function App() {
 return (
  <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/auth' element={<AuthLayout />} >
                    <Route path='login' index element={<Login />} />
                    <Route path='register'  element={<Register />} />
                </Route>
                <Route index  element={<Home />}/>
                {/* <Route /> */}
            </Route>
            <Route path='/admin' element={<AdminLayout />}  >
                <Route index element={<Login />} />
            </Route>
        </Routes>
        </Suspense>
  </BrowserRouter>
 )
}

export default App
