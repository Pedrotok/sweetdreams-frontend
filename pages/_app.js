import NavBar from 'components/navBar';
import MainFooter from 'components/mainFooter';

import { init as initAxios } from 'lib/axios';

import 'styles/global.css';
import { AppStateProvider } from 'contexts/appStateContext';

export const MainApp = ({ Component, pageProps }) => {
  initAxios();

  return (
    <>
      <AppStateProvider>
        <NavBar />
        <Component {...pageProps} />
        <MainFooter />
      </AppStateProvider>
    </>
  );
}

export default MainApp;
