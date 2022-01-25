import './App.css';
import Title from './components/Title';
import Pokemon from './components/Pokemon';

const allPokemon = [
  {
    name: 'Charizard',
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ['Blaze', 'Solar power', 'Tough claws', 'Drought'],
  },
  {
    name: 'Bulbasaur',
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ['Overgrow', 'Chlorophyll'],
  },
  {
    name: 'Mewtwo',
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ['Pressure', 'Unnerve', 'Steadfast', 'Insomnia'],
  },
  {
    name: 'Mega beedrill',
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ['Intimidate', 'Unnerve'],
  },
];

export default function App() {
  return (
    <main
      className="container my-5"
      style={{
        textAlign: 'center',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Title content="My Pokémon Collection" />
      <div className="row">
        {allPokemon.map((pokemon, index) => {
          return (
            <div key={index} className="col-md-6 col-lg-4">
              <Pokemon
                key={index}
                name={pokemon.name}
                weight={pokemon.weight}
                awesome={pokemon.awesome}
                terrifying={pokemon.terrifying}
                abilities={pokemon.abilities}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
