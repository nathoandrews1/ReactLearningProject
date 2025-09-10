import React, { useState } from 'react';
import Navbar from './layouts/NavbarAndFooter/Navbar'
import './App.css';
import Footer from './layouts/NavbarAndFooter/Footer';
import HomePage from './layouts/HomePage/HomePage';
import SearchBookPage from './layouts/SearchBooksPage/SearchBookPage';
import { Pagination } from './layouts/Utils/Pagination';
import { Redirect, Route, Switch } from 'react-router-dom';
import BookCheckoutPage from './layouts/BookCheckoutPage/BookCheckoutPage';
import BookModel from './models/BookModel';
import SignUpPage from './layouts/SignUpPage/SignUpPage';


export function App() {
  const [book, setCurrentBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const bookId = (window.location.pathname).split('/')[window.location.pathname.split('/').length - 1];

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />

        <div className='flex-grow-1'>
          <Switch>
            <Route exact path='/'>
              <Redirect to="/home" />
            </Route>

            <Route exact path='/home' component={HomePage}>
              <HomePage />
            </Route>

            <Route exact path='/search' component={SearchBookPage} />

            <Route exact path='/checkout/:bookid'>
              <BookCheckoutPage isLoadingUi={setIsLoading}/>
            </Route>
            
            <Route exact path='/signUp' component={SignUpPage} />
          </Switch>
        </div>

        {!isLoading && <Footer />}
      </div>
    </>
  );
}
