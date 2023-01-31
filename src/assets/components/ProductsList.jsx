import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProductsList = () => {
  const products = useSelector(state => state.products);

  return (
    <div className="products-list">
      <Row xs={2} md={4} className="g-3">
        {products.map(product => (
          <Col key={product.id}>
            <Card className="h-100">
              <Card.Header className="bg-transparent h-50">
                <Card.Img
                  className="mh-100 mw-100 p-3"
                  src={product.images[0].url}
                />
              </Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-1">{product.brand}</Card.Subtitle>
                <Card.Title className="fs-6 mb-4">{product.title}</Card.Title>
                <Card.Subtitle className="mb-1">Price</Card.Subtitle>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;
