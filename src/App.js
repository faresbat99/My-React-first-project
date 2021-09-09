import "./Custom.css";
import faker from "faker";
import Cards from "./Cards";
function App() {
  return (
    <div className="App">
      <Cards
        name={`${faker.name.firstName()}  ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      />
      <Cards
        name={`${faker.name.firstName()}  ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      />
      <Cards
        name={`${faker.name.firstName()}  ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
