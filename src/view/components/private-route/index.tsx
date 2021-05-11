import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface Props extends Omit<RouteProps, 'component'> {
  component: React.ComponentType<any>;
  condition: boolean;
  redirect: string;
}

export const PrivateRoute: React.FC<Props> = props => {
  const { component: Component, redirect, condition, ...routeProps } = props;

  const render = React.useCallback(() => {
    return condition ? <Component /> : <Redirect to={redirect} />;
  }, [Component, condition, redirect]);

  return <Route {...routeProps} render={render} />;
};
