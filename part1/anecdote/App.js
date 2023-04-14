import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);

  const x = Math.floor(Math.random() * 7);
  const arr = [0, 0, 0, 0, 0, 0, 0, 0];
  const copy = [0];
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleClick = () => {
    const x = Math.floor(Math.random() * 6);
    setSelected(x);
  };

  const Button = (props) => {
    return (
      <div>
        <button onClick={props.clickFunction}>{props.text}</button>
      </div>
    );
  };

  const handleVote = () => {
    const copy = [...arr];
    copy[selected] += 1;
    return copy;
  };

  const newArr = handleVote();
  console.log(newArr);
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {arr[selected]} votes</p>
      <Button clickFunction={handleClick} text={"next anecdote"} />
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default App;
