import React from 'react'
import './Animal.css'
import animal from '../../assets/images/animal.png'

const Animal = () => {
  return (
    <section className="animal">
        <div className="container">
            <div className='animal-info'>
                <div className="left">
                    <h1>First I wanted to be a veterinarian</h1>
                    <p>
                    Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words
                    </p>
                    <div>
                        <button className='btn btn-animal-contact'>Contact us</button>
                        <button className='btn btn-animal-service'>Our service</button>
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src={animal} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Animal