"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FEEDBACK, FAQ, COMMS, LOGO, COMMUNITY_IMG } from "./data";
import { Marquee } from "./Marquee";
import type { CourseDetail as Course } from "./courseData";
import {
  Stars,
  CommIcon,
  ArrowR,
  TikTokIcon,
  YouTubeIcon,
  BackArrow,
  Chevron,
  MetaBook,
  MetaPlay,
  MetaClock,
  MetaCheck,
} from "./icons";

/* ---------- scroll reveal ----------
   Same synchronous rect approach as the Landing page: reliable in
   headless/offscreen contexts where IntersectionObserver is throttled. */
function useReveal() {
  useEffect(() => {
    const reveal = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(".cdetail .reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.88 && r.bottom > 0) el.classList.add("in");
      });
    };
    reveal();
    requestAnimationFrame(reveal);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    const t = setTimeout(reveal, 500);
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
      clearTimeout(t);
    };
  }, []);
}

/* ---------- HEADER ---------- */
function Header() {
  return (
    <header className="hd">
      <Link className="logo" href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="VIDEO EDITOR" />
      </Link>
      <div className="right">
        <Link className="back" href="/">
          <BackArrow />
          <span>Về trang chủ</span>
        </Link>
        <a className="btn btn-primary" href="#">
          Đăng ký học
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero({ course }: { course: Course }) {
  return (
    <section className="chero">
      <div className="wrap">
        <div className={"chero-card" + (course.featured ? " featured" : "")}>
          <span className="kicker reveal">Chi tiết khóa học</span>
          <h1 className="reveal">{course.title}</h1>
          <p className="tag reveal">{course.tag}</p>
          <div className="meta reveal">
            <span className="mi">
              <MetaBook />
              <b>{course.chaptersLabel}</b>&nbsp;chương
            </span>
            <span className="mi">
              <MetaPlay />
              <b>{course.lessonsLabel}</b>&nbsp;bài giảng
            </span>
            <span className="mi">
              <MetaClock />
              Truy cập&nbsp;<b>trọn đời</b>
            </span>
            <span className="mi">
              <MetaCheck />
              Hỗ trợ&nbsp;<b>1:1</b>
            </span>
          </div>
          <div className="buy reveal">
            <div className="price">
              <span className="amt">{course.price}</span>
              <span className="cur">VNĐ</span>
            </div>
            <a className="btn btn-primary" href="#">
              Tham gia khóa học <span className="arrow">
                  <ArrowR />
                </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CHAPTERS ---------- */
function Chapters({ course }: { course: Course }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section className="chap-sec">
      <div className="wrap">
        <div className="head reveal">
          <span className="kicker">Nội dung</span>
          <h2 style={{ marginTop: "14px" }}>Bố cục chương &amp; bài học</h2>
          <p>
            {course.chaptersLabel} chương · {course.lessonsLabel} bài giảng — bấm vào mỗi chương để
            xem danh sách bài học.
          </p>
        </div>
        <div className="chap-grid">
          {course.chapters.map((c, i) => {
            const isOpen = open.has(i);
            return (
              <div className={"chap reveal" + (isOpen ? " open" : "")} key={c.no}>
                <button
                  className="chap-head"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <div className="chap-cover">
                    <span className="chap-no">{c.no}</span>
                    <span className="chap-cover-label">{c.label}</span>
                  </div>
                  <div className="chap-body">
                    <div className="chap-name">{c.name}</div>
                    <p className="chap-desc">{c.desc}</p>
                    <div className="chap-foot">
                      <div className="chap-bar">
                        <i style={{ width: "0%" }}></i>
                      </div>
                      <span className="chap-pct">0%</span>
                    </div>
                    <div className="chap-meta">
                      <span>{c.count}</span>
                      <span className="chap-toggle">
                        Xem bài học <Chevron />
                      </span>
                    </div>
                  </div>
                </button>
                <div className="chap-lessons">
                  <ul>
                    {c.lessons.map((l) => (
                      <li className="les" key={l.no}>
                        <span className="les-no">{l.no}</span>
                        <span className="les-title">{l.title}</span>
                        <span className="les-dur">{l.dur}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEEDBACK ---------- */
function Feedback() {
  return (
    <section className="xsec" id="feedback">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="kicker center">Feedback</span>
          <h2 className="section-title">Học viên nói gì về khóa học của Dân?</h2>
        </div>
      </div>
      <Marquee
        className="fb-grid"
        trackClassName="fb-track"
        speed={48}
        renderCopy={(c) =>
          FEEDBACK.map((f, i) => (
            <div className="fb-card" key={i} aria-hidden={c > 0 || undefined}>
              <Stars />
              <div className="fb-head">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="fb-ava" src={f.avatar} alt={f.name} loading="lazy" />
                <div>
                  <div className="fb-name">{f.name}</div>
                  <div className="fb-role">{f.role}</div>
                </div>
              </div>
              <div className="fb-quote">{f.quote}</div>
            </div>
          ))
        }
      />
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  return (
    <section className="xsec" id="faq">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="kicker center">FAQ</span>
          <h2 className="section-title">Câu hỏi thường gặp</h2>
        </div>
        <div className="faq-list reveal">
          {FAQ.map((f, i) => (
            <div className={"faq-item" + (open.has(i) ? " open" : "")} key={i}>
              <button
                className="faq-q"
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={open.has(i)}
              >
                {f.q}
                <span className="faq-ico"></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-in">
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COMMUNITY ---------- */
function Community() {
  return (
    <section className="xsec" id="community">
      <div className="wrap">
        <div className="community-card reveal">
          <div className="community-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="community-img" src={COMMUNITY_IMG} alt="Cộng đồng editor" loading="lazy" />
          </div>
          <div className="community-content">
            <span className="kicker">Cộng đồng</span>
            <h2 className="community-heading">Ngoài khóa học, mình xây dựng 2 cộng đồng editor</h2>
            <p className="community-lead">
              Nơi mình thường xuyên chia sẻ kiến thức editing, kinh nghiệm freelance quốc tế,
              workflow thực tế và cơ hội kết nối cho anh em editor Việt Nam.
            </p>
            <div className="comm-grid">
              {COMMS.map((c, i) => (
                <div className="comm-card" key={i}>
                  <span className="comm-ico">
                    <CommIcon />
                  </span>
                  <div>
                    <div className="comm-name">{c.name}</div>
                    <div className="comm-meta">{c.meta}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="comm-cta">
              <a className="btn btn-ghost" href="#">
                Tham gia cộng đồng
                <span className="arrow">
                  <ArrowR />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <Link className="logo" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="VIDEO EDITOR" />
        </Link>
        <div className="socials">
          <a className="soc" href="#" aria-label="TikTok">
            <TikTokIcon />
            TikTok
          </a>
          <a className="soc" href="#" aria-label="YouTube">
            <YouTubeIcon />
            YouTube
          </a>
        </div>
        <span className="cc">© 2026 VIDEO EDITOR · Khóa học Video Editor quốc tế</span>
      </div>
    </footer>
  );
}

export default function CourseDetail({ course }: { course: Course }) {
  useReveal();
  return (
    <div className="cdetail">
      <div className="page-bg">
        <div className="blob"></div>
      </div>
      <Header />
      <main>
        <Hero course={course} />
        <Chapters course={course} />
      </main>
      <Feedback />
      <Faq />
      <Community />
      <Footer />
    </div>
  );
}
