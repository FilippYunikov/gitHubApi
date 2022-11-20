import ReactDOM from 'react-dom/client';

import App from './core/App';
import {QueryClient, QueryClientProvider} from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);