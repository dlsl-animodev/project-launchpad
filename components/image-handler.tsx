import Image, { ImageProps } from "next/image";
import NOIMAGEFALLBACK from "@/public/no-image-fallback.jpg";

interface ImageHandlerProps extends Omit<ImageProps, "src" | "alt"> {
    src?: ImageProps["src"];
    alt?: string;
}

const ImageHandler: React.FC<ImageHandlerProps> = ({ src, alt, ...props }) => {
    return (
        <Image
            {...props}
            src={src || NOIMAGEFALLBACK}
            alt={alt || "no-alt-fallback"}
            className={`${props.className} border-retro border-black object-cover`}
        />
    );
};

export default ImageHandler;
