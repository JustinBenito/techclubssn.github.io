import React from 'react';
import { useEffect } from 'react';
import './Hackinfinity.css'

import agriIcon from './icons/agritech.svg'
import climateIcon from './icons/climate.svg'
import cyberIcon from './icons/cyber.svg'
import fintechIcon from './icons/fintech.svg'
import innovationIcon from './icons/innovation.svg'
import medicalIcon from './icons/HealthcareIcon.svg'
import womenIcon from './icons/women.svg'

import phone from './icons/phone.svg'
import person from './icons/person.svg'
import calendar from './icons/calendar.svg'

const domains = [
    {
        name: 'FinTech',
        icon: fintechIcon,
        text: 'Solving critical problems in finance services and processes.'
    },
    {
        name: 'AgriTech',
        icon: agriIcon,
        text: 'Providing realistic and feasible solutions to enhance agricultural productivity using technological advancements.'
    },
    {
        name: 'Security',
        icon: cyberIcon,
        text: 'Apply technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks.'
    },
    {
        name: 'Medical and Healthcare',
        icon: medicalIcon,
        text: 'Enhancing medical facilities and healthcare solutions using intelligent technological innovation.'
    },
    {
        name: "Assistive Technology",
        icon: womenIcon,
        text: "Harnessing the power of technology to develop solutions that provide assistive, adaptive, and rehabilitative devices for people with disabilities and the elderly."
    },
    {
        name: 'Education',
        icon: climateIcon,
        text: 'Innovative solutions to combat illiteracy and improve teaching learning process.'
    },
    {
        name: 'Student Innovation!   ( open idea ) ',
        icon: innovationIcon,
        text: 'Don’t want to be confined to the above domains? Feel free to choose your own topic and problem statement. Impress us!'
    },
]

const Hackinfinity = () => {
    useEffect(()=> {
        window.scrollTo(0,0);
    },[])
    return (
        <div>
            <div className='hi-header'>
                <div className='hi-title-line' />
                <h1 className='hi-title'>HACKINFINITY</h1>
                <div className='hi-title-line' />
            </div>
            <div className='hi-about'>
                <p className='hi-about-para'>A 24-hour hackathon where you can prototype a groundbreaking solution to real-life problems. Brave against the time crunch and grab this opportunity to win exciting cash prizes upto <span style={{color: 'orange'}}>₹25,000</span>!!!</p>
                <br/>
                <p className='hi-about-para'>Participants are encouraged to use technologies such as AI, IoT, AR/VR and Blockchain to build products that can solve problems in the domains given below!</p>
                <a className='hi-link' href='/hackinfinity'> 
                {/*  target='_blank' rel="noopener noreferrer" */}
                    <button className='hi-button' >Registrations Starting Soon!</button>
                </a>
            </div>
            <h1 className='hi-sub-title'>DOMAINS</h1>
            <div className='hi-domains-section'>
                {domains.map(item => ( 
                    <div className='hi-domain-preview'>
                        <img className='hi-domain-icon' src={item.icon} alt={item.name} />
                        <div>
                            <h1 className='hi-domain-title'>{item.name}</h1>
                            <p className='hi-domain-para'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='hi-sub-title'>DETAILS AND SCHEDULE</h1>
            <div className='hi-details-section' >
                <div className='hi-details-left'>
                    <h1 className='hi-date-title'>DAY 1</h1>
                    <div className='hi-details-container'>
                        <div>
                            <h1 className='hi-details-time'>10.00 AM</h1>
                            <h1 className='hi-details-time'>11.00 AM</h1>
                            <h1 className='hi-details-time'>03.00 PM</h1>
                            <h1 className='hi-details-time'>10.00 PM</h1>
                        </div>
                        <div>
                            <h1 className='hi-details-event'> Introduction</h1>
                            <h1 className='hi-details-event'> Hackathon Starts</h1>
                            <h1 className='hi-details-event'> First Review</h1>
                            <h1 className='hi-details-event'>Second Review</h1>
                        </div>
                    </div>
                    <h1 className='hi-date-title'>DAY 2</h1>
                    <div className='hi-details-container'>
                        <div>
                            <h1 className='hi-details-time'>08.00 AM</h1>
                            <h1 className='hi-details-time'>11.00 AM</h1>
                            <h1 className='hi-details-time'>12.00 PM</h1>
                            <h1 className='hi-details-time'>03.00 PM</h1>
                        </div>
                        <div>
                            <h1 className='hi-details-event'>Third Review</h1>
                            <h1 className='hi-details-event'>Hackathon ends</h1>
                            <h1 className='hi-details-event'>Final Presentation</h1>
                            <h1 className='hi-details-event'>Valedictory</h1>
                        </div>
                    </div>
                </div>
                <div className='hi-white-line' />
                <div className='hi-details-right'>
                    <div className='hi-align-center'>
                        <img className='hi-details-icon' src={person} alt='person' />
                        <h1 className='hi-details' >3-4 per team</h1>
                    </div>
                    <div className='hi-align-center'>
                        <img className='hi-details-icon' src={calendar} alt='date' />
                        <h1 className='hi-details' >3-4th Oct 2022</h1>
                    </div>
                    <div className='hi-align-center'>
                        <img className='hi-details-icon' src={phone} alt='contact' />
                        <h1 className='hi-details' >Rohith Ram : 9789954509</h1>
                        <h1 className='hi-details' >Bharath Vishal: 9940656712</h1>
                    </div>
                </div>
            </div>
            <h1 className='hi-sub-title'>CASH PRIZES</h1>
            <div className='hi-prize-section'>
                    <div>
                        <h1 className='hi-date-title'>Rs. 12,000</h1>
                        <h1 className='hi-details'>Winner</h1>
                    </div>
                    <div>
                        <h1 className='hi-date-title'>Rs. 8,000</h1>
                        <h1 className='hi-details'>Runner Up</h1>
                    </div>
                    <div>
                        <h1 className='hi-date-title'>Rs. 5,000</h1>
                        <h1 className='hi-details'>2nd runner Up</h1>
                    </div>
            </div>
            <h1 className='hi-sub-title'>GENERAL INSTRUCTIONS</h1>
            <div className='hi-instructions-section'>
                <ol>
                    <li className='hi-details-event'>All the team members should have proper internet connection.</li>
                    <li className='hi-details-event'>Participants are required to have their own components and software.</li>
                    <li className='hi-details-event'>Teams will be allotted separate mentors.</li>
                    <li className='hi-details-event'>Participants will be informed of the order in which reviews will happen and must attend their meetings at the specified times.</li>
                    <li className='hi-details-event'>Mentorship for technical skills will be given.</li>
                    <li className='hi-details-event'>Participants are supposed to build their product during the Hackathon.</li>
                    <li className='hi-details-event'>Product will be judged based on Innovation, Impact, Feasibility and Marketability.</li>
                    <li className='hi-details-event'>Product can be a mix of hardware and software technologies, but can be purely software or hardware based as well.</li>
                    <li className='hi-details-event'>Participants are allowed to use existing libraries or components, however only the work done during the 24 hours will be considered for evaluation.</li>
                    <li className='hi-details-event'>Organizers will be available for any other help/queries.</li>

                    {/* <li className='hi-details-event'>It is not necessary that all participants must be from same institute.</li>
                    <li className='hi-details-event'>All the team members should have proper internet connection.</li>
                    <li className='hi-details-event'>Date and time: <span style={{color:'orange'}}>8th Oct 2021</span></li>
                    <li className='hi-details-event'>Teams of a minimum of 1 and a maximum of 6 people are allowed.</li>
                    <li className='hi-details-event'>Participants are required to have their own components and software.</li>
                    <li className='hi-details-event'>Mentorship for technical skills will be given.</li>
                    <li className='hi-details-event'>Participants are supposed to build their product during the Hackathon.</li>
                    <li className='hi-details-event'>Product will be judged based on Innovation, Impact, Feasibility and Marketability.</li>
                    <li className='hi-details-event'>Product can be a mix of hardware and software technologies, but can be purely software or hardware based as well.</li>
                    <li className='hi-details-event'>Participants are allowed to use existing libraries or components, however only the work done during the 24hrs will be considered for evaluation.</li> */}
                </ol>
            </div>
            <h1 className='hi-sub-title'>CONTACT</h1>
            <div className='hi-prize-section'>
                    <h1 className='hi-details'>Rohith Ram : 9789954509</h1>
                    <h1 className='hi-details'>Bharath Vishal: 9940656712</h1>
            </div>
        </div>
    )
}

export default Hackinfinity;