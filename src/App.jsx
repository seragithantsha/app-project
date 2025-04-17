/**
 * @copyright 2024 Seragi Thantsha
 * @license Apache-2.0
 */

// Removed unused React import
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 dark:bg-zinc-900">
        <Body />
      </main>
    </>
  );
};

export default App;
