import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Backed_Goal = 100000;
const Current_Backed = 89914;
const Total_Backers = 5007;
const Days_Left = 56;

export default function Progress() {
    const [progress, setProgress] = useState(0);
    const [currentBacked, setCurrentBacked] = useState(0);
    const [totalBackers, setTotalBackers] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0)
    const progressRef = useRef<HTMLDivElement>(null!);
    const progressContainerRef = useRef<HTMLDivElement>(null!);
    const currentBackedRef = useRef<HTMLSpanElement>(null!);
    const totalBackersRef = useRef<HTMLSpanElement>(null!);
    const daysLeftRef = useRef<HTMLSpanElement>(null!);

    useEffect(() => {
        gsap.to(progressRef.current, {
            width:
                progressContainerRef.current.clientWidth *
                (Current_Backed / Backed_Goal),
            duration: 1,
            ease: "power1.inOut",
            onComplete: () =>
                setProgress(
                    progressContainerRef.current.clientWidth *
                        (Current_Backed / Backed_Goal)
                ),
        });
        gsap.to(currentBackedRef.current, {
            innerText: Current_Backed,
            duration: 1,
            snap: {
                innerText: 1,
            },
            onComplete: () => setCurrentBacked(Current_Backed),
            onUpdate: () => {
                currentBackedRef.current.innerText = Number(
                    currentBackedRef.current.innerText
                ).toLocaleString();
            },
        });
        gsap.to(daysLeftRef.current, {
            innerText: Days_Left,
            duration: 1,
            snap: {
                innerText: 1,
            },
            onComplete: () => setDaysLeft(daysLeft),
            onUpdate: () => {
                daysLeftRef.current.innerText = Number(
                    daysLeftRef.current.innerText
                ).toLocaleString();
            },
        });
        gsap.to(totalBackersRef.current, {
            innerText: Total_Backers,
            duration: 1,
            snap: {
                innerText: 1,
            },
            onComplete: () => setTotalBackers(Total_Backers),
            onUpdate: () => {
                totalBackersRef.current.innerText = Number(
                    totalBackersRef.current.innerText
                ).toLocaleString();
            },
        });
    }, []);
    return (
        <section className="w-full px-12 flex flex-col py-12 bg-white gap-10">
            <div className="grid grid-cols-3">
                <div className="flex flex-col w-full h-full gap-2">
                    <div className="font-bold text-3xl">
                        $
                        <span ref={currentBackedRef}>
                            {currentBacked.toLocaleString()}
                        </span>
                    </div>
                    <span className="text-c_Dark_gray text-sm">
                        of ${Backed_Goal.toLocaleString()} backed
                    </span>
                </div>
                <div className="flex flex-col w-full h-full gap-2 border-l-[1px] border-c_Dark_gray px-12">
                    <span ref={totalBackersRef} className="font-bold text-3xl">
                        {totalBackers.toLocaleString()}
                    </span>
                    <span className="text-c_Dark_gray text-sm">
                        total backers
                    </span>
                </div>
                <div className="flex flex-col w-full h-full gap-2 border-l-[1px] border-c_Dark_gray px-12">
                    <span ref={daysLeftRef} className="font-bold text-3xl">{daysLeft.toLocaleString()}</span>
                    <span className="text-c_Dark_gray text-sm">days left</span>
                </div>
            </div>
            <div
                ref={progressContainerRef}
                className="w-full h-3 rounded-full bg-c_Dark_gray bg-opacity-10 overflow-hidden"
            >
                <div
                    style={{ width: progress }}
                    ref={progressRef}
                    className="h-full bg-c_Moderate_cyan rounded-full"
                ></div>
            </div>
        </section>
    );
}
