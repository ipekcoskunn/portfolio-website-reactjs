import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import LeftBanner from './LeftBanner';
// import RightBanner from './RightBanner';

const Banner = () => {

    const [textBanner] = useTypewriter({
        words: ['Frontend Developer', 'Software Developer'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    });

    return (
        <section
            id="home"
            className="w-full h-[800px] py-20 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
        >
            <div className='w-1/2'>
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
            </div>
            <div className='w-1/2'>
            </div>
            {/* <LeftBanner />
            <RightBanner /> */}
        </section>
    );
}

export default Banner