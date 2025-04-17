/**
 * @copyright 2024 Seragi Thantsha
 * @license Apache-2.0
 */

/*
function App() {
return (
<h1 class="text-3xl bg-red-700 font-bold underline">
React 19 with Tailwind CSS v4
</h1>
) 
}
*/


/**
 * 
 * Components
 */
import Header from "./components/Header";
import Body from "./components/Body";



const App = ()  => {

  return (
  <>
    <Header className=""/>
    <main className="bg-gray-100 dark:bg-zinc-900">
      <Body className="bg-gray-100 dark:bg-zinc-900"/>
    </main>
  </>
)
}

export default App;
