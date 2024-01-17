import Image from "next/image";

export default function Card({ data }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl shadow-medium hover:cursor-pointer">
      <Image
        src={data.strCategoryThumb}
        alt="img"
        width={800}
        height={400}
        className="absolute left-0 top-0 h-auto w-full object-cover object-center transition-all group-hover:scale-110"
      />

      <div className="relative flex h-full w-full items-center justify-center bg-slate-900/50 px-4 py-10 text-[18px] font-extrabold text-white">
        {data.strCategory}
      </div>
    </div>
  );
}
