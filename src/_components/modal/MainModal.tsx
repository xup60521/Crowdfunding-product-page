import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";
import { Data, type Unpacked } from "../../utils";

export default function MainModal({
    setIsFinished,
    setIsModalOpen,
}: {
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

    return (
        <motion.div
            onMouseDown={() => setIsModalOpen(false)}
            key="modal_main"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "keyframes", duration: 0.25 }}
            className="w-full fixed min-h-screen flex flex-col font-commissioner items-center justify-center p-8 z-20"
        >
            <div
                onMouseDown={(e) => e.stopPropagation()}
                className="w-[48rem] max-h-[90vh] overflow-y-scroll bg-white rounded-lg flex flex-col px-8 py-12 relative gap-4"
            >
                <button
                    onMouseDown={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 group scale-125"
                >
                    <span className="sr-only">close modal</span>
                    <IoClose className="group-hover:text-black transition size-5 font-black text-c_Dark_gray" />
                </button>
                <h2 className="font-bold text-2xl">Back this project</h2>
                <p className="text-c_Dark_gray">
                    Want to support us in bringing Mastercraft Bamboo Monitor
                    Riser out in the world?
                </p>
                <div className="flex flex-col w-full gap-4 py-4">
                    <Item
                        item={{
                            title: "Pledge with no reward",
                            description:
                                "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
                            price_tag: "",
                            left: undefined,
                        }}
                        thisIndex={0}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        setIsFinished={setIsFinished}
                    />
                    {Data.map((item, thisIndex) => (
                        <Item
                            item={item}
                            key={`modal ${item.title}`}
                            thisIndex={thisIndex + 1}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                            setIsFinished={setIsFinished}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function Item(props: {
    item: Unpacked<typeof Data>;
    thisIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
    selectedIndex: number | null;
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const {
        item: { title, description, price_tag, left },
        thisIndex,
        setSelectedIndex,
        selectedIndex,
        setIsFinished,
    } = props;
    const inputRef = useRef<HTMLInputElement>(null!);
    const isDisabled = left === 0;
    const isSelected = thisIndex === selectedIndex;
    const selectPledge = () => {
        if (isDisabled) return;
        setSelectedIndex(thisIndex);
    };
    const onContinue = () => {
        if (inputRef.current.value === "") {
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
            return;
        }
        if (Number.isNaN(Number(inputRef.current.value))) {
            toast.error("Please enter a valid number", {
                className: "bg-red-700 text-white",
            });
            setTimeout(() => {
                inputRef.current.value = "";
            }, 0);
            return;
        }
        setIsFinished(true);
    };

    useEffect(() => {
        if (thisIndex === selectedIndex) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
    }, [selectedIndex, thisIndex]);

    return (
        <div
            onMouseDown={selectPledge}
            className={`w-full rounded-md border-2 ${
                isDisabled && "opacity-50"
            } ${
                isSelected
                    ? "border-c_Moderate_cyan border-opacity-100"
                    : "border-c_Dark_gray border-opacity-10 "
            }`}
        >
            <div className="w-full group flex px-6 pt-6 pb-8 transition gap-6 cursor-pointer">
                <div className="">
                    <button
                        disabled={left === 0}
                        className="size-6 rounded-full border-2 group-hover:border-c_Moderate_cyan group-hover:border-opacity-100 transition border-c_Dark_gray border-opacity-10 p-[0.3rem]"
                    >
                        <span className="sr-only">select</span>
                        <div
                            className={`${
                                isSelected
                                    ? "bg-c_Moderate_cyan"
                                    : "bg-transparent"
                            } transition rounded-full w-full h-full`}
                        ></div>
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center py-1 gap-4">
                        <h3 className="font-bold transition group-hover:text-c_Moderate_cyan">
                            {title}
                        </h3>
                        {price_tag !== "" && (
                            <span className="text-c_Moderate_cyan font-semibold">
                                {price_tag}
                            </span>
                        )}
                        <div className="flex-grow"></div>
                        {!!left && (
                            <div className="w-fit flex items-center gap-2">
                                <span className="font-bold text-lg">
                                    {left}
                                </span>
                                <span className="text-c_Dark_gray">left</span>
                            </div>
                        )}
                    </div>
                    <p className="text-c_Dark_gray">{description}</p>
                </div>
            </div>
            {isSelected && (
                <div className="w-full px-6 border-t-c_Dark_gray border-opacity-10 border-t-2 flex items-center py-6 gap-4">
                    <span className="text-c_Dark_gray">Enter your pledge</span>
                    <div className="flex-grow"></div>
                    <div className="text-sm py-3 rounded-full border-2 focus-within:border-opacity-100 transition focus-within:border-c_Moderate_cyan border-c_Dark_gray border-opacity-10 relative">
                        <span className="absolute text-c_Dark_gray left-6 font-bold opacity-50">
                            $
                        </span>
                        <input
                            ref={inputRef}
                            type="text"
                            className="text-sm h-full font-bold outline-none w-24 pl-10 pr-2 rounded-full cursor-pointer z-10"
                        />
                    </div>
                    <button
                        onMouseDown={onContinue}
                        className="text-sm font-bold text-white transition bg-c_Moderate_cyan hover:bg-c_Dark_cyan px-6 py-3 rounded-full"
                    >
                        Continue
                    </button>
                </div>
            )}
        </div>
    );
}
