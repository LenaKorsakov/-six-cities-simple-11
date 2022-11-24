import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import { AuthorizationStatus } from '../../const/authorization-status';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({children, authorizationStatus}: PrivateRouteProps): JSX.Element {
  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main}/>
      : children
  );
}

export default PrivateRoute;
