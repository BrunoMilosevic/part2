import { useState, useEffect } from "react";
import Search from "./Search";
import Form from "./Form";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFIlter] = useState("");

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3000/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFIlter(event.target.value);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    console.log(event.target.value);
    setNewNum(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    const isDuplicate = persons.some(
      (person) => person.name === newName || person.number === newNum
    );

    if (isDuplicate) {
      alert(`${newName || newNum} is already in the phonebook`);
      setNewName("");
      setNewNum("");
    } else {
      const nameObject = {
        id: persons.length + 1,
        name: newName,
        number: newNum,
      };

      if (newName) {
        setPersons(persons.concat(nameObject));
        setNewName("");
        setNewNum("");
      } else {
        setNewName("");
        setNewNum("");
      }
    }

    console.log(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search filter={filter} handleFilter={handleFilter} />
      <Form
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
        newNum={newNum}
      />

      <h2>Numbers</h2>
      {persons.map((person) => (
        <h3 key={person.id}>
          {person.name.toLowerCase().startsWith(filter.toLowerCase())
            ? `${person.name} : ${person.number}`
            : ""}
        </h3>
      ))}
    </div>
  );
};

export default App;
