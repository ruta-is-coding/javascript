import { useState } from "react";

const ToDo = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState({
    index: false,
    active: false,
  });

  return (
    <div className="container mt-5 to-do">
      <h1 className="my-3">To Do list</h1>
      {/* ToDo Listo forma */}
      <form
        className="input-group mb-5 "
        onSubmit={(e) => {
          e.preventDefault();
          //console.log(value);
          //Paimame visas prieš tai buvusias reikšmes iš list masyvo ir įdedame į naują masyvą.
          //Pabaigoje įrašome naują reikšmę į masyvą
          //Reikšmes išsaugome su setList funkcija
          if (edit.active) {
            //Redagavimas
            list[edit.index].value = value;
            setList(list);
            setEdit({
              active: false,
            });
          } else {
            //Naujo pridėjimas
            setList([...list, { value, done: false }]);
          }

          setValue("");
        }}
      >
        <input
          type="text"
          placeholder="Įveskite užduotį"
          className="form-control"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="btn btn-primary inputBtn">
          {edit.active ? "Save" : "Add"}
        </button>
      </form>
      {list.map((data, index) => (
        <li className="d-flex justify-content-between my-2" key={index}>
          <span
            style={{ textDecoration: data.done ? "line-through" : "none" }}
            onClick={() => {
              list[index].done = true;
              setList([...list]);
            }}
          >
            {data.value}
          </span>
          <div className="d-flex gap-2">
            {/* Editing */}
            <button
              className="btn btn-warning"
              style={{ width: "70px" }}
              onClick={() => {
                // nusetinamas editValue masyvas
                setValue(data.value);
                setEdit({
                  index,
                  active: true,
                });
                //console.log(editValue, edit);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              style={{ width: "70px" }}
              onClick={() => {
                list.splice(index, 1);
                setList([...list]);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ToDo;
