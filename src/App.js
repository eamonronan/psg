import logo from './logo.svg';
import './App.css';
import RandomElement from './components/RandomElement';
import PrimaryCharacters from './components/PrimaryCharacters';
import SecondaryCharacters from './components/SecondaryCharacters';
import AI_image from './images/PeepShowAIImage.jpg';
import Plot from './components/Plot';

function App() {
  var PrimaryCharacter = RandomElement(PrimaryCharacters);
  var SecondaryCharacter = RandomElement(PrimaryCharacters);
  var MinorCharacterOne = RandomElement(SecondaryCharacters);
  var MinorCharacterTwo = RandomElement(SecondaryCharacters);


  return (
    <>
      <div class="App">
        <div class>
          <h1>Peep Show Episode Generator</h1>
          <p>Main Character of episode: {PrimaryCharacter}</p>
          <p>Secondary character of episode: {SecondaryCharacter}</p>
          <p>First minor character appearing in episode: {MinorCharacterOne}</p>
          <p>Second minor character appearing in episode: {MinorCharacterTwo}</p>
          {Plot(PrimaryCharacter, SecondaryCharacter, MinorCharacterOne, MinorCharacterTwo)};
        </div>
        <div>
          <img src={AI_image} />
        </div>
      </div>
    </>

  );
}

export default App;
