import React from 'react';
import { shallow } from 'enzyme';
import GalleryTitleBar from '../src/components/subcomponents/GalleryTitleBar.jsx';

describe('GalleryOverviewItems', () => {
  it('should render my component', () => {
    const wrapper = shallow(<GalleryTitleBar />);
    expect(wrapper).toBeDefined();
  });
});
