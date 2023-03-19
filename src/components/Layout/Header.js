import styles from "./Header.module.css";

const Header = props => {
    return (
        <>
            <header className={styles.header}>
                <div className="px-3 py-2" >
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="#" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none fs-4">
                                Food Zone
                            </a>
                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="#" className="text-white text-decoration-none" onClick={props.onShowCart}>
                                        <i className="bi bi-cart px-2"></i>
                                        <small>0</small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;