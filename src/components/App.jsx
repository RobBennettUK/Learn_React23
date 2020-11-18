import React from "react";

function App(props) {
  const now = new Date().toLocaleTimeString();
  const [time, refeshTime] = React.useState(now);

  function latestTime() {
    let updateTime = new Date().toLocaleTimeString();
    refeshTime(updateTime);
  }
  setInterval(latestTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={latestTime}>Get Time</button>
    </div>
  );
}

export default App;
