import Logo from "@/assets/images/logo.svg";
import MastercraftLogo from "@/assets/images/logo-mastercraft.svg";
import BookmarkSVG from "@/assets/images/icon-bookmark.svg";
import Progress from "./_components/Progress";
import About from "./_components/About";
import { Fragment, useState } from "react";
import Modal from "./_components/Modal";
import { AnimatePresence } from "framer-motion";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Fragment>
            <AnimatePresence>
                {isModalOpen && <Modal key="modal" setIsModalOpen={setIsModalOpen} />}
            </AnimatePresence>
            <main
                data-testid="test-app"
                className="w-full min-h-screen flex flex-col items-center font-commissioner bg-[#fafafa]"
            >
                <Top />
                <div className="w-full flex-grow flex flex-col items-center md:px-[22vw] -translate-y-[5rem] gap-8">
                    <Introduction setIsModalOpen={setIsModalOpen} />
                    <Progress />
                    <About />
                </div>
            </main>
        </Fragment>
    );
}

function Introduction({
    setIsModalOpen,
}: {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <section className="bg-white px-12 rounded-lg flex flex-col items-center w-full">
            <img
                src={MastercraftLogo}
                alt="mastercraft logo"
                className="aspect-square size-13 -translate-y-[50%]"
            />
            <div className="w-full flex flex-col items-center gap-3">
                <h1 className="text-black font-bold text-3xl">
                    Mastercraft Bamboo Monitor Riser
                </h1>
                <span className="text-c_Dark_gray">
                    A beautiful & handcrafted monitor stand to reduce neck and
                    eye strain.
                </span>
            </div>
            <div className="w-full flex items-center justify-between py-8">
                <button
                    onMouseDown={() => setIsModalOpen(true)}
                    className="bg-c_Moderate_cyan font-medium px-8 py-3 rounded-full text-white transition hover:bg-c_Dark_cyan"
                >
                    Back this project
                </button>
                <div className="flex rounded-full  bg-gray-100 items-center transition hover:opacity-80 cursor-pointer">
                    <button className="h-full aspect-square rounded-full transition bg-black">
                        <span className="sr-only">bookmark</span>
                        <img
                            src={BookmarkSVG}
                            alt="bookmark svg"
                            className="aspect-square h-12"
                        />
                    </button>
                    <span className="text-c_Dark_gray font-bold px-4">
                        Bookmark
                    </span>
                </div>
            </div>
        </section>
    );
}

function Top() {
    return (
        <div className="w-full flex flex-col items-center bg-cover md:bg-[url(/image-hero-desktop.jpg)] bg-[url(/image-hero-mobile.jpg)] md:aspect-[1440/400] aspect-[750/600] ">
            <nav className="w-full md:px-[10vw] flex items-center py-12 md:gap-6 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent bg-opacity-5">
                <img src={Logo} alt="logo" className="h-5" />
                <div className="flex-grow"></div>
                <button className="text-white font-medium text-sm">
                    About
                </button>
                <button className="text-white font-medium text-sm">
                    Discover
                </button>
                <button className="text-white font-medium text-sm">
                    Get Started
                </button>
            </nav>
        </div>
    );
}
