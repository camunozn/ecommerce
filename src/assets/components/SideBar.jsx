import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  ButtonGroup,
  Col,
  Collapse,
  Container,
  Form,
  Nav,
  Row,
} from 'react-bootstrap';
import { filterProductsByCategoryThunk } from '../../store/slices/products.slice';

const SideBar = () => {
  const categories = useSelector(state => state.categories);
  const [openPriceFilter, setOpenPriceFilter] = useState(true);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(true);

  const dispatch = useDispatch();

  return (
    <div className="side-bar">
      <aside className="">
        <Container>
          <Row>
            <Button
              className="mb-3"
              variant="secondary"
              aria-controls="filter-price-form"
              aria-expanded={openPriceFilter}
              onClick={() => setOpenPriceFilter(!openPriceFilter)}
            >
              Price
            </Button>
            <Collapse in={openPriceFilter}>
              <Form className="mb-4">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPriceFilter"
                >
                  <Form.Label column sm="2">
                    From
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="number" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPriceFilter"
                >
                  <Form.Label column sm="2">
                    To
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="number" />
                  </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Filter price
                </Button>
              </Form>
            </Collapse>
          </Row>
          <Row>
            <Button
              className="mb-3"
              variant="secondary"
              aria-controls="filter-category-nav"
              aria-expanded={openCategoryFilter}
              onClick={() => setOpenCategoryFilter(!openCategoryFilter)}
            >
              Categories
            </Button>
            <Collapse in={openCategoryFilter}>
              <ButtonGroup vertical>
                {categories.map(category => (
                  <Button
                    key={category.id}
                    onClick={() =>
                      dispatch(filterProductsByCategoryThunk(category.id))
                    }
                  >
                    {category.name}
                  </Button>
                ))}
              </ButtonGroup>
            </Collapse>
          </Row>
        </Container>
      </aside>
    </div>
  );
};

export default SideBar;
