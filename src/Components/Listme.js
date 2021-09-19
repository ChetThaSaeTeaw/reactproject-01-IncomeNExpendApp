import Items from './Items';
import '../App.css';
import DataContext from '../Contexts/DataContext';
import { useContext } from 'react';

function ListMe(props) {
  const { income , expense } = useContext(DataContext);
  const { items } = props
  return (
    <div>
      <ul className="itemsList">
        {items.map(element => {
          return <Items {...element} key = {element.id}/>
        })}
      </ul>
    </div>
  )
}

export default ListMe;