import { HelmetProvider } from 'react-helmet-async';
import WeatherPanel from '@Components/WeatherPanel';
import SeoMetaTags from '@Components/SeoMetaTags';

function App() {
  return (
    <HelmetProvider>
      <SeoMetaTags
        title="Home"
        description="What is the weather like?"
        url=""
      />
      <div className="w-full flex justify-center items-center min-h-screen bg-300">
        <header></header>
        <main>
          <WeatherPanel />
        </main>
        <footer></footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
