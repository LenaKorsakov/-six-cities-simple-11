import WelcomeScreen from '../../pages/welcome-screen';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return(
    <WelcomeScreen offersCount = {offersCount}/>
  );
}

export default App;
