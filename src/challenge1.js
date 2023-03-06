// import './App.css';

function Head1() {
  return(
      <>
      <h1>I am heading one ... from first component</h1>
      </>
  )
}

function Head2() {
  return(
      <>
      <h2>I am heading two ... from second component</h2>
      </>
  )
}

function Head3() {
  return(
      <>
      <h3>I am heading three ... from thirf component</h3>
      </>
  )
}

function Btn() {
  return(
      <>
      <button>Click Me!!!</button>
      </>
  )
}

function Challenge1() {
  return (
    <>
    <Head1 />
    <Head2 />
    <Head3 />
    <Btn />
    </>
  );
}

export default Challenge1;