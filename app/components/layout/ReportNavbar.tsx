
'use client'
import { Avatar, Box, Button, Container, DropdownMenu, Flex, Grid, Section, Separator } from '@radix-ui/themes'
import SwitchCompanyButton from './SwitchCompanyButton'
import { HamburgerMenuIcon, BellIcon } from '@radix-ui/react-icons'
import logo from './../../../public/Fudz_logo.ico'
import SlideMenu from './SlideMenu'
import { RiDashboardLine } from 'react-icons/ri'
import NavLink from '../ui/NavLink'
const ReportNavbar = () => {
    return (
        <div style={{ borderBottom: '1px solid #dddfe5', marginBottom: '10px' }}>

            {/* <Box className='flex justify-between content-center gap-6'>
                        <Button>
                            <HamburgerMenuIcon className='self-center' />
                        </Button>
                    </Box> */}
            <SlideMenu data={{
                role: 'admin'
            }} />

            <Box style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', height: '50px', padding: '0px 20px', marginBottom: '10px' }}>

                <ul className='flex items-end  gap-4'>
                    <li>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant="soft" style={{backgroundColor:'white',color:'black'}}>
                                    All Reports
                                    <DropdownMenu.TriggerIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>

                                <DropdownMenu.Item shortcut="⌘ E">Fixed Asset Account</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ E">Prepaid Report</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ E">Checks Report</DropdownMenu.Item>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Financial Statement</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Trial Balance</DropdownMenu.Item>
                                        <DropdownMenu.Item>Balance Sheet</DropdownMenu.Item>
                                        <DropdownMenu.Item>Income Statement</DropdownMenu.Item>
                                        <DropdownMenu.Sub>
                                            <DropdownMenu.SubTrigger>Financial Statement Design</DropdownMenu.SubTrigger>
                                            <DropdownMenu.SubContent>
                                                <DropdownMenu.Item>Trial Balance</DropdownMenu.Item>
                                                <DropdownMenu.Item>Balance Sheet</DropdownMenu.Item>
                                                <DropdownMenu.Item>Income Statement</DropdownMenu.Item>
                                            </DropdownMenu.SubContent>
                                        </DropdownMenu.Sub>
                                        <DropdownMenu.Sub>
                                            <DropdownMenu.SubTrigger>Basic Financial Statement</DropdownMenu.SubTrigger>
                                            <DropdownMenu.SubContent>
                                                <DropdownMenu.Item>Trial Balance</DropdownMenu.Item>
                                                <DropdownMenu.Item>Balance Sheet</DropdownMenu.Item>
                                                <DropdownMenu.Item>Income Statement</DropdownMenu.Item>
                                            </DropdownMenu.SubContent>
                                        </DropdownMenu.Sub>
                                        <DropdownMenu.Sub>
                                            <DropdownMenu.SubTrigger>Per Book Financial Statement</DropdownMenu.SubTrigger>
                                            <DropdownMenu.SubContent>
                                                <DropdownMenu.Item>Trial Balance</DropdownMenu.Item>
                                                <DropdownMenu.Item>Balance Sheet</DropdownMenu.Item>
                                                <DropdownMenu.Item>Income Statement</DropdownMenu.Item>
                                            </DropdownMenu.SubContent>
                                        </DropdownMenu.Sub>
                                        <DropdownMenu.Item>Actual vs Budget</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Accounts Receivable</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Detailed Aging Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>Aging Summary Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>AR Outstanding Balance</DropdownMenu.Item>
                                        <DropdownMenu.Item>Aging Summary Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>Subsidiary Ledger Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>Statement of Account</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Accounts Payable</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Detailed Aging Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>Aging Summary Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>AP Outstanding Balance</DropdownMenu.Item>
                                        <DropdownMenu.Item>Subsidiary Ledger Report</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>GL Report</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Account Analysis</DropdownMenu.Item>
                                        <DropdownMenu.Item>Printing of Books</DropdownMenu.Item>
                                        <DropdownMenu.Item>Journals</DropdownMenu.Item>
                                        <DropdownMenu.Item>Summary of Book by total</DropdownMenu.Item>
                                        <DropdownMenu.Item>Purchase Monitoring</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>All Books</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Account Payable Book</DropdownMenu.Item>
                                        <DropdownMenu.Item>Cash Receipts Book</DropdownMenu.Item>
                                        <DropdownMenu.Item>Income Book</DropdownMenu.Item>
                                        <DropdownMenu.Item>Cash Disbursment Book</DropdownMenu.Item>
                                        <DropdownMenu.Item>Journal Book</DropdownMenu.Item>
                                        <DropdownMenu.Item>Credit/Debit Memo Book</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Disbursment Summary</DropdownMenu.Item>
                                        <DropdownMenu.Item>Disbursment Monitoring</DropdownMenu.Item>
                                        <DropdownMenu.Item>Summary of Transaction</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </li>
                    <li>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button style={{backgroundColor:'white',color:'black'}}>
                                    Tax Reports
                                    <DropdownMenu.TriggerIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item shortcut="⌘ E">Import Chart of account</DropdownMenu.Item>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Excel Report/BIR Form</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Detailed Aging Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>Aging Summary Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>AR Outstanding Balance</DropdownMenu.Item>
                                        <DropdownMenu.Item>Aging Summary Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>Subsidiary Ledger Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>Statement of Account</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Monthly Expanded Tax List / Alphalist Report</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Monthly Expanded Tax List / Alphalist Report</DropdownMenu.Item>
                                        <DropdownMenu.Item>Ewt DAT File</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Input VAT Reports</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Input VAT Reports</DropdownMenu.Item>
                                        <DropdownMenu.Item>Input VAT DAT File</DropdownMenu.Item>
                                        <DropdownMenu.Item>Input VAT for Importation Reports</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Output VAT Reports</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Output VAT Reports</DropdownMenu.Item>
                                        <DropdownMenu.Item>Output VAT DAT File</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </li>
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
export default ReportNavbar