import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';

const LeftBanner = () => {
    const [textBanner] = useTypewriter({
        words: ['Frontend Developer', 'Software Developer'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    });

    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-3'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>
                    Hi, I'm {" "}
                    <span className='text-designColor capitalize'>İpek Coşkun</span></h1>
                <h2 className='text-4xl font-bold text-white'>
                    a {" "}
                    <span className='text-white'>/* </span>
                    <span>{textBanner}</span>
                    <Cursor
                        cursorBlinking="true"
                        cursorStyle=" */"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    A frontend developer passionate about crafting modern and user-centric web interfaces. I specialize in HTML, SCSS, JavaScript, and frameworks like React, Next, Vue.
                    I enjoy transforming complex ideas into simple, elegant solutions. My attention to detail ensures that every project I work on is both functional and visually appealing.
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaInstagram />
                        </span>
                        <span className='bannerIcon'>
                            <FaTwitter />
                        </span>
                        <span className='bannerIcon'>
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Best skill on</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <SiNextdotjs />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                        <span className='bannerIcon'>
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner