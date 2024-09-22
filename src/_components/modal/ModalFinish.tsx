import { motion } from "framer-motion";
import IconCheck from "@/assets/images/icon-check.svg";

export default function ModalFinish({
    setIsFinished,
    setIsModalOpen,
}: {
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <motion.div
            onMouseDown={() => {
                setIsModalOpen(false);
                setIsFinished(false);
            }}
            key="modal_main"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "keyframes", duration: 0.25 }}
            className="w-full fixed min-h-screen flex flex-col font-commissioner items-center justify-center p-6 z-20"
        >
            <div
                onMouseDown={(e) => e.stopPropagation()}
                className="md:max-w-[34rem] md:py-12 py-8 md:px-12 px-6 flex flex-col md:gap-8 gap-6 items-center bg-white rounded-lg"
            >
                <img src={IconCheck} alt="check icon" className="md:size-20 size-16" />
                <div className="w-full flex flex-col items-center gap-3">
                    <h3 className="font-bold md:text-xl text-lg text-center">
                        Thanks for your support!
                    </h3>
                    <p className="text-center text-c_Dark_gray md:text-[1rem] text-sm">
                        Your pledge brings us one step closer to sharing
                        Mastercraft Bamboo Monitor Riser worldwide. You will get
                        an email once our campaign is completed.
                    </p>
                </div>
                <button onMouseDown={()=>{
                    setIsFinished(false)
                    setIsModalOpen(false)
                }} className="text-xs font-bold text-white bg-c_Moderate_cyan transition hover:bg-c_Dark_cyan rounded-full py-3 px-6">
                    Got it!
                </button>
            </div>
        </motion.div>
    );
}
