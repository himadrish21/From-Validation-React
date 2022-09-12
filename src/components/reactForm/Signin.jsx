import React from "react";
import { useForm } from "react-hook-form";
import "./signup.css";
import UsePasswordToggle from "../hooks/UsePasswordToggle";
import { useState } from "react";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [passwordToggle, passwordIcons] = UsePasswordToggle();

  let [details,setDetails]=useState();

  let fetchData = (data) => {
    console.log(data);
    setDetails(data)
  };
  console.log(errors);
  console.log(details);
  return (
    <div>
      <form className="login-forms" onSubmit={handleSubmit(fetchData)}>
      <h1>LOGIN</h1>
      <h4>Please enter your name,e-mail and password</h4>
      <input
        type="text"
        placeholder="Username"
        {...register("Username", {
          required: { value: true, message: "Username is required" },
          minLength: {
            value: 2,
            message: "name must contain more than 6 character",
          },
          maxLength: {
            value: 20,
            message: "name should be between 6 to 20 character",
          },
          pattern: {
            value:
              /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/,
            message: "Username should have only letters and no space",
          },
        })} //register accepts 2 argument name of the string and the object
      />
      <span className="err-message">{errors.Username?.message}</span>
      <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "email is required" },
            pattern: {
              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              message: "example.samplemail@gmail.com",
            },
          })} //register accepts 2 argument name of the string and the object
        />
        <span className="err-message">{errors.email?.message}</span>
        <div className="password-container">
        <input
        type={passwordToggle}
        placeholder="password"
        {...register("password", {
          required: {
            value: true,
            message: "password is required please enter",
          },
          pattern: {
            value:
              /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
            message:
              "passwoed must be one uppercase one lovercase one number one specialcharater example:Example1234$",
          },
        })}
      />
      <div id="eye-icon">{passwordIcons}</div>

        </div>
      
      <span className="err-message">{errors.password?.message}</span>
      {/* <button type="submit">login</button> */}
      <button className="button-24" type="submit" role="button">Login</button>
    </form>
    <div className="user-details">
    <h3>{details?.Username}</h3>
    <h3>{details?.email}</h3>
    <h3>{details?.password}</h3>
    </div>
    </div>
  );
}

export default Signin;
