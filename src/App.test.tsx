import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link By Role', () => {
  render(<App />);
  const linkElement = screen.getByRole('link',{name:/learn react/i});
  expect(linkElement).toBeInTheDocument();
});

test('button has correct initial color',()=>{
  render(<App />);
  const colorButton=screen.getByRole('button',{name:/Change to blue/i});
  expect(colorButton).toHaveStyle({backgroundColor:'red'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  expect(colorButton.textContent).toMatch(/Change to red/i);
});
test('button turns blue when cliced',()=>{});

