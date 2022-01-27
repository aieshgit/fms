import React from "react";
import { Form, Button } from "react-bootstrap";
const ServiceTypeModal = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Select aria-label="Service Type *" required>
          <option>Select</option>
          <option value="A">A Service</option>
          <option value="B">B Service</option>
          <option value="C">C Service</option>
          <option value="D">D Service</option>
          <option value="E">E Service</option>
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
