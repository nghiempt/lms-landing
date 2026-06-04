import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetail from "../../components/CourseDetail";
import { COURSES, getCourse } from "../../components/courseData";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title} — VIDEO EDITOR`,
    description: course.tag,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  return <CourseDetail course={course} />;
}
