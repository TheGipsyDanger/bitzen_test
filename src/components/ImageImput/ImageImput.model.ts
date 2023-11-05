import {IImageImput} from '~/components/ImageImput/ImageImput.types';
import {MediaTypeOptions, launchCameraAsync} from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import {Camera} from 'expo-camera';

export const useImageImput = (
  props: IImageImput.IModelProps
): IImageImput.IModel => {
  const [permissions, request] = MediaLibrary.usePermissions();
  const [permissionsCamera, requestCamera] = Camera.useCameraPermissions();

  const onCamera = () => {
    (async () => {
      await launchCameraAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 6],
        quality: 1,
        base64: true,
      });
    })();
  };

  const openCamera = () => {
    if (permissions?.granted === false) {
      return request();
    }

    if (permissionsCamera?.granted === false) {
      return requestCamera();
    }

    onCamera();
  };

  return {
    openCamera,
  };
};
