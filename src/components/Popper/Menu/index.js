import Tippy from '@tippyjs/react/headless';

import PopperWrapper from '~/components/Popper/Wrapper';
import MenuItem from './MenuItem';

function Menu({ children, items = [], onChange }) {
    const handleItemClick = (item) => {
        onChange && onChange(item);
    };

    return (
        <Tippy
            interactive
            delay={[0, 300]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className="menu-popper" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {items.map((item, index) => (
                            <MenuItem key={index} data={item} onClick={() => handleItemClick(item)} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
