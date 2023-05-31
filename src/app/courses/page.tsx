import { courses } from "@/data/courses";
import Link from "next/link";

export default function Courses() {
  return (
    <div>
      <h1>COURSES</h1>
      <Link href="/">Go Back to Home</Link>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <Link href={`/courses/${course.slug}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
}

// OPTIMIZACIÓN DE RUTAS CON PARÁMETROS DINÁMICOS
export async function generateStaticParams() {
  return courses.map((course) => course.slug)
}

