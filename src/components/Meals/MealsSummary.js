import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={`px-3 text-white ${styles.mealsSummary}`}>
            <h2>Delicious Food, Delivered To You</h2>
            <p className="lead">
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p className="lead">
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </section>
    )
}

export default MealsSummary;