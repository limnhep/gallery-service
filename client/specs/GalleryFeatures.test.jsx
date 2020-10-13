import React from 'react';
import { shallow } from 'enzyme';
import GalleryFeatures from '../src/components/GalleryFeatures.jsx';

describe('GalleryFeatures', () => {
  it('should render my component', () => {
    const wrapper = shallow(<GalleryFeatures />);
    expect(wrapper).toBeDefined();
  });
});
