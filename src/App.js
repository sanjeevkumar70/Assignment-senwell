
import './App.css';
import Table from './components/task1';
import FetchApi from './components/task2';
import ErrorBoundary from './components/task2/errorBoundary';

function App() {
  return (
    <div className="App">
      <Table/>
      <ErrorBoundary>
        <FetchApi/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
