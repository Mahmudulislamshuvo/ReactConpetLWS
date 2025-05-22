// eslint-disable-next-line react/prop-types
export default function Form() {
  // visual states: empty, typing, submitting, success, error

  //   mandatory Data state

  //   if (status === "success")
  //     return (
  //       <>
  //         <h1>Thats right!</h1>
  //         <hr />
  //       </>
  //     );

  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form id="form">
        <textarea></textarea>
        <br />
        <button>Submit</button>
        <p>Loading...</p>
        <p className="Error">There was an error</p>
      </form>
      <hr />
    </>
  );
}
