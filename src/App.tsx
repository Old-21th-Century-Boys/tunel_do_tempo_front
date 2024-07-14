import RouteController from '@Routes/index';
import { fetcher } from '@Services/api';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { GlobalStyles } from './GlobalStyles';

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
