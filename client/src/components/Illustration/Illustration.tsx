import { ImageNotFound } from "../../styled-components/NotFound.styles.ts";

import React from "react";

interface IllustrationProps {
  image: string;
  alt: string;
}

const Illustration: React.FC<IllustrationProps> = ({ image, alt }) => {
  return <ImageNotFound src={image} alt={alt} />;
};

export default Illustration;
