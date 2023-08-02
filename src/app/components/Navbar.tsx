import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="prose sticky top-0 bg-white max-w-2xl mx-auto h-[10vh] flex items-center px-8">
        <Link className="no-underline h-fit" href="/">
          <p className="text-lg font-medium">bhsunilvarma</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
