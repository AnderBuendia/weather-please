import { Routes, Route } from 'react-router-dom';
import HomePage from '@Pages/home';
import { MainPaths } from '@Enums/paths/main-paths.enum';

function App() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-300">
      <header></header>
      <main>
        <Routes>
          <Route path={MainPaths.HOME} element={<HomePage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
