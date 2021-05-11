import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import { RootState } from '~/types';
import { PrivateRoute } from '~/view/components/private-route';
import { HomePage } from '~/view/pages/HomePage';
import { SessionStreamingPage } from '~/view/pages/SessionStreamingPage';
import { SignInPage } from '~/view/pages/SignInPage';
import commonStyles from '~/view/styles/common.pcss';

export const AppComponent: React.FC = () => {
  const auth = useSelector((state: RootState) => state.user.auth);
  const isLoggedIn = Boolean(auth);

  return (
    <div className={commonStyles['app-wrapper']}>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={HomePage}
          condition={isLoggedIn}
          redirect="/sign-in"
        />
        <PrivateRoute
          exact
          path="/sign-in"
          component={SignInPage}
          condition={!isLoggedIn}
          redirect="/"
        />
        <PrivateRoute
          exact
          path="/session-streaming"
          component={SessionStreamingPage}
          condition={isLoggedIn}
          redirect="/sign-in"
        />
        {/*
        <Route
          path="*"
          render={() => (isLoggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />)}
        /> */}
      </Switch>
    </div>
  );
};

export const App = hot(() => <AppComponent />);
