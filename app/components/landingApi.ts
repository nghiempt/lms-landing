// Fetch nội dung khoá học cho Landing Page từ LMS Backend.
// Dùng ISR (revalidate) để trang vẫn tĩnh-nhanh nhưng tự cập nhật khi admin
// chỉnh sửa trong dashboard. Nếu API lỗi/không truy cập được, fallback về
// data tĩnh đã port sẵn (courseData.ts / data.ts) để trang không bao giờ vỡ.

import { COURSES, getCourse, type CourseDetail } from "./courseData";
import { PLANS, type Plan } from "./data";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";

interface Envelope<T> {
  success: boolean;
  data: T;
}

// Shape khoá từ API public = CourseDetail + vài field thêm.
type ApiCourse = CourseDetail & {
  currency: string;
  badge: string | null;
  features: string[];
  href: string;
};

async function fetchLanding<T>(path: string): Promise<T | null> {
  try {
    // no-store: luôn lấy data mới nhất từ API (admin sửa xong reload thấy ngay).
    const res = await fetch(`${API_BASE}${path}`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = (await res.json()) as Envelope<T> | null;
    return json?.success ? json.data : null;
  } catch {
    return null;
  }
}

/** Card giá ở trang chủ (PLANS). Fallback về data tĩnh nếu API lỗi. */
export async function getPlans(): Promise<Plan[]> {
  const data = await fetchLanding<ApiCourse[]>("/landing-courses");
  if (!data || data.length === 0) return PLANS;
  return data.map((c) => ({
    name: c.title,
    price: c.price,
    featured: c.featured,
    href: c.href ?? `/course/${c.slug}`,
    badge: c.badge ?? undefined,
    feats: c.features ?? [],
  }));
}

/** Chi tiết 1 khoá theo slug. Fallback về data tĩnh nếu API lỗi. */
export async function getCourseDetail(
  slug: string,
): Promise<CourseDetail | null> {
  const data = await fetchLanding<ApiCourse>(`/landing-courses/${slug}`);
  return data ?? getCourse(slug) ?? null;
}

/** Danh sách slug để generateStaticParams. Fallback về data tĩnh. */
export async function getCourseSlugs(): Promise<string[]> {
  const data = await fetchLanding<ApiCourse[]>("/landing-courses");
  if (!data || data.length === 0) return COURSES.map((c) => c.slug);
  return data.map((c) => c.slug);
}
