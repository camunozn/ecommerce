import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Container fluid>
        <Form className="d-flex mb-3">
          <Form.Control
            type="search"
            placeholder="Search products"
            size="sm"
            className="me-2"
            aria-label="Search"
          />
          <Button size="sm" variant="outline-primary">
            Search
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SearchBar;
