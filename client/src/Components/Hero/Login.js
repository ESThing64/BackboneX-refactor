import './Hero.css';
import React, { useState, useRef, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Signup from './Signup';
import loginApi from '../../utils/httpRoutes';
import auth from "../../utils/auth"
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();


function Login() {
  const emailInput = useRef()
  const passwordInput = useRef()
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false);
  
  
  const handleClose = () => {
    setShow(false)
    console.log("email", email)
    console.log("password", password)
    loginApi.login(email, password).then((res) => {
      auth.login(res.data.token,res.data.UsersData.email);
    })
  }
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("email", email)
    console.log("password", password)

    name === 'email' && setEmail(value)
    name === 'password' && setPassword(value)

  }
  const onSubmit = data => {
    handleClose()  
    console.log('heyyyy', data)}
  
  console.log(watch("email", 'password'));
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
              ref={emailInput}
              defaultValue="test" {...register("email")}
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" {...register("password")}
              defaultValue="test"
                ref={passwordInput}
                onChange={handleChange}
                // type="password"
                // id="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div> {errors.email && "email is required"}</div>

          <Button type="submit" variant="primary">
            Login
          </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default Login;