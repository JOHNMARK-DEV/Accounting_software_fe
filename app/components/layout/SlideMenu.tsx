'use client' 
import { Button } from "@radix-ui/themes"
import Image from 'next/image'
import Logo from './../../../public/Fudz_logo.ico'
import LogoOnly from './../../../public/Fudz_logo.ico'
import NavLink from '@/components/ui/NavLink'
import { FiLayers } from "react-icons/fi"
import { HiOutlineUserGroup } from "react-icons/hi"
import { RiProfileLine, RiDashboardLine, RiUserHeartLine, RiBankLine, RiSettings2Line, RiUserSettingsLine } from "react-icons/ri"
import { BsFileBarGraph } from "react-icons/bs"

interface INavigationProps {
    data:{
        role:"admin"
    }
}

const SlideMenu = ({data}: INavigationProps) => {
    const showNavigationLink = data?.role === "admin" ?
        <NavLink  href="/patients" icon={<HiOutlineUserGroup className="w-5 h-5" />}>
            <span className={`${true ? "lg:group-hover:block lg:hidden" : "block"}`}>Patients</span>
        </NavLink> : <NavLink href="/patients" icon={<RiProfileLine className="w-5 h-5" />}>
            <span className={`${true ? "lg:group-hover:block lg:hidden" : "block"}`}>My Profile</span>
        </NavLink>

    return (
        <div className={`group ${true ? "w-[320px] lg:w-[56px] lg:hover:w-[320px] lg:z-50" : "w-[320px]"} bg-gradient-to-tr from-[#020D14] via-[#245F3E] to-[#B9D470] fixed top-0 bottom-0 ${false ? "left-0 z-50 shadow-lg" : "-left-96"} z-40 lg:z-10 lg:left-0 transition-all`} style={{ willChange: 'transform' }}>
            <div className={`flex items-center justify-center py-10 ${true ? "px-2" : "px-4"}`}>
                <Image src={LogoOnly} alt="Company Logo" className={`${true ? "hidden group-hover:lg:hidden lg:block" : "hidden"} w-20 logo-icon-invert`} />
                <Image src={Logo} alt="Company Logo" className={`${true ? "hidden lg:group-hover:block lg:group-hover:fade-in" : "block"} w-44 logo-icon-invert`} />
            </div>
            <div className='py-4 relative'>
                <h6 className={`${true ? "group-hover:block hidden" : "block"} mb-1 font-medium ml-4 text-white text-sm`}>Navigation</h6>
                <ul className='flex flex-col gap-1'>
                    <NavLink href="/" icon={<RiDashboardLine className="w-5 h-5" />}>
                        <span className={`${true ? "lg:group-hover:block lg:hidden" : "block"}`}>Dashboard</span>
                    </NavLink>
                    {/* {showNavigationLink} */}
                    <NavLink href="/add-new-patient" icon={<RiBankLine className="w-5 h-5" />}>
                        <span className={`${true ? "lg:group-hover:block lg:hidden" : "block"}`}>Transaction</span>
                    </NavLink>
                    <NavLink href="/sample" icon={<RiSettings2Line className="w-5 h-5" />}>
                        <span className={`${true ? "lg:group-hover:block lg:hidden" : "block"}`}>System Configuration</span>
                    </NavLink>
                    <NavLink href="/pdf-viewer" icon={<BsFileBarGraph  className="w-5 h-5" />}>
                        <span className={`${true ? "lg:group-hover:block lg:hidden" : "block"}`}>Reports</span>
                    </NavLink>
                    <NavLink href="/table-sample" icon={<RiUserSettingsLine  className="w-5 h-5" />}>
                        <span className={`${true ? "lg:group-hover:block lg:hidden" : "block"}`}>My Settings</span>
                    </NavLink>
                </ul>
            </div>
        </div>

    )
}
export default SlideMenu