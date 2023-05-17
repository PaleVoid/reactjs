import { useState } from "react";
import useScript from "./api/html_script";

function App()
{
  const [ script, setScript ] = useState(null);
  const url = 'https://www.socialintents.com/api/socialintents.1.3.js#2c9fab3588226f81018827b31f8a0597';

  setScript(useScript(url));

  return (
    <div className="App">
      <h1>Hello</h1>

      {script}
    </div>
  )
}

export default App;