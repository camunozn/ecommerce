import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../../store/slices/products.slice';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import ProductsList from '../components/ProductsList';
import { Col, Row, Container } from 'react-bootstrap';
import { getCategoriesThunk } from '../../store/slices/categories.slice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
  }, []);

  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col>
            <SideBar />
          </Col>
          <Col xs={6} md={9}>
            <SearchBar />
            <ProductsList rows={3} gap={4} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
