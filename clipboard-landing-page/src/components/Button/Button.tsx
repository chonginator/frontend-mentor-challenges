import { ButtonProps } from "./ButtonProps"

const Button = ({
    children,
    variant = "primary"
}: ButtonProps) => {
    const variantClassName = variant === "primary" ? "btn-primary" : "btn-secondary"
    
    return (
        <button className={`btn ${variantClassName}`}>
            {children}
        </button>
    )
}


export default Button