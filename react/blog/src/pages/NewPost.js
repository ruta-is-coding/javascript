const NewPost = () => {
  const handleform = (e) => {
    e.preventDefault();
    //Visi formos duomenys išsaugomi objekte
    const data = new FormData(e.target);
    //iš formData ištraukiamos visos reikšmės ir sudedamos į objektą
    const body = {};
    for (const el of data.entries()) {
      body[el[0]] = el[1];
    }
    //Formos duomenų išsiuntimas
    fetch("http://localhost:3000/posts", {
      method: "POST",
      //informacija priimame tik šiuo būdu
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body), //prie body key nurodome kokią informaciją norime persiųsti
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  };
  return (
    <>
      <h2>New Post</h2>
      <form onSubmit={handleform}>
        <div className="mb-3">
          <label>Title:</label>
          <input type="text" name="title" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Author:</label>
          <input type="text" name="author" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Category:</label>
          <input type="text" name="category" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Image:</label>
          <input type="text" name="image" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Text content:</label>
          <textarea name="content" className="form-control"></textarea>
        </div>
        <div className="mb-3">
          <label>Excerpt:</label>
          <textarea name="excerpt" className="form-control"></textarea>
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </>
  );
};

export default NewPost;
