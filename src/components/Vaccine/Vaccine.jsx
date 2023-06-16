import React from 'react'
import './Vaccine.css'
import image from '../../assets/images/vaccine1.jpg'

const Vaccine = () => {
  return (
    <section className="vaccine">
        <div className="container">
            <div className="vaccine-info text-left">
                <div className="left">
                    <h2>As a veterinarian and lover of animals.</h2>
                    <p>Lorem Ipsum available but the majoty suffered alteration in some form, by humour randomised words.</p>
                    <button className="btn btn-vaccine">Our service</button>
                </div>
                <div className="right">
                    <a href="" target="_blank">
                        <div className='image'>
                            <img src={image} alt="" className='image' />
                            <div className="video-icon">
                                <i className="fas fa-play-circle"></i>
                            </div>
                            <div className='box'></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Vaccine