import { useState } from "react";
import Search from "./Search";
import Form from "./Form";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", num: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFIlter] = useState("");

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
      (person) => person.name === newName || person.num === newNum
    );

    if (isDuplicate) {
      alert(`${newName || newNum} is already in the phonebook`);
      setNewName("");
      setNewNum("");
    } else {
      const nameObject = {
        name: newName,
        num: newNum,
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
        <h3 key={person.name}>
          {person.name.toLowerCase().startsWith(filter.toLowerCase())
            ? `${person.name} : ${person.num}`
            : ""}
        </h3>
      ))}
    </div>
  );
};

export default App;
