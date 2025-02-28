// fart three is bass boosted
import React from "react";
import "./App.css";
import memeOneSound from './sounds/meme-one.wav'
import memeTwoSound from './sounds/meme-two.wav'
import quickSound from './sounds/quick-fart.wav'

function App() {
  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <app>
    
    <div className="fart-btns">
    <header className="title">FART BOX</header>
      <div className="one-two">
        <button className="squeaky">1. Squeaky</button>
        <button className="wet">2. Wet</button>
      </div>

      <div className="three-four">
        <button className="loud">3. Loud</button>
        <button className="quick" onClick={() => playSound(quickSound)}>4. Quick</button>
      </div>

      <div className="five-six">
        <button className="long">5. Long</button>
        <button className="meme-1" onClick={() => playSound(memeOneSound)}>6. Meme 1</button>
      </div>

      <div className="seven-eight">
        <button className="meme-2" onClick={() => playSound(memeTwoSound)}>7. Meme 2</button>
        <button className="meme-3">8. Meme 3</button>
      </div>
    </div>
    </app>

  );
}

export default App;

