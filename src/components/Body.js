import React from 'react'
import Header from './Header'
import AddTask from './AddTask'
import Todoitem from './Todoitem'
import { useState } from 'react'
function Body() {
      const [updateform, setUpdateform] = useState(false);
      
  return (
    <div>
      <Header />
      <AddTask updateform={updateform} setUpdateform={setUpdateform} />
      <Todoitem updateform={updateform} setUpdateform={setUpdateform} />
    </div>
  );
}

export default Body