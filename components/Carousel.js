import '@brainhubeu/react-carousel/lib/style.css';

import dynamic from 'next/dynamic';

const DynamicCarousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

export default DynamicCarousel;
