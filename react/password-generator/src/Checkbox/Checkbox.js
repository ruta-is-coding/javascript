const Checkbox = (props) => {
  return (
    <div className="d-flex align-items-center">
      <label className="form-check-label d-flex gap-2">
        <input type="checkbox" className="form-check-input"></input>
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
