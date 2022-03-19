import './Hero.css';
import React, { useState, useRef, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Signup from './Signup';
import loginApi from '../../utils/httpRoutes';
import auth from "../../utils/auth"
import { useForm } from "react-hook-form";


function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const emailInput = useRef()
  // const passwordInput = useRef()
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);
  
  
  
  // const handleClose = () => {
  //   setShow(false)
    
  //   loginApi.login(emailInput.current.value, passwordInput.current.value).then((res) => {
  //     auth.login(res.data.token,res.data.UsersData.email);
  //   })
  // }
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="/users/login" method="POST">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
              // ref={emailInput}
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                register={register} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
              // ref={passwordInput}
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" >
            Login
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default Login
