import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { GlobalStyles } from './GlobalStyles';
import RouteController from './routes';
import { fetcher } from './services/api';

const App = () => {
  return (
    <BrowserRouter>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyles />
        <RouteController />
      </SWRConfig>
    </BrowserRouter>
  );
};

export default App;
