import React from 'react';
import { shallow } from 'enzyme';
import GalleryModal from '../src/components/GalleryModal.jsx';

describe('GalleryModal', () => {
  it('should render my component', () => {
    const wrapper = shallow(<GalleryModal />);
    expect(wrapper).toBeDefined();
  });
});
