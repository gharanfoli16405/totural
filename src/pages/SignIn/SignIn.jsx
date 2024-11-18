import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const SignIn = () => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { user, password } = formData;
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2" lg="1">
            user
          </Form.Label>
          <Col sm="10" lg="6">
            <Form.Control
              name="user"
              value={user}
              onChange={handleChange}
              size="sm"
              type="text"
              placeholder="Enter your user"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2" lg="1">
            Password
          </Form.Label>
          <Col sm="10" lg="6">
            <Form.Control
              name="password"
              value={password}
              onChange={handleChange}
              size="sm"
              type="password"
              placeholder="Password"
            />
          </Col>
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
};

export default SignIn;
