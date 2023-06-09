import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css";


const AppLayout = () => {
    return (
        <>
            <Cart />
            <Header />
            <main className="bg-image"
                style={{
                    backgroundImage: `url(https://assets.website-files.com/6048f9b32c50f9e335154899/605ded0a2e6bfe0260a4c2a7_Food%20%26%20Drink%20banner.jpeg)`,
                    minHeight: '100vh'
                }}>
                <Meals />
            </main>
        </>
    )
}

export default AppLayout;