// SearchBar.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="mx-2 my-2"
        aria-label="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;
