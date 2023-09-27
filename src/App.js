import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux-toolkit-state';
import { LoginPage } from './components/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainApp } from './components/MainApp';
import { RegPage } from './components/RegPage';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainApp />} />
            <Route exact path='/signup' element={<RegPage />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
