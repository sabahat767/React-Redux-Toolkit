import './App.css';
import CounterInput from './Components/CounterInput';
import CounterOutput from './Components/CounterOutput';
import { Provider } from 'react-redux'
import store from './store/store'
import CounterButton from './Components/CounterButton'
import CounterView from './Components/CounterView'
function App() {
  return (
  //  <>
   
  //  <CounterOutput/>
  //  <br/>
  //  <CounterInput/>
  //  </>
  <Provider store={store}>
        <div>
            <CounterView/>
            <CounterButton/>
        </div>
        </Provider>
  );
}

export default App;
