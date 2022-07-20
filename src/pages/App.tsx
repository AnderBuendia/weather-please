import { HelmetProvider } from 'react-helmet-async';
import WeatherPanel from '@Components/WeatherPanel/WeatherPanel';
import SeoMetaTags from '@Components/generic/SeoMetaTags';
import { BrowserStoreProvider } from '@Lib/context/browser-store.context';

function App() {
  return (
    <HelmetProvider>
      <SeoMetaTags title="Home" description="What is the weather like?" url="" />
      <BrowserStoreProvider>
        <div className="w-full flex justify-center items-center min-h-screen dark:bg-300">
          <header></header>
          <main>
            <WeatherPanel />
          </main>
          <footer></footer>
        </div>
      </BrowserStoreProvider>
    </HelmetProvider>
  );
}

export default App;
