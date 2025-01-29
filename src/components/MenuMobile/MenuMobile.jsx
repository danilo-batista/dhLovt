import { useRef, useState } from "react";
import { useClickAway } from "react-use";

import { routes } from "../../routes";

import styles from "./MenuMobile.module.scss";
import { Sling as Hamburger } from 'hamburger-react'

export const MenuMobile = () => {
    const [ isOpen, setOpen ] = useState(false);
    
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));
    
    return (
        <>
        <nav ref={ref} className={styles.headerMenuMobile} >

            <Hamburger
                toggled={isOpen}
                size={24}
                direction="left"
                toggle={setOpen}
                color="#AAA"
            />

            { isOpen && (
                <div className={styles.headerMenuOptions}>
                    <ul className={styles.headerMenuListOption}>
                        {routes.map((route) => {
                            return (
                                <li key={route.title}>
                                    <a
                                    onClick={() => setOpen((prev) => !prev)}
                                    href={ route.href } 
                                    className={styles.headerMenuListOptionLink}>
                                        {route.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}

        </nav>
        </>
    )
}