import MastercraftLogo from "@/assets/images/logo-mastercraft.svg";
import { useState } from "react";
import { IoIosBookmark } from "react-icons/io";

export default function Introduction({
    setIsModalOpen,
}: {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    return (
        <section className="bg-white md:px-12 px-6 rounded-lg flex flex-col items-center w-full border-[1px] border-c_Dark_gray border-opacity-10">
            <img
                src={MastercraftLogo}
                alt="mastercraft logo"
                className="aspect-square size-13 -translate-y-[50%]"
            />
            <div className="w-full flex flex-col items-center gap-3">
                <h1 className="text-black font-bold md:text-3xl md:px-0 px-4 text-xl text-center">
                    Mastercraft Bamboo Monitor Riser
                </h1>
                <span className="text-c_Dark_gray text-center md:text-[1rem] text-sm">
                    A beautiful & handcrafted monitor stand to reduce neck and
                    eye strain.
                </span>
            </div>
            <div className="w-full flex items-center justify-between py-8 gap-2">
                <button
                    onMouseDown={() => setIsModalOpen(true)}
                    className="bg-c_Moderate_cyan flex-grow md:flex-grow-0 text-sm font-bold px-8 py-3 rounded-full text-white transition hover:bg-c_Dark_cyan"
                >
                    Back this project
                </button>
                <div
                    onMouseDown={() => setIsBookmarked(!isBookmarked)}
                    className="flex rounded-full  bg-gray-100 items-center transition hover:opacity-80 cursor-pointer"
                >
                    <button className="h-full aspect-square rounded-full transition">
                        <span className="sr-only">bookmark</span>
                        {/* <img
                            src={BookmarkSVG}
                            alt="bookmark svg"
                            className="aspect-square h-12"
                        /> */}
                        <div
                            className={`aspect-square flex h-[2.75rem] items-center justify-center transition ${
                                isBookmarked
                                    ? "bg-c_Dark_cyan bg-opacity-100"
                                    : "bg-black bg-opacity-90"
                            } rounded-full`}
                        >
                            <IoIosBookmark
                                className={`size-5 ${
                                    isBookmarked
                                        ? "text-white"
                                        : "text-c_Dark_gray"
                                }`}
                            />
                        </div>
                    </button>
                    <span
                        className={`font-bold px-4 text-sm md:block hidden ${
                            isBookmarked
                                ? "text-c_Dark_cyan"
                                : "text-c_Dark_gray"
                        }`}
                    >
                        Bookmark
                    </span>
                </div>
            </div>
        </section>
    );
}
