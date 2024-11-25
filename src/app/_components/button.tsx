"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

interface UploadThingButtonProps {
  appearance?: {
    container?: string;
    button?: string;
    allowedContent?: string;
  };
}

export default function UploadThingButton({ appearance }: UploadThingButtonProps) {
  const router = useRouter();
  return (
    <UploadButton
      endpoint="imageUploader"
      appearance={appearance}
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
        router.refresh();
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}

