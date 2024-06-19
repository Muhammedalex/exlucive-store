
import TopHeader from './../components/Headers/TopHeader';
import NavHeader from './../components/Headers/NavHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footers/Footer';
const MainLayout = () => {
  return (
    <div className='w-full'>
      <TopHeader />
      <NavHeader />
      <main className='mx-8 lg:mx-48'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
