import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [userInfo, setUserInfo] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = (event) => {
    setUserInfo(event);
  };
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id=""
              {...register("Username", { required: true })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              id=""
              {...register("email", { required: true })}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
              {...register("Password", { required: true })}
            />
          </div>
          <button className="fliud ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
