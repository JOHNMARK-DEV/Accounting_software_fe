'use client'
import { Button, Flex, TextField } from "@radix-ui/themes"
import FudzTextField from "./TextFields/FudzTextField"
import FudzLabel from "./FudzLabel"

interface IFudzTextField {
    label?: string,
    className?: string | undefined
}

const FudzUDF = (props: IFudzTextField) => {
    return (
        <Flex direction="column" overflow={'auto'} gap={'2'} justify={'start'} width={"20vw"}>
            <FudzLabel label="User Defined Fields" />
            <Flex direction={'column'} overflow={'auto'}  className="max-h-72">
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
                <FudzTextField label="Test" />
            </Flex>
        </Flex>

    )
}
export default FudzUDF