import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
import { IoClose } from "react-icons/io5";
import { Data, type Unpacked } from "../utils";
import { useState } from "react";

export default function Modal({
    setIsModalOpen,
}: {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
    return (
        <Fragment>
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed w-full min-h-screen h-full bg-black bg-opacity-50 z-10"
            ></motion.div>
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
                        Want to support us in bringing Mastercraft Bamboo
                        Monitor Riser out in the world?
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
                        />
                        {Data.map((item) => (
                            <Item item={item} key={`modal ${item.title}`} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
}

function Item(props: { item: Unpacked<typeof Data> }) {
    const {
        item: { title, description, price_tag, left },
    } = props;
    return (
        <div
            className={`w-full rounded-md border-2 group border-c_Dark_gray border-opacity-10 flex px-6 pt-6 pb-8 gap-6 cursor-pointer ${
                left === 0 && "opacity-50"
            }`}
        >
            <div className="">
                <button
                    disabled={left === 0}
                    className="size-6 rounded-full border-2 group-hover:border-c_Moderate_cyan group-hover:border-opacity-100 transition border-c_Dark_gray border-opacity-10"
                >
                    <span className="sr-only">select</span>
                </button>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center py-1 gap-4">
                    <h3 className="font-bold transition group-hover:text-c_Moderate_cyan">{title}</h3>
                    {price_tag !== "" && (
                        <span className="text-c_Moderate_cyan font-semibold">
                            {price_tag}
                        </span>
                    )}
                    <div className="flex-grow"></div>
                    {!!left && (
                        <div className="w-fit flex items-center gap-2">
                            <span className="font-bold text-lg">{left}</span>
                            <span className="text-c_Dark_gray">left</span>
                        </div>
                    )}
                </div>
                <p className="text-c_Dark_gray">{description}</p>
            </div>
        </div>
    );
}
