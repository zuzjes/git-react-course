

let Hello = (props) => {
  // let style = {
  //   backgroundColor: 'red'
  // }
  return <>
    <h1 style={{ backgroundColor: 'red', color: 'green' }}>Hello {props.name}</h1>
    <p>ahoj {props.name}</p>
  </>
}

export default Hello;
