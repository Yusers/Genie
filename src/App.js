import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import WeeklyOutfit from './pages/WeeklyOutfit';
import Navbar from './components/Navbar/Navbar';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Detail from './pages/Detail';
import Footer from './components/Footer/Footer';
import ChatBoxBtn from './components/ChatBoxBtn/ChatBoxBtn';
import Checkout from './pages/Checkout';
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './pages/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Our Products', url: '/products' },
  { title: 'Blog Fashion', url: '/blog' },
  { title: 'Weekly Outfit', url: '/weekly-outfit' },
  { title: 'Community', url: '/community' },
  { title: 'About', url: '/about' },
];

const defaultTheme = createTheme();

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Navbar title='GENIE' sections={sections} />
          <ToastContainer
            position='bottom-left'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
          <hr />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/sign-in' element={<SignIn />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/products/:id' element={<Detail />}></Route>
            <Route path='/weekly-outfit' element={<WeeklyOutfit />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/view-cart' element={<Cart />}></Route>
          </Routes>
          <ChatBoxBtn />
        </Container>
        <br />
        <hr />
        <Footer />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
