'use client'

import { useEffect } from "react";

const { formHook } = require("lab1/hooks/use-form-hook");

export default function Form () {
    const initialValues = {
        nombres: 'steven',
        apellidos: 'forero',
        email: 'steven@hotmail.com',
        username: 'steven-user',
        password: 'steven-pwd-8549'
    }

    const {value: valueFirstName, bind: bindFirstname, reset: resetFirstname} = formHook(initialValues.nombres);
    const {value: valueLastName, bind: bindLastName, reset: resetLastName} = formHook(initialValues.apellidos);
    const {value: valueEmail, bind: bindEmail, reset: resetEmail} = formHook(initialValues.email);
    const {value: valueUsername, bind: bindUsername, reset: resetUsername} = formHook(initialValues.username);
    const {value: valuePassword, bind: bindPassword, reset: resetPassword} = formHook(initialValues.password);

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Formulario enviado');
    };

    let currentValues = {
      firstName: valueFirstName,
      lastName: valueLastName,
      email: valueEmail,
      username: valueUsername,
      password: valuePassword
    }
    
    /*useEffect(() => {
      localStorage.setItem('password', JSON.stringify(valuePassword));
    }, [valuePassword]);*/

    useEffect(() => {
      localStorage.setItem('formData', JSON.stringify(currentValues));
    }, [currentValues]);

    return(
        <form onSubmit={handleSubmit}>
      <div>
        <label>Nombres:</label>
        <input
          type="text"
          name="nombres"
          {...bindFirstname}
        />
      </div>
      <div>
        <label>Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          {...bindLastName}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          {...bindEmail}
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          {...bindUsername}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          {...bindPassword}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
      );
}