import styles from "../styles/Button.module.css"
import {ReactNode} from "react";
import Link from "next/link";

type Props = {
    type?: 'default' | 'success' | 'danger'
    size?: 'small' | 'large'
    displayType?: 'block' | 'inline'
    children: ReactNode
    onClick?: () => void
    disabled?: boolean
    href?: string
}


const Button = ({type, size, displayType, onClick, children, disabled, href}: Props) => {
    const className = `${styles.btn} ${styles[type]} ${styles[size]} ${styles[displayType]}`

    return (
        <>
            {href
                ? <Link href={'/'} className={className}>{children}</Link>
                : <button className={className} onClick={onClick} disabled={disabled}>{children}</button>
            }
        </>
    );
};

export default Button;
