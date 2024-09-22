import { motion } from "framer-motion";

export default function MobileMenu({
    setIsMenuOpen,
}: {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <motion.div
            onMouseDown={() => setIsMenuOpen(false)}
            key="modal_menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "keyframes", duration: 0.25 }}
            className="absolute w-full min-h-screen md:hidden flex flex-col px-6 pt-20 z-30"
        >
            <div
                className="bg-white rounded-lg flex flex-col w-full"
            >
                <button className="py-5 font-commissioner border-b-[1px] border-c_Dark_gray border-opacity-30 px-6 text-left font-bold">About</button>
                <button className="py-5 font-commissioner border-b-[1px] border-c_Dark_gray border-opacity-30 px-6 text-left font-bold">Discover</button>
                <button className="py-5 font-commissioner px-6 text-left font-bold">Get Started</button>
            </div>
        </motion.div>
    );
}
