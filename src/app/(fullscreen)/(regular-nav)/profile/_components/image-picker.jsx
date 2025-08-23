'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa6';
export default function ImagePicker({ src, email }) {
  const [pfpUrl, setPfpUrl] = useState(src);
  const [isLoading, setIsLoading] = useState(false);
  const input = useRef();

  function handleShowPicker() {
    input.current.showPicker();
  }

  async function handleChange(e) {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    const fd = new FormData();
    fd.append('file', file);
    fd.append('email', email);
    setIsLoading(true);
    const response = await fetch('/api/files', {
      method: 'POST',
      body: fd,
    });

    const { url } = await response.json();
    setPfpUrl(url);
    setIsLoading(false);
  }

  return (
    <>
      <input
        ref={input}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept=".jpeg, .jpg"
      />
      <button
        className="relative hover:cursor-pointer w-full h-full rounded-full border-2 border-white flex justify-center items-center overflow-hidden "
        onClick={handleShowPicker}
      >
        {isLoading && (
          <div className="loader absolute top-1/2 left-1/2 -translate-1/2" />
        )}
        {pfpUrl && (
          <Image
            src={pfpUrl}
            alt="profile picture"
            width={128}
            height={128}
            className="transition-all hover:scale-125"
            priority
          />
        )}
        {!pfpUrl && <FaUser className="size-10" />}
      </button>
    </>
  );
}
