'use client' 
import { Box, Container, Grid, Section } from '@radix-ui/themes'
import react from 'react'
import { TriangleDownIcon } from '@radix-ui/react-icons'

const SwitchCompanyButton = () => {
    return (
        <>  
            <Box
                py="8" 
                style={{ backgroundColor: 'white', minHeight: '30px', minWidth: '210px', border: '1px solid var(--cm-sys-color-outline,#80868b)', borderRadius: "4" , padding:'10px'}}
            >
                <div className='flex'>
                    <div className='flex justify-around  decoration-sky-500 '>
                        LIFESAVER MEDICORDS
                    </div>
                    <TriangleDownIcon fontSize={'20px'} className='self-center w-3.5' /> 
                </div>
            </Box>

        </>
    )
}
export default SwitchCompanyButton