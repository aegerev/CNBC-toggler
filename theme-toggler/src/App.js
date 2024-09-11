import React, {useContext} from 'react';
import ThemeContext from './store/theme-context.js';
import "./App.css";

function App() {
  const themeContext = useContext(ThemeContext);
  
  return (
    <div className={`App 
    ${themeContext.isLight ? `light` : `dark`}`}>

      <h1>CNBC</h1>
      <p>There's only ONE place for unparalleled access. </p>
      <p>Every day, we take you inside the World Of Business LIKE NEVER BEFORE. </p>
      <p>Stay one step ahead. </p>
      <p>From Opening Bell, to Power Lunch, to Mad Money. </p>
      <p>Dive Deeper. Seize Opportunity. </p>
      <h1>LIVE AMBITIOUSLY.</h1>
      <button onClick={themeContext.toggleTheme}>Toggle Theme</button>
  </div>
  );
 }

 export default App;