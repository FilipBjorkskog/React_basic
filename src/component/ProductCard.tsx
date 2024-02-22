import React from 'react'

type Products = {
    data: {
        id: number,
        name: string,
        stock: number,
        price: number;
        imgurl: string
    }

}

export default function ProductCard({ data }: Products) {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>stock: {data.stock}</p>
            <img src={data.imgurl} alt="" height={""} width={"130px"} />
            <p>{data.price}</p>
        </div>
    )
}
