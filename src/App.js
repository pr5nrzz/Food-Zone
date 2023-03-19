import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

const AppLayout = () => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }

    return (
        <>
            {showCart && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main className="bg-image"
                style={{
                    backgroundImage: `url(https://assets.website-files.com/6048f9b32c50f9e335154899/605ded0a2e6bfe0260a4c2a7_Food%20%26%20Drink%20banner.jpeg)`,
                    minHeight: '110vh'
                }}>
                <Meals />
            </main>
        </>
    )
}

export default AppLayout;