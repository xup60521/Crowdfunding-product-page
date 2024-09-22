import { Data, type Unpacked } from "../utils";

export default function About() {
    return (
        <section className="w-full md:px-12 px-6 flex flex-col md:py-12 py-8 bg-white rounded-lg border-[1px] border-c_Dark_gray border-opacity-10 gap-8">
            <h2 className="text-lg font-bold">About this project</h2>
            <p className="text-c_Dark_gray md:text-[1rem] text-sm">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
            </p>
            <p className="text-c_Dark_gray md:text-[1rem] text-sm">
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
            </p>
            <div className="w-full flex flex-col gap-6">
                {Data.map((item) => (
                    <Item key={item.title} item={item} />
                ))}
            </div>
        </section>
    );
}

function Item(props: { item: Unpacked<typeof Data> }) {
    const {
        item: { title, description, price_tag, left },
    } = props;
    return (
        <div
            className={`w-full flex flex-col px-6 md:py-8 py-6 rounded-md border-2 border-c_Dark_gray border-opacity-10 gap-6 ${
                left === 0 && "opacity-40"
            }`}
        >
            <div className="w-full flex md:flex-row flex-col md:items-center md:justify-between">
                <h3 className="md:text-lg font-bold">{title}</h3>
                <span className="text-cyan-400 text-sm font-semibold">
                    {price_tag}
                </span>
            </div>
            <p className="text-c_Dark_gray tracking-wide md:leading-7 leading-6 md:text-[1rem] text-sm">
                {description}
            </p>
            <div className="w-full flex md:flex-row flex-col md:gap-0 gap-3 md:items-center">
                <div className="flex items-center">
                    <span className="font-bold text-3xl">{left}</span>
                    <span className="text-c_Dark_gray px-2">left</span>
                </div>
                <div className="flex-grow"></div>
                {left !== 0 && (
                    <button className="text-white font-bold text-xs bg-c_Moderate_cyan transition hover:bg-c_Dark_cyan rounded-full w-32 py-3">
                        Select Reward
                    </button>
                )}
                {left === 0 && (
                    <button className="text-white font-bold text-xs bg-c_Dark_gray rounded-full w-32 py-3">
                        Out of stock
                    </button>
                )}
            </div>
        </div>
    );
}
