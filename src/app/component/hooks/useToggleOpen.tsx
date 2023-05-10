import React, {useEffect, useRef, useState} from 'react';
import {useCycle} from "framer-motion";

function UseToggleOpen() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return {isOpen, setIsOpen}
}

export default UseToggleOpen;