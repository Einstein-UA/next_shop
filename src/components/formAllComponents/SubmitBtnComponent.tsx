"use client";

export default function SubmitBtn() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
        <button type="submit" onClick={handleSubmit}>
          <b>SUBMIT</b>
        </button>
  );
}
