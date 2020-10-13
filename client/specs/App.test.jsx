import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App.jsx';

describe('App', () => {
  it('should render my component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });
});
