import React from "react";
import { ExperienceCard } from '../pages/experience'
import './sections.css'

const boclipsJobDescription = 'I have been working on a video interactivity project that has allowed me to be involved in feature development from  early-stage research to implementation of a prototype. During this project I have had the chance to pair program at times, I have found this really valuable for building my understanding of coding concepts.  I have also worked on some other features which have been pushed out to the product, whilst working on these I learned to use Test Driven Development and I found this a very helpful way to work which has enabled me to write more robust code. The main language I have been programming in is Typescript with React, but I have also worked on projects using Kotlin and plain Javascript.'
const codeFirstGirlsDescription = 'I have been working on a video interactivity project that has allowed me to be involved in feature development from  early-stage research to implementation of a prototype. During this project I have had the chance to pair program at times, I have found this really valuable for building my understanding of coding concepts.  I have also worked on some other features which have been pushed out to the product, whilst working on these I learned to use Test Driven Development and I found this a very helpful way to work which has enabled me to write more robust code. The main language I have been programming in is Typescript with React, but I have also worked on projects using Kotlin and plain Javascript.'

export const ExperienceSection = (props) => {

    return (
        <>
             <ExperienceCard title={'Boclips'}
                             role={'Software Engineer'}
                          experienceLength={'6 months'}
                          skills={['Internship','Javascript', 'Typescript','React','Kotlin','Testing']}
                          description={boclipsJobDescription}
                          theme={props.theme}
                             href={'https://www.boclips.com/'}

    />
        <ExperienceCard title={'Code First Girls'}
                        role={'Instructor'}
                        skills={['Teaching', 'HTML','CSS', 'Javascript', 'Mentoring']}
                        description={codeFirstGirlsDescription}
                        theme={props.theme}
                        href={'https://codefirstgirls.org.uk/'}

        />
        </>
    );
};