import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>ReactJS Form with Validation and layout</h1>
      <div class="row g-3">
        <div class="col">
          <label className="form-label">first name</label>
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            required
          ></input>
        </div>
        <div class="col">
          <label className="form-label">last name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
            required
          ></input>
        </div>
      </div>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="votre e-mail"
            id="inputEmail4"
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            required
          ></input>
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            required
          ></input>
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity"></input>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>algerie</option>
            <option>italia</option>
            <option>epagne</option>
            <option>turquia</option>
            <option>tunisia</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            required
          ></input>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              required
            ></input>
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" id="button" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
  
}

export default App;
