"use client";

import  { useFormContext } from '@/context/formContext'

export default function SubmitBtn() {

    const { setSubmitted } = useFormContext()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true)
  };

  return (
        <button type="submit" onClick={handleSubmit}>
          <b>SUBMIT</b>
        </button>
  );
}
