import Image from "next/image";

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const ImageContainer = ({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
}: ImageContainerProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
};
