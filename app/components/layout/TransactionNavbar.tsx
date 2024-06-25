
'use client'
import { Avatar, Box, Button, Container, Flex, Grid, Section, Separator } from '@radix-ui/themes'
import SwitchCompanyButton from './SwitchCompanyButton'
import { HamburgerMenuIcon, BellIcon } from '@radix-ui/react-icons'
import logo from './../../../public/Fudz_logo.ico'
import SlideMenu from './SlideMenu' 
import { RiDashboardLine } from 'react-icons/ri'
import NavLink from '../ui/NavLink'
const TransactionNavbar = () => {
    return (
        <div style={{borderBottom:'1px solid #dddfe5',marginBottom:'10px'}}>

            {/* <Box className='flex justify-between content-center gap-6'>
                        <Button>
                            <HamburgerMenuIcon className='self-center' />
                        </Button>
                    </Box> */}
            <SlideMenu data={{
                role: 'admin'
            }} />

            <Box style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', height: '50px', padding: '0px 20px',marginBottom:'10px' }}>

            <ul className='flex items-end  gap-4'>
                    <NavLink href="/Transactions/SalesVoucher" icon={<RiDashboardLine className="w-5 h-5" />} variant={'dark'}>
                        <span className={`${false ? "lg:group-hover:block lg:hidden" : "block"}`}>Invoicing</span>
                    </NavLink>
                    <NavLink href="/Transactions/OfficialReceipt" icon={<RiDashboardLine className="w-5 h-5" />} variant={'dark'}>
                        <span className={`${false ? "lg:group-hover:block lg:hidden" : "block"}`}>Official Receipt</span>
                    </NavLink>
                    <NavLink href="/Transactions/Receivable" icon={<RiDashboardLine className="w-5 h-5" />} variant={'dark'}>
                        <span className={`${false ? "lg:group-hover:block lg:hidden" : "block"}`}>Receivable</span>
                    </NavLink>
                    <NavLink href="/Transactions/PaymentVoucher" icon={<RiDashboardLine className="w-5 h-5" />} variant={'dark'}>
                        <span className={`${false ? "lg:group-hover:block lg:hidden" : "block"}`}>Payment Voucher</span>
                    </NavLink> 
                    <NavLink href="/Transactions/PettyCashVoucher" icon={<RiDashboardLine className="w-5 h-5" />} variant={'dark'}>
                        <span className={`${false ? "lg:group-hover:block lg:hidden" : "block"}`}>Petty Cash Voucher</span>
                    </NavLink>
                    <NavLink href="/Transactions/JournalVoucher" icon={<RiDashboardLine className="w-5 h-5" />} variant={'dark'}>
                        <span className={`${false ? "lg:group-hover:block lg:hidden" : "block"}`}>Journal Voucher</span>
                    </NavLink>
                </ul>
                <div className='flex flex-row gap-6'>
                    <div className='self-center'>
                        <SwitchCompanyButton />
                    </div>
                    <Button>
                        <BellIcon className='self-center' />
                    </Button>
                    <div
                        className='self-center'
                        style={{
                            width: '35px'
                        }}>
                        <Avatar
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                            fallback="A"
                        />
                    </div>
                </div>
            </Box> 
        </div>
    )
}
export default TransactionNavbar