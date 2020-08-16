import React from "react";
import './sections.css'
// import Photo from './photo-of-me.jpg'

const aboutMeText = 'I am highly motivated, confident and keen to develop in a technical environment. After working in two fast-growth tech companies, I caught the engineering bug. I taught myself to code through a mixture of online courses, personal projects and a course with Code First Girls  and as a result I have secured an internship in a software engineering team working on video interactivity. This has allowed me to hone my technical skills and gain practical experience of agile development and working in a busy tech team, shipping new features frequently.  I am keen to grow as a developer and so I am looking for  new learning challenges in my next role'
// 'Hello! I\'m Mima, a software engineer based in London.\n' +
// '\n' +
// 'I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.\n' +
// '\n' +
// 'Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.\n' +
// '\n' +
// 'Here are a few technologies I\'ve been working with recently:\n' +
// '\n' +
// 'JavaScript (ES6+)\n' +
// 'HTML & (S)CSS\n' +
// 'React\n' +
// 'Vue\n' +
// 'Node.js\n' +
// 'WordPress\n'

export const AboutSection = (props) => {

    return (
        <div className={'about-me-section'}>
            <div className={'about-section'}>
            <div id={"about-photo"}>
            {/*<a href={'https://www.linkedin.com/in/mima-farley-rose-878351161/'} target={'_blank'}><img src={} alt={'photo of me'} className={`about-me-photo__${props.theme?'light':'dark'}`}/></a>*/}
            </div>
            <div className={'about-me-description'}>
                <div className={`about-me-title`}>About Me</div>
                <div className={`about-me-text`}>{aboutMeText}</div>
            </div>
            </div>
        </div>
    );
};