import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false);
  // When second function is called, updates render and picks up latest state value
  
  function deleteHandler() {
    setModelIsOpen(true);  
  }

  function closeModalHandler() {
    setModelIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        {/* No parentheses on func otherwise will run immediately */}
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      {/* Remember, we have to configure this onClick attribute ourselves in Backdrop.js */}
      {/* Can also call it whatever we want, like onCancel instead of onClick (our property) */}
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      { modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
