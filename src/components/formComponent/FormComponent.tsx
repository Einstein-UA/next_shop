'use client'

import { ReactNode } from "react";
import styles from "./formComponent.module.scss";

interface Props {
  inputs: ReactNode;
}

export default function FormComponent({ inputs }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="formWrapper">
      <form>
        {inputs}
        <button onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
  );
}
