function Student(props) {
  console.log(props.name);
  return (
    <div style={{ backgroundColor: 'skyblue', margin: 20 }}>
      <h1> Hello {props.name} </h1>
      <h2>Contact me at {props.email}</h2>
      <p>I live in {props.other.address}</p>
      <p>Feel free to call my personal number {props.other.mobile}</p>
    </div>
  );
}

export default Student;
