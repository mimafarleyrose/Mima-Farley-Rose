import React from "react";
import { ExperienceCard } from '../pages/experience'
import './sections.css'

const codeFirstGirlsDescription =[
    'Presenting 2 hour long sessions along with other instructors on basics of web development',
    'Answering questions from students on slack'
]

const boclipsJobDescription =[
    'Working mainly with React, Typescript and Kotlin.',
    'Using test driven development, testing with Jest, React Testing Library and Enzyme.',
    'Shipping code regularly on both the frontend and backend.',
    'Working with Bit components']

export const ExperienceSection = (props) => {

    return (
        <div className={'experience-section'}>
            <div className={'experience-title'}>{'Places I\'ve worked'}</div>
             <ExperienceCard title={'Boclips'}
                             role={'Software Engineer'}
                            experienceLength={'6 months'}
                            skills={['Internship','Javascript', 'Typescript','React','Kotlin','Testing']}
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

        />
        </div>
    );
};