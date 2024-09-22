import { motion } from "framer-motion";

export default function Backdrop({
    setIsModalOpen,
    setIsFinished,
}: {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <motion.div
            key="backdrop"
            onMouseDown={() => {
                setIsModalOpen(false);
                setIsFinished(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed w-full min-h-screen h-full bg-black bg-opacity-50 z-10"
        ></motion.div>
    );
}
