// Course detail content, ported 1:1 from
// html/course-premium.html and html/course-premium-elite.html.

export type Lesson = { no: string; title: string; dur: string };

export type Chapter = {
  no: string;
  label: string;
  name: string;
  desc: string;
  count: string;
  lessons: Lesson[];
};

export type CourseDetail = {
  slug: string;
  title: string;
  tag: string;
  price: string;
  featured: boolean;
  chaptersLabel: string;
  lessonsLabel: string;
  chapters: Chapter[];
};

export const COURSES: CourseDetail[] = [
  {
    slug: "premium",
    title: "Khóa Premium",
    tag: "Toàn bộ kỹ năng talking head nâng cao — Devin Jatho & Apple Style, kèm hỗ trợ sửa bài 1:1 và update trọn đời.",
    price: "5.890.000",
    featured: false,
    chaptersLabel: "6",
    lessonsLabel: "27",
    chapters: [
  {
    no: "01",
    label: "Foundation",
    name: "Nhập môn & Tư duy nghề",
    desc: "Định vị bản thân, hiểu thị trường quốc tế và tư duy của một editor chuyên nghiệp.",
    count: "5 bài giảng",
    lessons: [
      { no: "01", title: "Chào mừng & lộ trình khóa học", dur: "04:30" },
      { no: "02", title: "Định vị bản thân trong thị trường quốc tế", dur: "12:10" },
      { no: "03", title: "Tư duy của một editor chuyên nghiệp", dur: "09:45" },
      { no: "04", title: "Cách định giá video & nhận job", dur: "11:20" },
      { no: "05", title: "Setup & bộ công cụ ban đầu", dur: "07:15" },
    ],
  },
  {
    no: "02",
    label: "Devin Jatho",
    name: "Devin Jatho Style",
    desc: "Giải mã DNA của style Devin Jatho: pacing, sound design và chuyển động.",
    count: "5 bài giảng",
    lessons: [
      { no: "01", title: "Phân tích DNA style Devin Jatho", dur: "14:05" },
      { no: "02", title: "Pacing & nhịp cắt", dur: "13:30" },
      { no: "03", title: "Sound design & SFX", dur: "12:50" },
      { no: "04", title: "Transition & motion nâng cao", dur: "16:20" },
      { no: "05", title: "Thực hành: dựng video theo style", dur: "22:00" },
    ],
  },
  {
    no: "03",
    label: "Apple Style",
    name: "Apple Style",
    desc: "Tư duy minimal, clean type motion và bố cục chuẩn Apple.",
    count: "5 bài giảng",
    lessons: [
      { no: "01", title: "Tư duy minimal & clean", dur: "10:15" },
      { no: "02", title: "Clean type motion", dur: "15:40" },
      { no: "03", title: "Bố cục & khoảng thở", dur: "09:30" },
      { no: "04", title: "Color & tone kiểu Apple", dur: "12:25" },
      { no: "05", title: "Thực hành: clip kiểu Apple", dur: "20:10" },
    ],
  },
  {
    no: "04",
    label: "Pr & Ae",
    name: "Làm chủ Premiere & After Effects",
    desc: "Workflow Premiere tối ưu và After Effects căn bản cho editor.",
    count: "4 bài giảng",
    lessons: [
      { no: "01", title: "Workflow Premiere Pro tối ưu", dur: "13:00" },
      { no: "02", title: "Keyframe & đồ thị tốc độ", dur: "11:45" },
      { no: "03", title: "After Effects căn bản cho editor", dur: "18:20" },
      { no: "04", title: "Dynamic Link Pr ↔ Ae", dur: "08:55" },
    ],
  },
  {
    no: "05",
    label: "Color & Motion",
    name: "Màu sắc, bố cục & chuyển động",
    desc: "Nền tảng color grading, nguyên tắc bố cục và tư duy chuyển động.",
    count: "4 bài giảng",
    lessons: [
      { no: "01", title: "Nền tảng color grading", dur: "14:30" },
      { no: "02", title: "LUT & node grading", dur: "12:10" },
      { no: "03", title: "Nguyên tắc bố cục khung hình", dur: "10:40" },
      { no: "04", title: "Tư duy chuyển động (motion)", dur: "13:15" },
    ],
  },
  {
    no: "06",
    label: "Workflow",
    name: "Workflow tối ưu & xuất bản",
    desc: "Sắp xếp project, preset tăng tốc và xuất video chuẩn nền tảng.",
    count: "4 bài giảng",
    lessons: [
      { no: "01", title: "Sắp xếp project & đặt tên", dur: "07:50" },
      { no: "02", title: "Preset & template tăng tốc", dur: "11:05" },
      { no: "03", title: "Phím tắt & thói quen pro", dur: "09:20" },
      { no: "04", title: "Xuất video chuẩn nền tảng", dur: "08:40" },
    ],
  },
    ],
  },
  {
    slug: "premium-elite",
    title: "Khóa Premium Elite",
    tag: "Toàn bộ khóa Premium + xây dựng portfolio, quy trình client quốc tế và coaching thực chiến 1:1.",
    price: "10.890.000",
    featured: true,
    chaptersLabel: "9",
    lessonsLabel: "37",
    chapters: [
  {
    no: "01",
    label: "Foundation",
    name: "Nhập môn & Tư duy nghề",
    desc: "Định vị bản thân, hiểu thị trường quốc tế và tư duy của một editor chuyên nghiệp.",
    count: "5 bài giảng",
    lessons: [
      { no: "01", title: "Chào mừng & lộ trình khóa học", dur: "04:30" },
      { no: "02", title: "Định vị bản thân trong thị trường quốc tế", dur: "12:10" },
      { no: "03", title: "Tư duy của một editor chuyên nghiệp", dur: "09:45" },
      { no: "04", title: "Cách định giá video & nhận job", dur: "11:20" },
      { no: "05", title: "Setup & bộ công cụ ban đầu", dur: "07:15" },
    ],
  },
  {
    no: "02",
    label: "Devin Jatho",
    name: "Devin Jatho Style",
    desc: "Giải mã DNA của style Devin Jatho: pacing, sound design và chuyển động.",
    count: "5 bài giảng",
    lessons: [
      { no: "01", title: "Phân tích DNA style Devin Jatho", dur: "14:05" },
      { no: "02", title: "Pacing & nhịp cắt", dur: "13:30" },
      { no: "03", title: "Sound design & SFX", dur: "12:50" },
      { no: "04", title: "Transition & motion nâng cao", dur: "16:20" },
      { no: "05", title: "Thực hành: dựng video theo style", dur: "22:00" },
    ],
  },
  {
    no: "03",
    label: "Apple Style",
    name: "Apple Style",
    desc: "Tư duy minimal, clean type motion và bố cục chuẩn Apple.",
    count: "5 bài giảng",
    lessons: [
      { no: "01", title: "Tư duy minimal & clean", dur: "10:15" },
      { no: "02", title: "Clean type motion", dur: "15:40" },
      { no: "03", title: "Bố cục & khoảng thở", dur: "09:30" },
      { no: "04", title: "Color & tone kiểu Apple", dur: "12:25" },
      { no: "05", title: "Thực hành: clip kiểu Apple", dur: "20:10" },
    ],
  },
  {
    no: "04",
    label: "Pr & Ae",
    name: "Làm chủ Premiere & After Effects",
    desc: "Workflow Premiere tối ưu và After Effects căn bản cho editor.",
    count: "4 bài giảng",
    lessons: [
      { no: "01", title: "Workflow Premiere Pro tối ưu", dur: "13:00" },
      { no: "02", title: "Keyframe & đồ thị tốc độ", dur: "11:45" },
      { no: "03", title: "After Effects căn bản cho editor", dur: "18:20" },
      { no: "04", title: "Dynamic Link Pr ↔ Ae", dur: "08:55" },
    ],
  },
  {
    no: "05",
    label: "Color & Motion",
    name: "Màu sắc, bố cục & chuyển động",
    desc: "Nền tảng color grading, nguyên tắc bố cục và tư duy chuyển động.",
    count: "4 bài giảng",
    lessons: [
      { no: "01", title: "Nền tảng color grading", dur: "14:30" },
      { no: "02", title: "LUT & node grading", dur: "12:10" },
      { no: "03", title: "Nguyên tắc bố cục khung hình", dur: "10:40" },
      { no: "04", title: "Tư duy chuyển động (motion)", dur: "13:15" },
    ],
  },
  {
    no: "06",
    label: "Workflow",
    name: "Workflow tối ưu & xuất bản",
    desc: "Sắp xếp project, preset tăng tốc và xuất video chuẩn nền tảng.",
    count: "4 bài giảng",
    lessons: [
      { no: "01", title: "Sắp xếp project & đặt tên", dur: "07:50" },
      { no: "02", title: "Preset & template tăng tốc", dur: "11:05" },
      { no: "03", title: "Phím tắt & thói quen pro", dur: "09:20" },
      { no: "04", title: "Xuất video chuẩn nền tảng", dur: "08:40" },
    ],
  },
  {
    no: "07",
    label: "Portfolio",
    name: "Xây dựng Portfolio cá nhân",
    desc: "Dựng showreel ấn tượng và personal branding để nổi bật.",
    count: "3 bài giảng",
    lessons: [
      { no: "01", title: "Chọn & dựng showreel", dur: "15:00" },
      { no: "02", title: "Thiết kế portfolio site", dur: "12:30" },
      { no: "03", title: "Personal branding cho editor", dur: "10:15" },
    ],
  },
  {
    no: "08",
    label: "Global Client",
    name: "Tìm & làm việc với client quốc tế",
    desc: "Quy trình Upwork A–Z và cách để client tự tìm đến bạn.",
    count: "4 bài giảng",
    lessons: [
      { no: "01", title: "Upwork từ A đến Z", dur: "16:40" },
      { no: "02", title: "Hồ sơ & proposal thắng job", dur: "13:20" },
      { no: "03", title: "Giao tiếp & quản lý client", dur: "11:50" },
      { no: "04", title: "Để client tự tìm đến bạn", dur: "14:10" },
    ],
  },
  {
    no: "09",
    label: "Coaching 1:1",
    name: "Coaching & thực chiến 1:1",
    desc: "Review portfolio 1:1, hỗ trợ làm job thực tế và định hướng cá nhân.",
    count: "3 bài giảng",
    lessons: [
      { no: "01", title: "Review portfolio 1:1", dur: "1:1" },
      { no: "02", title: "Hỗ trợ làm job thực chiến", dur: "1:1" },
      { no: "03", title: "Định hướng cá nhân hóa", dur: "1:1" },
    ],
  },
    ],
  },
];

export const getCourse = (slug: string): CourseDetail | undefined =>
  COURSES.find((c) => c.slug === slug);
