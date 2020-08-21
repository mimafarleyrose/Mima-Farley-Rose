import React from "react";
import { ExperienceCard } from '../experience-card'
import './experience-section.css'
import '../sections.css'

const codeFirstGirlsDescription =[
    'Presenting 2-hour long sessions with other instructors on the basics of web development',
    'Answering questions from students on Slack'
]

const screenCloudDescription =[
    'Automating repeat sales processes using Zapier',
    'Creating dashboards in Google Data Studio to track key metrics',
    'Building out processes for a new customer satisfaction team to allow one person to manage over 3000 customers effectively'
]

const boclipsJobDescription =[
    'Working mainly with React, Typescript and Kotlin',
    'Using test-driven development, testing with Jest, React Testing Library and Enzyme',
    'Shipping code regularly on both the front-end and back-end',
    'Working with Bit components']

export const ExperienceSection = (props) => {

    return (
        <div className={'experience-section'}>
            <div className={'experience-title'}>{'A Few of the Places I\'ve Worked'}</div>
             <ExperienceCard title={'Boclips'}
                             role={'Software Engineering Intern'}
                            skills={['Javascript', 'Typescript','React','Kotlin','Testing']}
                            description={boclipsJobDescription}
                            theme={props.theme}
                             visible={true}
                             href={'https://www.boclips.com/'}
    />
        <ExperienceCard title={'Code First Girls'}
                        role={'Instructor'}
                        skills={['Teaching', 'HTML','CSS', 'Javascript', 'Mentoring']}
                        description={codeFirstGirlsDescription}
                        theme={props.theme}
                        visible={true}

                        href={'https://codefirstgirls.org.uk/'}

        /><ExperienceCard title={'ScreenCloud'}
                        role={'Business Development Executive'}
                        skills={['Sales', 'Customer Support','Technical Demos', 'Zapier', 'Automation']}
                        description={screenCloudDescription}
                        theme={props.theme}
                        visible={true}

                        href={'https://screen.cloud/'}

        />
        </div>
    );
};