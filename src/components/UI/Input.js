const Input = props => {
    return (
        <div>
            <label className="me-2 fw-semibold" htmlFor={props.input.id}>{props.label}</label>
            <input className="text-center" {...props.input} />
        </div>
    )
}

export default Input;