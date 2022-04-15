import './scss/styles.min.css';

import { Outlet } from 'react-router-dom';
// import GlobalNav from './components/GlobalNav';

function App() {
  return (
    <div className="App">
      {/* <GlobalNav /> */}

      <main >
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
