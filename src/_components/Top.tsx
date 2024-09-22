import Logo from "@/assets/images/logo.svg";
import MenuIcon from "@/assets/images/icon-hamburger.svg";

export default function Top(props: {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { setIsMenuOpen } = props;
    return (
        <div className="w-full flex flex-col items-center bg-cover md:bg-[url(/image-hero-desktop.jpg)] bg-[url(/image-hero-mobile.jpg)] md:aspect-[1440/400] aspect-[750/600] ">
            <nav className="w-full md:px-[10vw] px-6 flex items-center md:py-12 py-8 md:gap-6 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent bg-opacity-5">
                <img src={Logo} alt="logo" className="h-5 z-20" />
                <div className="flex-grow"></div>
                <div className="md:flex items-center gap-6 hidden">
                    <button className="text-white font-medium text-sm">
                        About
                    </button>
                    <button className="text-white font-medium text-sm">
                        Discover
                    </button>
                    <button className="text-white font-medium text-sm">
                        Get Started
                    </button>
                </div>
                <img
                    src={MenuIcon}
                    alt="menu icon"
                    role="button"
                    className="md:hidden cursor-pointer"
                    onMouseDown={() => setIsMenuOpen(true)}
                />
            </nav>
        </div>
    );
}
