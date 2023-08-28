"use client";

import { useState } from 'react';

export function useToggle(initialValue: any) {
  const [data, setData] = useState(initialValue);
  return [data, setData] as const;
}