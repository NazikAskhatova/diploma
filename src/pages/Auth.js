import React from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header/Header";
import { start } from "../redux/authSlice";

export default function Auth() {
  const dispatch = useDispatch();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(start({
      email: formData.get('email'),
      password: formData.get('password'),
      method: 'signup'
    }));
  }

  return (
    <form onSubmit={onAuthStart}>
        <Header></Header>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button>Sign in</button>
      <button>Sign up</button>
    </form>
  );
}