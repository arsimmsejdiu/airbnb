import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section>
      <div className="relative h-100 min-w-[300px]">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
      </div>
    </section>
  );
}

export default LargeCard;
