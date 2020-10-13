import React from 'react';
import { shallow } from 'enzyme';
import GalleryMain from '../src/components/GalleryMain.jsx';

describe('GalleryMain', () => {
  it('should render my component', () => {
    const wrapper = shallow(<GalleryMain />);
    expect(wrapper).toBeDefined();
  });
});
