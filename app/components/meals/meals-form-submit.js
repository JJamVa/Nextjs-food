"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return <button>{pending ? "전송중..." : "음식 공유"}</button>;
}
