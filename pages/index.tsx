import {ChangeEvent, useEffect, useState} from "react";
import styles from '../styles/Home.module.css'
import {ItemType} from "@/types/types";
import Grid from "@/components/Grid";
import PaginationBlock from "@/components/PaginationBlock";
import Button from "@/components/Button";

export default function Home() {
    const [items, setItems] = useState<ItemType[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    const getPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const getNextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setCurrentPage(+e.target.value)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=20`)
            const data = await response.json()
            setItems(data)
        }
        fetchData()
    }, [currentPage])

    return (
        <div className={styles.main}>
            <Grid items={items}/>
            <PaginationBlock>
                <Button type={"default"} onClick={getPrevPage} disabled={currentPage === 1}>
                    Previous Page
                </Button>
                <input className={styles.input}
                       value={currentPage}
                       onChange={onChangeHandler}
                />
                <Button type={"success"} onClick={getNextPage}>
                    Next Page
                </Button>
            </PaginationBlock>
        </div>
    )
}
