import React from 'react'
import './App.css'

import SizePicker from './components/size-picker/SizePicker'
import Toe from './components/toe/Toe'

function App() {
  const [size, setSize] = React.useState('small')
  
  return (
    <main>
      <h1>Vanilla Socks</h1>
      <p className="attribution">Completely plagiarised from <a href="https://www.ravelry.com/patterns/library/vanilla-sock-with-gusset--choice-of-heel">Vanilla Sock with Gusset & Choice of Heel by Jo Torr</a></p>

      <section>
        <h2>Equipment</h2>
        <p>You'll want 100g of 4ply/fingering weight sock yarn and 2.5mm needles 60-80cm long.</p>
      </section>

      <SizePicker selectedSize={size} setSize={setSize} />
      <Toe size={size} />
    </main>
  );
}

export default App;
