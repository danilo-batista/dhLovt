import { routes } from "../../routes";
import styles from "./Menu.module.scss";

export const Menu = () => {
    
    return (
        <>
        <nav className={styles.headerMenu}>
            <ul className={styles.headerMenuOptions}>
                { routes.map((routes) => {
                    const { title, href } = routes;
                    return (
                        <>
                        <li>
                            <a
                                href={href}
                                className={styles.headerMenuListOptionLink}>
                                    {title}
                            </a>
                        </li>
                        </>
                    );
                })}
            </ul>
        </nav>
        </>
    )
}