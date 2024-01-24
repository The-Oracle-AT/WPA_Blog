import { useState } from 'react';
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <button onClick={toggle}>Dropdown</button>
            {isOpen && (
                <div>
                    <a href="/">All posts</a>
                    <a href="/">Categories</a>
                </div>
            )}
        </div>
    )
};
export default DropdownMenu;