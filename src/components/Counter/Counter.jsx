import React from 'react'
import './Counter.css'
import { counterData } from '../../data/Counter'

const Counter = () => {
  return (
    <section className="counter">
        <div className="container">
            <div className="counter-info">
                {
                    counterData.map(counter => (
                        <div className="inner" key={counter.id}>
                            <div className="image">
                                <img src={counter.image} alt="" />
                            </div>
                            <div className='details'>
                                <div className="count">+{counter.count}</div>
                                <div className="title">{counter.title}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Counter