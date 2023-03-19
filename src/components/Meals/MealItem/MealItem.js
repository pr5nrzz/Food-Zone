import MealItemForm from "./MealItemForm";

const MealItem = props => {
    const price = `$${props.price}`;

    return (
        <li className="list-group-item list-group-item-action d-flex gap-3 py-3">
            <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <h5 className="mb-0" style={{ color: 'saddlebrown' }}>{props.name}</h5>
                    <p className="mb-0 opacity-75"><em>{props.description}</em></p>
                    <small className="fw-semibold">{price}</small>
                </div>
                <div>
                    <MealItemForm id={props.id} />
                </div>
            </div>
        </li>
    )
}

export default MealItem;