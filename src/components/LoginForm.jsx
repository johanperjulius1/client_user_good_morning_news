import React, { useState } from "react";
import { Button, Form, Container, Message } from "semantic-ui-react";
import { auth } from "../modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const login = async (event, dispatch, history) => {
    event.preventDefault();
    try {
      const email = event.target.email.value;
      const password = event.target.password.value;

      const response = await auth.signIn(email, password);
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          authenticated: response.success,
          currentUser: response.data,
        },
      });

      history.replace({ pathname: "/" });
    } catch (error) {
      setMessage(error.response.data.errors[0]);
    }
  };

  return (
    <Container>
      <Form
        data-cy="login-form"
        onSubmit={(event) => login(event, dispatch, history)}
      >
        <Form.Input
          icon="user"
          iconPosition="left"
          label="Email:"
          placeholder="email"
          name="email"
          type="email"
          id="email"
          data-cy="email"
        />

        <Form.Input
          icon="lock"
          iconPosition="left"
          placeholder="password"
          label="Password:"
          type="password"
          name="password"
          id="password"
          data-cy="password"
        />
        <Button data-cy="submit" id="Submit" content="Submit" primary />
      </Form>
      {message && (
        <Message negative data-cy="message">
          <Message.Header>{message}</Message.Header>
        </Message>
      )}
    </Container>
  );
};

export default LoginForm;
