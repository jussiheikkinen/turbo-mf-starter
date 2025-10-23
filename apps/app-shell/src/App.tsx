import React from 'react';
import './App.css';

const App1 = React.lazy(() => import('app1/App'));
const AppBar = React.lazy(() => import('appbar/App'));
const NavBar = React.lazy(() => import('navbar/App'));

const App = () => {
  return (
    <div className="content">
      <React.Suspense fallback={<div>Loading...</div>}>
        <App1 />
        <AppBar />
        <NavBar />
      </React.Suspense>
    </div>
  );
};

export default App;
