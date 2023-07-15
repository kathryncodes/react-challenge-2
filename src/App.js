import "./styles.css";
import { useEffect, useRef, useState } from "react";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [newCity, setNewCity] = useState("");
  const [cities, setCities] = useState([]);

  const addNewCity = (e) => {
    e.preventDefault();
    cities.push(newCity);
    setCities(cities);
    setNewCity("");
  };

  return (
    <div className="App">
      <h1>Cities to Visit</h1>
      <form>
        <input
          type="text"
          name="newCity"
          placeholder="Enter a City"
          id="newCity"
          onChange={(e) => setNewCity(e.target.value)}
          value={newCity}
        />
        <button type="submit" onClick={addNewCity}>
          Add City
        </button>
      </form>
      <ul>
        {cities.map((city) => (
          <TodoItem
            name={city}
            key={city}
            cities={cities}
            setCities={setCities}
          />
        ))}
      </ul>
    </div>
  );
}

const TodoItem = (props) => {
  const setCities = props.setCities;
  const city = props.name;
  const listOfCities = props.cities;

  const removeCity = () => {
    console.log(listOfCities);
    console.log(city);
    var index = listOfCities.indexOf(city);
    var before = listOfCities.slice(0, index);
    var after = listOfCities.slice(index + 1);
    const newList = [...before, ...after];
    console.log(`new list: ${newList}`);
    setCities((cities) => newList);
  };

  return (
    <>
      <li>
        {city}
        <button onClick={removeCity}>Remove</button>
      </li>
    </>
  );
};
