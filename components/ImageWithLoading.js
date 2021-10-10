import { Box, Image, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function ImageWithLoading(properties) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box textAlign="center">
      {!imageLoaded && <Spinner color="gray" size="xl" />}
      <Image
        visibility={imageLoaded ? 'visible' : 'hidden'}
        {...properties}
        alt={properties.alt || 'unknown alt'}
        onLoad={() => setImageLoaded(true)}
      />
    </Box>
  );
}
