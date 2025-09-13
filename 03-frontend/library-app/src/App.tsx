import React, { useState } from 'react';
import Navbar from './layouts/NavbarAndFooter/Navbar'
import './App.css';
import Footer from './layouts/NavbarAndFooter/Footer';
import HomePage from './layouts/HomePage/HomePage';
import SearchBookPage from './layouts/SearchBooksPage/SearchBookPage';
import { Pagination } from './layouts/Utils/Pagination';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import BookCheckoutPage from './layouts/BookCheckoutPage/BookCheckoutPage';
import BookModel from './models/BookModel';
import SignUpPage from './layouts/SignUpPage/SignUpPage';
import { CartDrawer } from './layouts/Cart/CartDrawer';
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import { auth0Config } from './lib/auth0Config';
import LoginPage from './layouts/Login/LoginPage';


export function App() {
  const [book, setCurrentBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const bookId = (window.location.pathname).split('/')[window.location.pathname.split('/').length - 1];

  const Auth0ProviderWithHistory = ({ children }: { children: React.ReactNode }) => {
    const history = useHistory();

    const onRedirectCallback = (appState: any) => {
      history.push(appState?.returnTo || "/home");
    };

    return (
      <Auth0Provider
        domain={auth0Config.issuer}
        clientId={auth0Config.clientId}
        authorizationParams={{
          redirect_uri: auth0Config.redirectUri,
          audience: auth0Config.audience,
          scope: auth0Config.scope,
        }}
        onRedirectCallback={onRedirectCallback}
      >
        {children}
      </Auth0Provider>
    );
  };

  const SecureRoute = ({ component, path, ...args }: { component: React.ComponentType<any>, path: string }) => (
    <Route path={path} component={withAuthenticationRequired(component)} {...args} />
  );

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Auth0ProviderWithHistory>
          <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />

          <div className='flex-grow-1'>
            <Switch>
              <Route exact path='/'>
                <Redirect to="/home" />
              </Route>

              <Route exact path='/home'>
                <HomePage />
              </Route>

              <Route exact path='/search'>
                <SearchBookPage />
              </Route>

              <Route exact path='/checkout/:bookid'>
                <BookCheckoutPage isLoadingUi={setIsLoading} />
              </Route>

              {/* <Route exact path='/signUp' component={SignUpPage} /> */}
              <Route path='/login' render={() => <LoginPage />} />
              {/* <SecureRoute path='/shelf' component={ShelfPage} />
            <SecureRoute path='/messages' component={MessagesPage} />
            <SecureRoute path='/admin' component={ManageLibraryPage} /> */}
            </Switch>
          </div>

          {!isLoading && <Footer />}
        </Auth0ProviderWithHistory>


        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      </div>
    </>
  );
}
