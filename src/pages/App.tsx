import { fetchForecastByQuery } from '@Services/weather.service';

function App() {
  fetchForecastByQuery({ query: 'Madrid' });
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-300">
      <p>Hola</p>
    </div>
  );
}

export default App;
