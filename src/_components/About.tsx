import type { Unpacked } from "../utils";

const Data = [
    {
        title: "Bamboo Stand",
        price_tag: "Pledge $25 or more",
        description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list.`,
        left: 101,
    },
    {
        title: "Black Edition Stand",
        price_tag: "Pledge $75 or more",
        description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.`,
        left: 64,
    },
    {
        title: "Mahogany Special Edition",
        price_tag: "Pledge $200 or more",
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.`,
        left: 0,
    },
];

export default function About() {
    return (
        <section className="w-full px-12 flex flex-col py-12 bg-white rounded-md gap-8">
            <h2 className="text-lg font-bold">About this project</h2>
            <p className="text-c_Dark_gray">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
            </p>
            <p className="text-c_Dark_gray">
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
        <div className={`w-full flex flex-col px-6 pt-8 pb-8 rounded-md border-2 border-c_Dark_gray border-opacity-10 gap-6 ${left === 0 && "opacity-40"}`}>
            <div className="w-full flex items-center justify-between">
                <h3 className="text-lg font-bold">{title}</h3>
                <span className="text-cyan-400 text-sm font-semibold">
                    {price_tag}
                </span>
            </div>
            <p className="text-c_Dark_gray tracking-wide leading-7">
                {description}
            </p>
            <div className="w-full flex items-center">
                <span className="font-bold text-3xl">{left}</span>
                <span className="text-c_Dark_gray px-2">left</span>
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
