import React from 'react';
import DocumentScanner from '../Component/DocumentScanner';
import NavigationAction from '../Helper/NavigationAction';

export default class Scanner extends React.PureComponent {
  onPictureProcessed = ({croppedImage, initialImage}) => {
    NavigationAction.openPage(this.props.navigation, 'ViewResult', {
      croppedImage,
      initialImage,
    });
  };

  render() {
    return (
      <DocumentScanner
        onPictureProcessed={this.onPictureProcessed}
        hideSkip={true}
      />
    );
  }
}
