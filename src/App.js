import { Provider } from 'react-redux';
import './App.css';
import { Navbar } from './components/Navbar';
import { NotesDisplay } from './components/NotesDisplay';
import { TakeNote } from './components/TakeNote';
import { store } from './redux-toolkit-state';

function App() {
  return (
    <Provider store={store}>
    <Navbar/>
    <TakeNote/>
    <NotesDisplay/>
    </Provider>
     );
}

export default App;
