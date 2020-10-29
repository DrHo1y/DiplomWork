import React from 'react'
import { PopularCategory } from '../../component/popularCategory'
import { GroupOfGoods } from '../../component/groupOfGoods'

export const Home = () => {
    const title = "test"
    const content = ["1", "2", "3", "4", "5", "6", "7", "8"]
    return (
        <div>
            <PopularCategory />
            <GroupOfGoods title={title} items={content} />
        </div>
    )
}