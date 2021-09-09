import './index.css';

import App from './components/App';
import ReactDOM from 'react-dom';
import { restaurants } from './fixtures';

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById('root')
);
