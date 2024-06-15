import Nav from "../Nav";
import Logo from "../logo";

export default function Headerr() {
  return (
    <div>
      <header className="bg-neutral-950 sticky top-0 z-[20] mx-auto flex flex-wrap  w-full items-center justify-between border-gray-500 p-[0.25px] ">
        <Logo />
        <Nav />
      </header>
    </div>
  );
}
