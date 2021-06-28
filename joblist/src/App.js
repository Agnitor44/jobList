import React, {useState} from 'react'
import './styles/app.css';
import Filter from './components/Filter'
import List from './components/List'
function App() {
  const [filter, setFilter] = useState([])
  return (
    <div className="App">
        <header>
        <Filter filter = {filter} setFilter = {setFilter}/>
        </header>
      
        <List filter = {filter} setFilter = {setFilter} />
    </div>
  );
}

export default App;
