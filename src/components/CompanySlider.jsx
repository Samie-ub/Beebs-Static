import React, { useEffect } from 'react'
import { companyFive, companyFour, companyOne, companyThree, companyTwo } from '../assets'

const CompanySlider = () => {
    const comapnyLogo = [
        {
            imgSrc: companyOne
        },
        {
            imgSrc: companyTwo
        },
        {
            imgSrc: companyThree
        },
        {
            imgSrc: companyFour
        },
        {
            imgSrc: companyFive
        }
    ]
    useEffect(() => {
        const elements = document.querySelectorAll('.tt-scrolling-text');
        elements.forEach(element => {
            const speed = element.getAttribute('data-scroll-speed');
            const innerElement = element.querySelector('.tt-scrolling-text-inner');
            if (innerElement) {
                innerElement.style.animationDuration = `${speed}s`;
            }
        });
    }, []);
    return (
        <div className='block lg:hidden'>
            <div className="tt-scrolling-text overflow-x-hidden overflow-y-hidden" data-scroll-speed="20">
                <div className="tt-scrolling-text-inner flex items-center mt-3 gap-10" data-text="">
                    {
                        comapnyLogo.map((e) => {
                            return (

                                <img src={e.imgSrc} alt="" />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default CompanySlider