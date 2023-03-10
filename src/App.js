import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';

import Header from './modals/js/Header';
import Navbar from './modals/js/Navbar';
import MainContent from './modals/js/MainContent';

function App() {
  return (
    <div id="main">
      <Header />
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
