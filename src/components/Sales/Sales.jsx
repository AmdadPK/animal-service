import React from 'react'
import './Sales.css'
import image1 from '../../assets/images/sale1.jpg'
import { salesData } from '../../data/Sales'

const Sales = () => {
  return (
    <section className='sales'>
        <div className="container">
            <div className="section-head">
                <h1>Title here</h1>
                <h3>Lorem Ipsum available, but the majority have suffered alteration in some form.</h3>
            </div>

            <div className="sale-info">
                {
                    salesData.map(sale => (
                    <div className="inner" key={sale.id}>
                        <div className="image">
                            <img src={sale.image} alt="" />
                        </div>
                        <div className="details">
                            <div className="price">
                                <span>${sale.price}</span>
                                <span>${sale.oldPrice}</span>
                            </div>
                            <button className="btn-buy-now">Buy now</button>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Sales