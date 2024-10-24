import { RiSensorLine } from "react-icons/ri";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { GiMovementSensor } from "react-icons/gi";
import { TbCurrencyTenge } from "react-icons/tb";



export const Nav_LINKS = [
    {
        href: "/dashboard",
        label: "Home"
    },
    {
        href: "/example1",
        label: "Example1"
    },
    {
        href: "/example2",
        label: "Example2"
    },
    {
        href: "/example3",
        label: "Example3"
    },
    {
        href: "/example4",
        label: "Example4"
    }
]

export const CIRCLE_DATA = [
    {
        icon: <RiSensorLine size={50}/>,
        tittle: "Example1"
    },
    {
        icon: <FaTemperatureThreeQuarters size={50}/>,
        tittle: "Example2"
    },
    {
        icon: <GiMovementSensor size={50}/>,
        tittle: "Example3"
    },
    {
        icon: <TbCurrencyTenge size={50}/>,
        tittle: "Example4"
    }
]