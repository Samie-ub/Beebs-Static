import { Grid } from '@mui/material'
import React from 'react'
import { FooterTopLogo, bottomCover } from '../assets'

const Footer = () => {
    const socialData = [
        {
            icon: <i class="fa-brands fa-facebook"></i>,
            link: "#"
        },
        {
            icon: <i class="fa-brands fa-instagram"></i>,
            link: "#"
        },
        {
            icon: <i class="fa-brands fa-twitter"></i>,
            link: "#"
        },
        {
            icon: <i class="fa-brands fa-linkedin"></i>,
            link: "#"
        },
    ]

    const footerLinks = [
        {
            heading: "For Talent",
            link: [
                {
                    label: "Create an Account",
                    links: "#"
                },
                {
                    label: "Find a Job",
                    links: "#"
                },
                {
                    label: "Help & Guides",
                    links: "#"
                },
                {
                    label: "How it Works",
                    links: "#"
                },
                {
                    label: "Monologues",
                    links: "#"
                },
            ]

        },
        {
            heading: "For Casting Teams",
            link: [
                {
                    label: "Create an Account",
                    links: "#"
                },
                {
                    label: "Find Talent",
                    links: "#"
                },
                {
                    label: "Help & Guides",
                    links: "#"
                },
                {
                    label: "How it Works",
                    links: "#"
                },
                {
                    label: "Post a Job",
                    links: "#"
                },
            ]

        },
        {
            heading: "For  Managers",
            link: [
                {
                    label: "Create an Account",
                    links: "#"
                },
                {
                    label: "Manage Talent ",
                    links: "#"
                },
                {
                    label: "Help & Guides",
                    links: "#"
                },
                {
                    label: "How it Works",
                    links: "#"
                },
                {
                    label: "Open Calls",
                    links: "#"
                },
            ]

        },
        {
            heading: "Support",
            link: [
                {
                    label: "Contact ",
                    links: "#"
                },
                {
                    label: "Pricing ",
                    links: "#"
                },
                {
                    label: "Advertising ",
                    links: "#"
                },
                {
                    label: "Report Content",
                    links: "#"
                },
                {
                    label: "Monologues",
                    links: "#"
                },
            ]

        },
    ]

    const navLink = [
        {
            label: "About",
            link: "#"
        },
        {
            label: "Contact Us ",
            link: "#"
        },
        {
            label: "Privacy Policy",
            link: "#"
        },
        {
            label: "Terms & Conditions",
            link: "#"
        },
    ]
    return (
        <div className='bg-ternary pt-14 pb-0  '>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} lg={11}>
                    <Grid container justifyContent={"space-between"}>
                        <Grid item xs={12} md={3} lg={3.2}>
                            <img src={FooterTopLogo} alt="" className='mb-5' />
                            <p className="text-pale text-base">We are the creative hub that powers Africa. We believe in the immense amount of talent within this region and BrownDot connects amazing creatives to opportunities within film and media.</p>
                            <div className="social-icons flex gap-10 py-5">
                                {
                                    socialData.map((e, index) => {
                                        return (
                                            <a key={index} href="#">{e.icon}</a>
                                        )
                                    })
                                }

                            </div>
                            <p className=' text-pale text-base mb:5 md:mb:0'> © BrownDot, 2024. All rights reserved.</p>
                            <hr className='mt-5 block md:hidden' />
                            <div className='flex md:hidden justify-between'>

                             {
                                 navLink.map((e, index) => {
                                     return (
                                         <a key={index} className='mx-0 lg:mx-10 my-8 text-pale text-sm md:text-base' href={e.link}>{e.label}</a>
                                         )
                                         })
                                         }
                                        </div>
                        </Grid>

                        <Grid item xs={12} md={8} lg={7} className='flex justify-around flex-wrap'>
                            {
                                footerLinks.map((e, index) => {
                                    return (
                                        <div key={index} className="footer-link text-footer w-40" >
                                            <h1 className='font-bold mt-8 text-lg'>{e.heading}</h1>
                                            {e.link.map((linkItem, linkIndex) => (
                                                <a className='flex flex-col items-around text-sm my-4' key={linkIndex} href={linkItem.links}>{linkItem.label}</a>
                                            ))}
                                        </div>
                                    )
                                })
                            }

                        </Grid>

                    </Grid>
                    <hr className='mt-5 hidden md:block'/>
                    <Grid container justifyContent={"center"}>
                        <Grid item xs={12} lg={8} className='flex justify-between'>
                            {
                                navLink.map((e, index) => {
                                    return (
                                        <a key={index} className='mx-0 lg:mx-10 my-8 text-pale text-sm md:text-base hidden md:block' href={e.link}>{e.label}</a>
                                    )
                                })
                            }

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img className='mt-10 w-full' src={bottomCover} alt="" />

        </div>
    )
}

export default Footer