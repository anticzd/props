import "./App.css";
import Parent from "./Components/Parent";
import Layout from "./Components/Layout";

import PropTypesPrimjer from "./Components/ZadnjaKomponenta.jsx";

function App() {
  return (
    <>
      <Layout>
        <Parent />
        <PropTypesPrimjer
          ime="David"
          dob={28}
          spol="M"
          zvanje="bacc.rad.tech"
          adresa="Zadar"
        />
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

// -nastavno na prošli zadatak

// 1. Kreirajte novu komponentu unutar components foldera gdje ćete prikazati 5 propertya
// 2. definirati PropTypes objekt unutar komponente
// 3. definiriati defaultne vrijednosti za barem jedan od propertya
// 4. U App.js prosljediti 5 propertya i prikazati komponentu
// zadatak2.txt
// Prikaz stavke zadatak2.txt.
