import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './UI/index.css';
import App from './UI/App';
import reportWebVitals from './UI/reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './UI/Pages/User/User';
import Admin from './UI/Pages/Amin/Amin';
import Home from './UI/Pages/Home/Home';
import EnterPrise from './UI/Pages/Enterprise/Enterprise';
import NotFound from './UI/Pages/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './common/Redux/store/store';
import Loading from './UI/component/Loading';
import SignUpForm from './UI/component/SignupForm';
import SignInForm from './UI/component/SignInForm';

// const User = lazy(() => import('./UI/Pages/User/User'))
// const Admin = lazy(() => import('./UI/Pages/Amin/Amin'))
// const EnterPrise = lazy(() => import('./UI/Pages/Enterprise/Enterprise'))
// const Home = lazy(() => import('./UI/Pages/Home/Home'))
// const NotFound = lazy(() => import('./UI/Pages/NotFound/NotFound'))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Suspense fallback={<Loading />}>
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='User' element={<User />} >
               <Route index  element={< SignUpForm/>}/>
               <Route path='SigIn' element={< SignInForm/>}/>
            </Route>
            <Route path='Admin' element={<Admin />} />
            <Route path='Enterprise' element={<EnterPrise />} />
            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </React.StrictMode>
  </Provider>
  // </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
