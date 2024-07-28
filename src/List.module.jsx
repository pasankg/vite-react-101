import propTypes from "prop-types";

function ListModule(props) {
  const list = props.items.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <>
      <h1>{props.category}</h1>
      {list}
    </>
  );
}

ListModule.defaultProps = {
  items: [{ id: 0, name: "", calories: 0 }],
  category: "",
};

ListModule.propTypes = {
  items: propTypes.array,
  category: propTypes.string,
};

export default ListModule;
