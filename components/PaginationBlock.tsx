import {ReactNode} from "react";
import styles from "../styles/PaginationBlock.module.css"

type Props = {
    children: ReactNode
}

const PaginationBlock = ({children}: Props) => {

    return (
        <div className={styles.main}>
            {children}
        </div>
    );
};

export default PaginationBlock;
