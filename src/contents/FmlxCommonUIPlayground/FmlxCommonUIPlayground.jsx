import React from 'react';
import {FmlxIcon, FmlxPanel, FmlxColorPicker} from 'fmlx-common-ui';
import './FmlxCommonUIPlayground.scss';

const FmlxCommonUIPlayground = () => {
  return (
    <FmlxColorPicker
      title={'Panel'}
      icon={<FmlxIcon name="Users" />}
      openOverlayPanel={false}
      overlay={false}
      theme={FmlxPanel.Theme.DARK}
      placement={FmlxPanel.Placement.LEFT}
      size={FmlxPanel.Size.SMALL}
    >
      <div>Content</div>
    </FmlxPanel>
  );
};

FmlxCommonUIPlayground.propTypes = {};

FmlxCommonUIPlayground.defaultProps = {};

export default FmlxCommonUIPlayground;
