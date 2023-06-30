
import {people } from "./componets/people.js";
import { UserCard } from "./componets/UserCard.jsx";

import './index.css'

function App() {
  //console.log(people);

  return (   
      
      <div className='container'>

      {people.map((user, i) => <UserCard user={user} key={i} />)}
      
      </div>
    
  )
}

export default App
