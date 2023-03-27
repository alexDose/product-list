import styles from "../styles/Item.module.css";
import {ItemType} from "@/types/types";

type Props = {
    item: ItemType
}

const Item = ({item}: Props) => {
    const getNameItem = (item) => {
        const firstWord = item.split(' ')[0]
        return (firstWord[0].toUpperCase() + firstWord.slice(1, firstWord.length))
    }
    const getBrand = (item) => (
        item % 3 === 0
            ? 'Adidas'
            : item % 2 === 0
                ? 'Puma'
                : 'Nike'
    )
    const getBadge = (item) => {
        if (item % 5 === 0) {
            return 'Top'
        } else if (item % 3 === 0) {
            return 'New'
        }
        return
    }

    return (
        <div className={styles.item} style={{backgroundImage: `url(${item.url})`}}>
            <h2 className={styles.title}>{getNameItem(item.title)}</h2>
            <h3 className={styles.brand}>
                <span>{getBrand(item.id)} </span>
                {getBadge(item.id) && <span className={styles.badge}>{getBadge(item.id)}</span>}
            </h3>
        </div>
    );
};

export default Item;
