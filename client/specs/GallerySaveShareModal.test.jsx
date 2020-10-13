import React from 'react';
import { shallow } from 'enzyme';
import GallerySaveShareModal from '../src/components/subcomponents/GallerySaveShareModal.jsx';

describe('GalleryOverviewItems', () => {
  it('should render my component', () => {
    const wrapper = shallow(<GallerySaveShareModal />);
    expect(wrapper).toBeDefined();
  });
});
