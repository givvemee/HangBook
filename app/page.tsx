"use client";

import Loading from "@/components/common/loading/index";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/today");
  });

  return (
    <>
      <Loading />
    </>
  );
}
