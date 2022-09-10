import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import { execPath } from 'process';

import {replaceCamleWithSpaces} from './App';

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

test('initial conditions',()=>{
  render(<App />);
  const btn= screen.getByRole('button',{name:/Change to blue/i});
  expect(btn).toBeEnabled();
  const ch= screen.getByRole('checkbox', {name: /Disable button/i});
  expect(ch).not.toBeChecked();

  fireEvent.click(ch);
  expect(btn).toBeDisabled();

  fireEvent.click(ch);
  expect(btn).toBeEnabled();
});

describe('Space before camel-case capital letter',()=>{

test('Works for no inner capital letter',()=>{
  expect(replaceCamleWithSpaces('Red')).toBe('Red');
});
test('works for on inner capital letter',()=>{
  expect(replaceCamleWithSpaces('RedExtra')).toBe('Red Extra');

});
test('works for multiple inner capital letter',()=>{
  expect(replaceCamleWithSpaces('RedMinExtra')).toBe('Red Min Extra');

});

});

