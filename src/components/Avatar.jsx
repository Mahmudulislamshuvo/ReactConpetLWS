function Item({ name, isPacked }) {
  let ItemContent = "";
  if (isPacked) {
    ItemContent = <span>{name + " ok"}</span>;
  } else {
    ItemContent = <span>{name}</span>;
  }
  return <li className="item">{ItemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
