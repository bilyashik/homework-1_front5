// App.js
import React from 'react';
import { Provider } from 'react-redux';
import TextAdder from './TextAdder';
import TextDisplay from './TextDisplay';
import Counter from './Counter'; // Импортируйте Counter
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Добавление текста с использованием React и Redux</h1>
        <TextAdder />
        <TextDisplay />
        <Counter /> {/* Добавьте компонент Counter */}
      </div>
    </Provider>
  );
};

export default App;
