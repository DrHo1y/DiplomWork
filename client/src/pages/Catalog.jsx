import React from 'react'
import { GroupOfGoods } from '../component/groupOfGoods'

export const Catalog = () => {
    return (
        <div>
            <GroupOfGoods 
                title="Аудиотехника" 
                items={["Колонки", "Наушники", "Радиоприемники", "MP3-плееры"]}
            />
            <GroupOfGoods
                title="Зарядные устройства"
                items={["Зарядные блоки", "Провода", "PowerBank"]}
            />
            <GroupOfGoods
                title="Компьютерная переферия"
                items={["Флеш-накопители", "Клавиатуры", "Геймпады", "Мышки"]}
            />
            <GroupOfGoods
                title="Прочее"
                items={["Значки", "Часы", "Телевизионные антены", 
                    "ТВ-приставки", "Фитнесс-трекеры"]}
            />
        </div>
    )
}