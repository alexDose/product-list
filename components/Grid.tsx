import styles from "../styles/Grid.module.css";
import {ItemType} from "@/types/types";
import Item from "@/components/Item";

type Props = {
    items: ItemType[]
}

const Grid = ({items}: Props) => {
    return (
        <div className={styles.grid}>
            {items.length
                ? items.map(item => (
                    <Item key={item.id} item={item}/>
                ))
                : <span className={styles.empty}>List is empty</span>}
        </div>
    );
};

export default Grid;
