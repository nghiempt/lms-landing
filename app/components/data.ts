// Content + asset data, ported 1:1 from the original landing page.
// Asset base64 blobs were extracted to /public/assets and referenced by path.

export const COURSE = [
  { title: "Hiểu và làm chủ style Devin Jatho", img: "/assets/943cee1eb3.jpg" },
  { title: "Hiểu và làm chủ Apple Style", img: "/assets/361e574a26.jpg" },
  { title: "Làm chủ Premiere Pro & After Effects", img: "/assets/01d96ba161.jpg" },
  {
    title: "Tư duy visual, chuyển động & màu sắc để video chuyên nghiệp hơn",
    img: "/assets/30192af5b7.jpg",
  },
  { title: "Xây dựng workflow edit nhanh, clean và tối ưu hơn", img: "/assets/f8984e9283.jpg" },
  {
    title: "Toàn bộ quy trình tìm kiếm & làm việc với khách hàng quốc tế",
    img: "/assets/112491eec3.jpg",
  },
];

export type Plan = {
  name: string;
  price: string;
  featured: boolean;
  badge?: string;
  feats: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Khóa Premium",
    price: "5.890.000",
    featured: false,
    feats: [
      "Toàn bộ kỹ năng talking head nâng cao (Devin Jatho & Apple Style)",
      "Toàn bộ quy trình tìm & làm việc với khách hàng quốc tế",
      "Hỗ trợ sửa bài chi tiết 1:1, bám sát lộ trình học viên",
      "Đảm bảo đầu ra về kỹ năng",
      "Tặng kho tài nguyên + ý tưởng trị giá $500",
      "Update trọn đời các style trending quốc tế",
    ],
  },
  {
    name: "Khóa Premium Elite",
    price: "10.890.000",
    featured: true,
    badge: "Giới hạn mỗi tháng",
    feats: [
      "Sở hữu toàn bộ khóa Premium",
      "Hỗ trợ 1:1 xây dựng portfolio, tư vấn & định hướng cá nhân",
      "Hỗ trợ làm job thực chiến khi hoàn thành 1/2 lộ trình",
      "Lộ trình đặc biệt để khách tự tìm đến bạn, thay vì cạnh tranh giá rẻ trên Upwork",
      "Đảm bảo đầu ra làm việc được trên nền tảng quốc tế & tự hoàn vốn học phí",
    ],
  },
];

export const FEEDBACK = [
  {
    name: "Trung",
    avatar: "/assets/6068dcb3eb.jpg",
    role: "Editor · Upwork",
    quote:
      "Em làm Upwork hơn 1 năm mà mấy job short-form cạnh tranh kinh khủng, editor Ấn Độ với Pakistan vừa nhanh vừa rẻ nên em bị reject khá nhiều.\n\nSau khi học khóa của anh Dân, em hiểu hơn về workflow với pacing. Portfolio nhìn ổn hơn nên giờ em tự tin deal khách hơn nhiều.",
  },
  {
    name: "Dũng",
    avatar: "/assets/dd80ae7c0c.jpg",
    role: "Video Editor",
    quote:
      "Cảm ơn A Dân và team nhiều nha. Cái em thích nhất chắc là kho tài nguyên với idea anh Dân làm sẵn, nhờ vậy lúc edit em đỡ bị bí ý tưởng hơn hẳn.\n\nNhiều lúc làm job cũng nhanh hơn, chứ trước ngồi nghĩ idea khá nản.",
  },
  {
    name: "Thành Nguyễn",
    avatar: "/assets/a8e1f91dc5.jpg",
    role: "Freelance Editor",
    quote:
      "Trước đây em toàn coi mấy video effect ngầu ngầu trên YouTube rồi làm theo, camera 3D các kiểu. Mà edit xong nhìn vẫn cứ bị phèn phèn sao á.\n\nHọc khóa này xong mới biết mình thiếu khá nhiều thứ cơ bản, nhất là màu sắc với bố cục.",
  },
  {
    name: "Linh",
    avatar: "/assets/6e639ac81d.jpg",
    role: "Editor",
    quote:
      "Lúc học em cũng khá ngại nhắn tin hỏi mấy cái chưa hiểu. Mà anh Dân vẫn chủ động nhắn han suốt, kiểu support tận răng luôn ấy.\n\nNói chung recommend cho tất cả anh em editor nha.",
  },
  {
    name: "Long",
    avatar: "/assets/760cb9e7d7.jpg",
    role: "Editor · Quốc tế",
    quote:
      "Em biết tới style Devin Jatho lâu rồi mà ở VN khá hiếm người dạy. Em đang làm thị trường nước ngoài mà bận job quá nên ít khi nâng trình được.\n\nThấy anh Dân dạy style này khá đẹp nên đăng ký học thử. Khóa chất lượng nha, recommend mọi người.",
  },
  {
    name: "Trần Lộc",
    avatar: "/assets/1f2138bb9b.jpg",
    role: "Video Editor",
    quote:
      "Khóa học chất lượng nha, dạy khá thực chiến chứ không lan man nhiều.\n\nNói chung rất oke nhé các bác.",
  },
];

export const FAQ = [
  {
    q: "Người mới có học được không?",
    a: "Hoàn toàn được. Khóa học được thiết kế theo lộ trình từ cơ bản tới nâng cao nên người mới vẫn có thể dễ dàng tiếp cận.",
  },
  {
    q: "Khóa học tập trung vào phần mềm nào?",
    a: "Khóa học sử dụng Premiere Pro & After Effects. Chủ yếu tập trung vào short-form / talking head editing, ngoài ra vẫn có hướng dẫn workflow cho long-form content.",
  },
  {
    q: "Thời gian học trong bao lâu?",
    a: "Khóa học được thiết kế để hoàn thành trong 8–12 tuần nếu bạn dành khoảng 2–3 giờ mỗi ngày. Tuy nhiên bạn có quyền truy cập trọn đời và học theo tốc độ của riêng mình.",
  },
  {
    q: "Giá thị trường của dạng video này khoảng bao nhiêu?",
    a: "Ở thị trường quốc tế, talking-head videos theo style Apple / Devin Jatho thường có giá từ $80–200/video tùy độ dài và độ phức tạp. Một số editor experienced có thể charge $300–500/video.",
  },
  {
    q: "Khóa học có update thêm nội dung không?",
    a: "Có. Toàn bộ học viên được update trọn đời các workflow và style mới từ thị trường quốc tế.",
  },
  {
    q: "Có cần biết tiếng Anh để làm việc với khách quốc tế không?",
    a: "Không bắt buộc. Hiện tại với sự hỗ trợ của AI, nhiều học viên vẫn đang làm việc với khách từ Đức, Dubai, Ả Rập… dù không biết ngôn ngữ của họ.\n\nTuy nhiên nếu có tiếng Anh thì chắc chắn là một lợi thế lớn, và mình luôn khuyến khích học viên nâng cao ngoại ngữ để tiếp cận nhiều cơ hội tốt hơn.",
  },
  {
    q: "Hình thức học như thế nào?",
    a: "Khóa học gồm video quay sẵn để học viên chủ động thời gian học. Ngoài ra có hỗ trợ chữa bài và feedback trực tiếp 1:1 từ Dân trong quá trình học.",
  },
];

export const COMMS = [
  { name: "Việc làm Editor Freelance", meta: "Cộng đồng · Việc làm" },
  { name: "Editor Upwork & IG Việt Nam", meta: "Cộng đồng · Quốc tế" },
];

export const VREEL = [
  "/assets/9eb1992495.mp4",
  "/assets/f300912ae1.mp4",
  "/assets/5562e1fe85.mp4",
  "/assets/321c816e6a.mp4",
  "/assets/69c83f9a63.mp4",
];

export const LOGO = "/assets/16f53e33ca.png";
export const COMMUNITY_IMG = "/assets/085458ad6b.jpg";
export const PROBLEM_IMG = "/assets/18dc3b2fac.jpg";
