import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    return (
        <div className="2xl:py-8 py-4 flex justify-center items-center border-b border-gray-200">
            <div className="flex items-center relative md:py-0 py-2">
                <input type="text" className="w-80 md:flex hidden px-6 bg-[#FAFAFA] py-2 border border-[E7E7E7] rounded-md font-medium " placeholder="Search" />
                <MagnifyingGlassIcon className=" absolute right-3 w-5 h-5 text-[#C0C0C0]" />
            </div>
        </div>
    );
}
 
export default Navbar;