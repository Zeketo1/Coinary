import {
    Vector1,
    Vector2,
    Vector3,
} from "../Components/Landing/utils/imageImports";
import profile from "../assets/Dashboard/icons/profile.png";
import dashboardIcon from "../assets/Dashboard/icons/dashboard.png";
import depositIcon from "../assets/Dashboard/icons/deposit.png";
import minerIcon from "../assets/Dashboard/icons/miner.png";
import settingsIcon from "../assets/Dashboard/icons/settings.png";
import withDrawIcon from "../assets/Dashboard/icons/withdraw.png";
import logo from "../assets/Luxi-Hosting-Logo.png";
import Bronze from "../assets/Buy-miner/Bronze.png";
import Gold from "../assets/Buy-miner/Gold.png";
import Diamond from "../assets/Buy-miner/Diamond.png";
import Legendary from "../assets/Buy-miner/Legendary.png";
import Platinum from "../assets/Buy-miner/Platinum.png";
import Silver from "../assets/Buy-miner/Silver.png";

const stats = [
    {
        image: Vector1,
        title: "Create",
        text: "Get Started",
        style: "glass2 py-3 px-[14px]",
    },
    {
        image: Vector2,
        title: "Login",
        text: "Find an ATM",
        style: "glass2 py-4 px-[13px]",
    },
    {
        image: Vector3,
        title: "Manage",
        text: "Download the App",
        style: "glass2 py-4 px-[14px]",
    },
];

const sideBarLinks = [
    { icon: dashboardIcon, title: "DashBoard", path: "/dashboard" },
    { icon: withDrawIcon, title: "WithDraw", path: "/dashboard/2" },
    { icon: depositIcon, title: "Deposits", path: "/dashboard/3" },
    { icon: minerIcon, title: "Buy Miner", path: "/dashboard/4" },
    { icon: settingsIcon, title: "Settings", path: "/dashboard/5" },
    { icon: profile, title: "Profile", path: "/dashboard/6" },
];

const minerOptions = [
    {
        image: Bronze,
        name: "Bronze",
        percent: "x0.5",
        style: "flex flex-col gap-1 justify-center translate-y-5 text-[#FFA217]",
    },
    {
        image: Silver,
        name: "Silver",
        percent: "x1.0",
        style: "flex flex-col gap-1 justify-center translate-y-5 text-[#c0c0c0]",
    },
    {
        image: Gold,
        name: "Gold",
        percent: "x3.0",
        style: "flex flex-col gap-1 justify-center translate-y-5 text-[#ffd700]",
    },
    {
        image: Platinum,
        name: "Platinum",
        percent: "x12.0",
        style: "flex flex-col gap-1 justify-center translate-y-5 text-[#0085FF]",
    },
    {
        image: Diamond,
        name: "Diamond",
        percent: "x38.0",
        style: "flex flex-col gap-1 justify-center translate-y-5 text-[#FA00FF]",
    },
    {
        image: Legendary,
        name: "Legendary",
        percent: "x86.0",
        style: "flex flex-col gap-1 justify-center translate-y-5 text-[#FF0000]",
    },
];

const containerVariants = {
    close: {
        width: "5rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    },

    open: {
        width: "20rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    },
};

const SideBar = () => {
    const [isOpen, setIsopen] = useState(true);
    const { pathname } = useLocation();
    const containerControls = useAnimationControls();

    useEffect(() => {
        if (isOpen) {
            containerControls.start("open");
            svgControls.start("open");
        } else {
            containerControls.start("close");
            svgControls.start("close");
        }
    }, [isOpen]);
    const handleOpenClose = () => {
        setIsopen(!isOpen);
    };

    const svgVariants = {
        close: {
            rotate: 360,
        },
        open: {
            rotate: 180,
        },
    };
};

export {
    stats,
    sideBarLinks,
    profile,
    dashboardIcon,
    depositIcon,
    minerIcon,
    settingsIcon,
    withDrawIcon,
    logo,
    minerOptions,
    containerVariants,
};
