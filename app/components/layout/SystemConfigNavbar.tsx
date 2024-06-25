
'use client'
import { Avatar, Box, Button, Container, DropdownMenu, Flex, Grid, Section, Separator } from '@radix-ui/themes'
import SwitchCompanyButton from './SwitchCompanyButton'
import { HamburgerMenuIcon, BellIcon } from '@radix-ui/react-icons'
import logo from './../../../public/Fudz_logo.ico'
import SlideMenu from './SlideMenu'
import { RiDashboardLine } from 'react-icons/ri'
import NavLink from '../ui/NavLink'
const SystemConfigNavbar = () => {
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

                <ul className='flex items-end gap-4'>
                    <li>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button style={{backgroundColor:'white',color:'black'}}>
                                    File Setup
                                    <DropdownMenu.TriggerIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item shortcut="⌘ E">Chart of Account</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ D">General Library</DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item shortcut="⌘ N">GL Beginning Balance</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ N">Currency Rate Setup</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </li>
                    <li>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button style={{backgroundColor:'white',color:'black'}}>
                                    System Configurations
                                    <DropdownMenu.TriggerIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item shortcut="⌘ N">Aging Range</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ N">Currency</DropdownMenu.Item>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Account Management</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Access Controls</DropdownMenu.Item>
                                        <DropdownMenu.Item>User Accounts</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Book</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Book codes</DropdownMenu.Item>
                                        <DropdownMenu.Item>Journal book</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Chart</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Chart class</DropdownMenu.Item>
                                        <DropdownMenu.Item>Chart group</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>General Library</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Industry setup</DropdownMenu.Item>
                                        <DropdownMenu.Item>Category setup</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>Tax</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Expanded Tax Withheld Library</DropdownMenu.Item>
                                        <DropdownMenu.Item>Final Tax Withheld Library</DropdownMenu.Item>
                                        <DropdownMenu.Item>Input vat setup</DropdownMenu.Item>
                                        <DropdownMenu.Item>Output vat setup</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>
                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>More setup</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Bank setup</DropdownMenu.Item>
                                        <DropdownMenu.Item>Department setup</DropdownMenu.Item>
                                        <DropdownMenu.Item>Project setup</DropdownMenu.Item>
                                        <DropdownMenu.Item>Terms setup</DropdownMenu.Item>
                                        <DropdownMenu.Item>Book unit setup</DropdownMenu.Item>
                                        <DropdownMenu.Item>Unit setup</DropdownMenu.Item>
                                        <DropdownMenu.Item>Subcon setup</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>

                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </li>
                    <li>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button style={{backgroundColor:'white',color:'black'}}>
                                    Utility
                                    <DropdownMenu.TriggerIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item shortcut="⌘ E">Import Chart of account</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ E">Import General Library</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ E">Transaction Locking</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ E">Closing of Nominal Account</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ E">Import PO</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ E">Commission Upload</DropdownMenu.Item>

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
export default SystemConfigNavbar