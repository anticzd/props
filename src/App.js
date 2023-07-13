import "./App.css";
import Parent from "./Components/Parent";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Parent />
      </Layout>
    </>
  );
}

export default App;

// zadatak1.txt
// 1. kreirati novu React aplikaciju
// 2. Kreirati folder components
// 3. Kreirati 3 nove komponente: 2 funkcionalne i 1 class komponentu.
// - Prva funkcionalna komponenta je parent komponenta drugoj funkcionalnoj komponenti i class komponenti
// 4. Unutar Parent funkcionalne komponente definirati 3 propertya: ime, dob, grad. Ime i dob prosljediti funkcionalnoj
// komponenti kao props, a grad proslijediti class komponenti
// 5. Kreirati Layout componentu. Unutar nje definirati najmanje 2 stila i ona ima children objekt.

// Sve komponente prikazati u App.js. App.js će biti parent Layoutu, a ostale komponente će biti unutar layouta
