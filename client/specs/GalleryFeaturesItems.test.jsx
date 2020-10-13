import React from 'react';
import { shallow } from 'enzyme';
import GalleryFeaturesItems from '../src/components/subcomponents/GalleryFeaturesItems.jsx';

describe('GalleryFeaturesItems', () => {
  it('should render my component', () => {
    const wrapper = shallow(<GalleryFeaturesItems />);
    expect(wrapper).toBeDefined();
  });
});
