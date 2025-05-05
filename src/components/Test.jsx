export default function Test() {
  const style1 = {
    backgroundColor: "red",
  };
  const style2 = {
    backgroundColor: "green",
  };
  const color = "green";
  let style = "";

  if (color === "green") {
    style = style2;
  } else {
    style = style1;
  }
  return (
    <>
      <h1>Hedy Lamarrs Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li style={style}>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
