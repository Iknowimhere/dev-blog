import { IKImage } from 'imagekitio-react';

const Image = ({ src, alt, w, h, className }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      alt={alt}
      className={className}
      width={w}
      height={h}
      loading='lazy'
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
