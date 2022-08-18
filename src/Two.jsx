import {  useRecoilValue } from 'recoil';
import {characterListState} from './store/atom/characterList'
import {messageState} from './store/atom/message';

const Two = () => {

  const characters = useRecoilValue(characterListState);
  const message = useRecoilValue(messageState);

  return (
    <div className="card-area">
    { characters.length > 0 ? 
      characters.map(character => (
        <div className='card' key={character.char_id}>
          <img src={character.img} alt="caharacter" />
          {character.name}
          <p>{character.nickname}</p>
          <span>{character.status}</span>
        </div> 
      ))
      : <div className='loading'>{message}</div>
    }
</div>
  )
}

export default Two