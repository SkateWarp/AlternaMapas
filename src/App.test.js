import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
// import Select from "react-select";


test('renders learn react link', () => {
  // render(<App />);
  <App />
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
