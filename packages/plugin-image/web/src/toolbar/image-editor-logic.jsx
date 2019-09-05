import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageEditorLogic extends Component {
  componentDidMount() {
    const { mediaImageStudio, fileName, helpers, mediaImageStudioEvents, pubsub } = this.props;

    const imageDataSubscription = mediaImageStudio.once(
      mediaImageStudioEvents.ImageData,
      imageData => {
        const files = [this.blobToFile(imageData, fileName)];
        pubsub.getBlockHandler('handleFilesSelected')(files);
        helpers.closeModal();
      }
    );

    mediaImageStudio.once(mediaImageStudioEvents.Close, () => {
      imageDataSubscription.remove();
      helpers.closeModal();
    });

    mediaImageStudio.show({
      fileId: fileName,
    });
  }

  blobToFile = (theBlob, fileName) => {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  };

  componentWillUnmount() {
    this.props.mediaImageStudio.kill();
  }

  render() {
    return null;
  }
}

ImageEditorLogic.propTypes = {
  mediaImageStudio: PropTypes.object.isRequired,
  mediaImageStudioEvents: PropTypes.object.isRequired,
  fileName: PropTypes.string.isRequired,
  helpers: PropTypes.object.isRequired,
  pubsub: PropTypes.any,
};

export default ImageEditorLogic;
