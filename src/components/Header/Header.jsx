import { Menu } from "../Menu/Menu";
import { MenuMobile } from "../MenuMobile/MenuMobile";

import styles from "./Header.module.scss";

export const  Header = () => {
    return (
        <>
            <header className = { styles.header }>
                <div className = { styles.headerContainer }>
                    <div className = { styles.headerBrand}>
                        <span className = { styles.headerBrandName }>LOVT</span>
                        <span className = { styles.headerSlogan }>You Love, <br /> your loft!</span>
                    </div>
                    <Menu />
                    <MenuMobile />
                </div>
            </header>
        </>
    )
};