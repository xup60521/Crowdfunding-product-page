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
            className="w-full fixed min-h-screen flex flex-col font-commissioner items-center justify-center p-8 z-20"
        >
            <div
                onMouseDown={(e) => e.stopPropagation()}
                className="md:max-w-[34rem] py-12 px-12 flex flex-col gap-8 items-center bg-white rounded-lg"
            >
                <img src={IconCheck} alt="check icon" className="size-20" />
                <div className="w-full flex flex-col items-center gap-3">
                    <h3 className="font-bold text-xl">
                        Thanks for your support!
                    </h3>
                    <p className="text-center text-c_Dark_gray">
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
