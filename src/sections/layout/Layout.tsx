import { Outlet } from "react-router-dom";

import Brand from "./Brand";
import styles from "./Layout.module.scss";

export function Layout() {
	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<Brand />
					<h1 className={styles.app__brand}>DevDash_</h1>
				</section>
			</header>
			<Outlet />
		</>
	);
}
