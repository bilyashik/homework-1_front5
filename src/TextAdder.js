import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Правильный импорт
import { addText } from './store';

const TextAdder = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch(); // Использование useDispatch для отправки действия

  const handleAddClick = () => {
    if (inputText.trim() !== '') {
      dispatch(addText(inputText)); // Использование dispatch для отправки действия
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddClick}>Добавить</button>
    </div>
  );
};

export default TextAdder;
