import { SpinnerCircular} from 'spinners-react';
import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="loader">
      <SpinnerCircular color="#4481c3" size="80"/>
    </div>
  );
}

export default LoadingScreen;
