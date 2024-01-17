import Link from "next/link";
import Image from "next/image";

export default function Card({ image, text, path }) {
  return (
    <Link
      href={`${path}`}
      className="group relative overflow-hidden rounded-xl shadow-medium hover:cursor-pointer lg:max-w-[335px]"
    >
      <Image
        src={image}
        alt={`${text} Image`}
        width={800}
        height={400}
        className="absolute left-0 top-0 h-auto w-full object-cover object-center transition-all group-hover:scale-110"
      />

      <div className="relative flex h-full w-full items-center justify-center bg-slate-900/50 px-6 py-10 text-center text-[18px] font-extrabold capitalize leading-[115%] text-white transition-all hover:bg-green-600/50">
        {text}
      </div>
    </Link>
  );
}
