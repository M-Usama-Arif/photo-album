"use client";

import Image from 'next/image';
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';


export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {

  const [imageId, setImageId] = useState("abo5tkzee3vukdwczihu")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result) => {
          let res = result as UploadResult
          setImageId(res.info.public_id);
        }}
        uploadPreset="p3i5wzfl"
      />
      {imageId &&
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      }
    </main>
  )
}
