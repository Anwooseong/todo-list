import classes from './Button.module.css'

const Button = (props) => {

    const combinedClassName = `${classes.button} ${classes[props.between]} ${classes[props.selection]}`

    return (
        <button
            className={combinedClassName}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button