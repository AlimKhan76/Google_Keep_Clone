import { Provider } from 'react-redux';
import './App.css';
import { Navbar } from './components/Navbar';
import { NotesDisplay } from './components/NotesDisplay';
import { TakeNote } from './components/TakeNote';
import { store } from './redux-toolkit-state';
import { HomePage } from './components/HomePage';
import { RegPage } from './components/RegPage';

function App() {
  return (
    <Provider store={store}>
      <RegPage/>
      {/* <HomePage></HomePage>
    <Navbar/>
    <TakeNote/>
    <NotesDisplay/> */}
    </Provider>
     );
}

export default App;
