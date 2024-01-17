export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] bg-white">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-center text-sm font-semibold capitalize text-default-500">
          {" "}
          &copy;{" "}
          <span className="font-black text-primary-500">
            Fajar Fadillah A
          </span>{" "}
          {new Date().getFullYear()} | Hak Cipta Di Lindungi Undang-Undang.
        </p>
      </div>
    </footer>
  );
}
