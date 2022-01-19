import React from "react";
import { Form, Button } from "react-bootstrap";
const ServiceTypeModal = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Select aria-label="Service Type *" required>
          <option>Select</option>
          <option value="A">Service A</option>
          <option value="B">Service B</option>
          <option value="C">Service C</option>
          <option value="D">Service D</option>
          <option value="E">Service E</option>
        </Form.Select>
        <Form.Control type="text" placeholder="Service Example *" />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Service
      </Button>
    </Form>
  );
};

export default ServiceTypeModal;
