// A backdrop function to add a background to the modal

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick} />;
}

export default Backdrop;
