import useScript from "./api/html_script";

function App()
{
  const url = 'https://www.socialintents.com/api/socialintents.1.3.js#2c9fab3588226f81018827b31f8a0597';

  useScript(url);

  return (
    <div className="App">
      <h1>Hello</h1>

    </div>
  )
}

export default App;