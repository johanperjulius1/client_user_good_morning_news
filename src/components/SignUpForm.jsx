import React, { useState } from "react";
import { Button, Form, Container, Message } from "semantic-ui-react";

const SignUpForm = () => {
  const [message, setMessage] = useState();


  return (
    <Container>
      <Form
        data-cy="sign-up-form"
      >
        <Form.Input
          icon="name"
          iconPosition="left"
          label="Name:"
          placeholder="name"
          name="name"
          type="name"
          id="name"
          data-cy="name"
        />
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
        <Form.Input
          icon="lock"
          iconPosition="left"
          placeholder="password-confirmation"
          label="Password confirmation:"
          type="password"
          name="password-confirmation"
          id="password-confirmation"
          data-cy="password-confirmation"
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

export default SignUpForm;