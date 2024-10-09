import type {StoreProductImage, StoreProductType} from "@medusajs/types";

import Tag from "@/components/shared/tag";
import Image from "next/image";

export default function ProductImages({
  images,
  type,
}: {
  images: StoreProductImage[] | null;
  type?: StoreProductType | null;
}) {
  return (
    <>
      <div className="sticky top-xl hidden flex-row gap-xs lg:flex">
        <div className="flex w-[85px] flex-col gap-xs">
          {images?.map((image) => (
            <div className="aspect-square" key={image.id}>
              <img
                alt="Cookie images"
                className="aspect-square w-[85px] rounded-lg"
                height={85}
                src={image.url}
                width={85}
              />
            </div>
          ))}
        </div>
        <div className="relative aspect-square w-full min-w-[400px] max-w-[591px] rounded-lg">
          {images?.[0].url && (
            <Image
              alt="Cookie"
              className="rounded-lg"
              height={591}
              src={images?.[0].url}
              width={591}
            />
          )}
          {type?.value && (
            <Tag className="absolute right-4 top-4" text={type.value} />
          )}
        </div>
      </div>
      <div className="scrollbar-hide flex w-screen gap-xs overflow-x-scroll px-m lg:hidden">
        {images?.map((image) => (
          <div className="relative aspect-square h-[380px]" key={image.id}>
            <Image
              alt="Cookie"
              className="h-[380px] rounded-lg"
              height={380}
              src={image.url}
              width={380}
            />
            {type?.value && (
              <Tag className="absolute right-5 top-3" text={type.value} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
