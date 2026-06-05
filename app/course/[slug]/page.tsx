import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetail from "../../components/CourseDetail";
import { getCourseDetail, getCourseSlugs } from "../../components/landingApi";

// Render động: luôn fetch nội dung khoá mới nhất từ API khi admin chỉnh sửa.
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseDetail(slug);
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
  const course = await getCourseDetail(slug);
  if (!course) notFound();
  return <CourseDetail course={course} />;
}
