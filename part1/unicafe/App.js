import { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>give feedback </h1>
    </div>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = (props) => {
  return (
    <div>
      <p>
        {" "}
        {props.text}: {props.stat}{" "}
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const Statistics = (props) => {
    return (
      <div>
        <tr>
          <td>
            {" "}
            {props.text}: {props.stat}{" "}
          </td>
        </tr>
      </div>
    );
  };

  const Total = ({ all, good, neutral, bad, average, positive }) => {
    if (all === 0) {
      return (
        <div>
          <p>No feedback given</p>
        </div>
      );
    }
    return (
      <div>
        <Statistics all={all} text={"Good"} stat={good} />
        <Statistics all={all} text={"Neutral"} stat={neutral} />
        <Statistics all={all} text={"Bad"} stat={bad} />

        <Statistics all={all} text={"All"} stat={all} />
        <Statistics all={all} text={"Average"} stat={average} />
        <Statistics all={all} text={"Positive"} stat={positive} />
      </div>
    );
  };
  return (
    <div>
      <Header />
      <Button handleClick={handleGood} text={"good"} />
      <Button handleClick={handleNeutral} text={"Neutral"} />
      <Button handleClick={handleBad} text={"bad"} />

      <h2>statistics</h2>

      <Total
        all={all}
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
