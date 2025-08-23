'use client';
import { PencilIcon, CheckIcon } from '@heroicons/react/24/solid';
import { startTransition, useOptimistic, useRef, useState } from 'react';
export default function EditableField({ content, title, updateFn, email }) {
  const input = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [optValue, setOptValue] = useOptimistic(
    content,
    (prevState, newValue) => updateFn(newValue, email)
  );

  async function handleEnable() {
    if (isEditing) {
      const newValue = input.current.value;

      if (newValue !== optValue) {
        startTransition(() => setOptValue(newValue));
      }
    }
    setIsEditing((prevState) => !prevState);
  }

  return (
    <li
      className={`flex items-center group ${
        !isEditing ? '' : 'outline-2 outline-white animate-pulse'
      } rounded-sm p-1 gap-1`}
    >
      <span className="font-bold text-blue-400 whitespace-nowrap">
        {title}:
      </span>
      <div className="flex justify-between items-center">
        <input
          ref={input}
          type="text"
          disabled={!isEditing}
          defaultValue={optValue}
          placeholder={title}
          title={title}
          className="focus:outline-none"
        />
        <button
          onClick={handleEnable}
          className={`hover:cursor-pointer ${
            !isEditing ? 'invisible group-hover:visible' : ''
          }`}
          role="button"
        >
          {!isEditing ? (
            <PencilIcon className="size-6" />
          ) : (
            <CheckIcon className="size-6 font-bold" />
          )}
        </button>
      </div>
      {/* {fieldState.isInput && <input type="text" disabled={}/>}
      {!fieldState.isInput && <p>{</p>} */}
    </li>
  );
}
