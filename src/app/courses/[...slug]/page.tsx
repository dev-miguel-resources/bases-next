import { courses } from "@/data/courses";

const getData = (slug: string) => {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            const data = courses.find(course => course.slug === slug)
            return resolve(data);
        }, 5000);
    })
}

export default async function Topic({params}: { params: { slug: string[]}}) {

    const course = await getData(params.slug[0])

    return (
        <div>
            <h1>{course?.title}</h1>
            <p>{course?.description}</p>
        </div>
    )
}

