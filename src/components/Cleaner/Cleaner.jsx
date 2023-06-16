import React from 'react'
import { cleanerData } from '../../data/Cleaner'
import './Cleaner.css'


const Cleaner = () => {
  return (
    <section className="cleaner">
        <div className="container">
            <div className="section-head">
                <h1>Title here</h1>
                <h3>Lorem Ipsum available, but the majority have suffered alteration in some form.</h3>
            </div>

            <div className="cleaner-info">
                {
                    cleanerData.map(cleaner => (
                        <div className="inner" key={cleaner.id}>
                            <div className="image">
                                <img src={cleaner.image} alt="" />
                            </div>
                            <div className="details">
                                <h4 className="title">{cleaner.title}</h4>
                                <p>{cleaner.details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Cleaner