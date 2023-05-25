"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function Card({ name, image}) {
  const router = useRouter();
  return (
    <div

      className="shrink-0 my-4 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link href="#">
        <Image
          unoptimized
          width={100} height={100}
          className="p-8 rounded-t-lg h-80 w-full object-cover"
          src={image ? image : "/images/placeholder-image.png"}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name ? name : "Untitled"}
          </h5>
        </a>
      </div>
    </div>
  );
}

