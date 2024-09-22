import Progress from "./_components/Progress";
import About from "./_components/About";
import { Fragment, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainModal from "./_components/modal/MainModal";
import Backdrop from "./_components/modal/Backdrop";
import ModalFinish from "./_components/modal/ModalFinish";
import Top from "./_components/Top";
import Introduction from "./_components/Introduction";
import MobileMenu from "./_components/modal/MobileMenu";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Fragment>
            <AnimatePresence>
                {(isModalOpen || isMenuOpen) && (
                    <Backdrop
                        key="modal"
                        setIsModalOpen={setIsModalOpen}
                        setIsFinished={setIsFinished}
                        setIsMenuOpen={setIsMenuOpen}
                    />
                )}
                {isMenuOpen && (
                    <MobileMenu key="modal menu" setIsMenuOpen={setIsMenuOpen} />
                )}
                {isModalOpen && !isFinished && (
                    <MainModal
                        key={"main modal"}
                        setIsFinished={setIsFinished}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
                {isModalOpen && isFinished && (
                    <ModalFinish
                        key={"modal finish component"}
                        setIsFinished={setIsFinished}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
            </AnimatePresence>
            <main
                data-testid="test-app"
                className="w-full min-h-screen flex flex-col items-center font-commissioner bg-[#fafafa]"
            >
                <Top setIsMenuOpen={setIsMenuOpen} />
                <div className="w-full flex-grow flex flex-col items-center md:px-[22vw] px-6 -translate-y-[5rem] gap-8">
                    <Introduction setIsModalOpen={setIsModalOpen} />
                    <Progress />
                    <About />
                </div>
            </main>
        </Fragment>
    );
}
