import React from 'react';
import { shallow } from 'enzyme';
import GalleryOverviewItems from '../src/components/subcomponents/GalleryOverviewItems.jsx';

describe('GalleryOverviewItems', () => {
  it('should render my component', () => {
    const wrapper = shallow(<GalleryOverviewItems />);
    expect(wrapper).toBeDefined();
  });
});
