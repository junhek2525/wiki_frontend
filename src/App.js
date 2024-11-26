
import './App.css';
import { useState } from 'react';
import { Route,Routes, useNavigate } from 'react-router-dom';
import WikiPage from './WikiPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      console.log(searchQuery);
      navigate(`/wiki/${searchQuery}`);
    }
  }
  return (
    <div className='container'>
      <Routes>
        <Route path='/wiki/:searchQuery' element={<WikiPage></WikiPage>}></Route>
      </Routes>
      <header>
        <h1>Colors Wiki</h1>
        <div className='search-container'>
         <div className='search-icon'>🔍
          
          </div>
          <input type='text' className='search-input' placeholder='e' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyPress}></input>
        </div>
      </header>
    </div>
  );
}

export default App;
