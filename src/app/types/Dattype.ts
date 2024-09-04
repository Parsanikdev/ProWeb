export interface Root {
    personalDetail: PersonalDetail
    side: Side[]
    Exprepience: Exprepience[]
}

export interface PersonalDetail {
    name: string
    family: string
    birthDay: number
    location: string
    imageLink: string
    links: Link[]
    Phone: string[]
    education: Education[]
}

export interface Link {
    title: string
    link: string
}

export interface Education {
    title: string
    from: string
    to: string
    degree: string
}

export interface Side {
    sideName: string
    skills: string[]
}

export interface Exprepience {
    title: string
    rule: string
    Date: Date
    shortdescryiption: string
    description: string
    skills: string[]
    links: Link2[]
}

export interface Date {
    from: string
    to: string
}

export interface Link2 {
    title: string
    link: string
}



interface IData extends Root{
}



export default IData;