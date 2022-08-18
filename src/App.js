/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import './App.css';
import Two from './Two';
import {characterListState} from './store/atom/characterList';
import {messageState} from './store/atom/message';
import {searchState} from './store/atom/search';


function App() {


  const [characters, setCharacter] = useRecoilState(characterListState);
  const [search, setSearch] = useRecoilState(searchState);
  const setMessage = useSetRecoilState(messageState);

  const inputRef = useRef(null);
  
  useEffect(() => {
    axios.get(`https://breakingbadapi.com/api/characters?name=${search}`).then((res) => {
      setCharacter(res.data);
    });
    setInterval(() => {
      setMessage('Error');
    }, 5000);
    // eslint-disable-next-line
  }, [search])

  console.log(characters)
  return (
      <div className='content'>
        <div className='content__inputarea'>
          <input ref={inputRef} value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)} type="text" />
          <button onClick={() => inputRef.current.focus()}>Focus</button>
        </div>

        <Two/>
      </div>
  );
}  


export default App;
