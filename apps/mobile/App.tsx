import { TailwindProvider } from "tailwind-rn";

import utilities from "./tailwind.json";

const App = () => {
  return <TailwindProvider utilities={utilities}></TailwindProvider>;
};

export default App;
