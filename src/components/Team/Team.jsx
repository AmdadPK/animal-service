import React from 'react'
import './Team.css'
import { teamData } from '../../data/Team'

const Team = () => {
  return (
    <section className="team">
        <div className="container">
            <div className="section-head">
                <h1>The vetcare team</h1>
                <h3>Lorem Ipsum available, but the majority have suffered alteration in some form.</h3>
            </div>

            <div className="team-info">
                {
                    teamData.map(team => (
                        <div className="inner" key={team.id}>
                            <div className="image">
                                <img src={team.image} alt="" />
                            </div>
                            <div className="details">
                                <h4 className="name">{team.name}</h4>
                                <h6 className='designation'>{team.designation}</h6>
                                <div className="social">
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Team