"use client";

import { useEffect, useState, type CSSProperties } from "react";
import {
  COURSE,
  PLANS,
  FEEDBACK,
  FAQ,
  COMMS,
  VREEL,
  LOGO,
  COMMUNITY_IMG,
  PROBLEM_IMG,
} from "./data";
import { Tick, ArrowR, Stars, CommIcon, TikTokIcon, YouTubeIcon } from "./icons";
import { Marquee } from "./Marquee";

/* helper: allow CSS custom properties in inline styles */
const v = (style: Record<string, string | number>) => style as CSSProperties;

/* ---------- scroll reveal hook ----------
   Uses a synchronous rect check + scroll/resize listeners instead of
   IntersectionObserver: IO callbacks are throttled in offscreen/headless
   render contexts, scroll events + getBoundingClientRect are not. */
function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("anim");
    const reveal = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > 0) el.classList.add("in");
      });
    };
    reveal(); // above-the-fold, immediately
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

/* ---------- header scroll state ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"site-header" + (scrolled ? " scrolled" : "")}>
      <a className="brand" href="#top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-logo" src={LOGO} alt="VIDEO EDITOR" />
      </a>
      <nav className="nav-pill">
        <a href="#showreel">Showreel</a>
        <a href="#course">Khóa học</a>
        <a href="#outcome">Cơ hội</a>
        <a href="#pricing">Học phí</a>
        <a href="#feedback">Học viên</a>
        <a href="#faq">FAQ</a>
        <a href="#community">Cộng đồng</a>
      </nav>
      <a className="btn btn-primary nav-cta" href="#pricing">
        Tham gia <span className="arrow">
                  <ArrowR />
                </span>
      </a>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div style={v({ "--rd": "0ms" })}>
        <span className="badge">Video Editor · Làm việc với client quốc tế</span>
      </div>
      <h1 style={v({ "--rd": "90ms" })}>
        Lộ trình cho Video Editor hướng tới client quốc tế &amp; thu nhập{" "}
        <span className="accent-word">$1000+</span>
      </h1>
      <p className="sub" style={v({ "--rd": "180ms" })}>
        Khóa học đầu tiên tại Việt Nam tập trung vào style edit kiểu{" "}
        <span className="hl">Apple</span> &amp; <span className="hl">Devin Jatho</span> — dạng video
        đang được nhiều khách hàng quốc tế trả giá cao.
      </p>
      <div className="cta-row" style={v({ "--rd": "270ms" })}>
        <a className="btn btn-primary" href="#pricing">
          Tham gia khóa học <span className="arrow">
                  <ArrowR />
                </span>
        </a>
        <a className="btn btn-ghost" href="#showreel">
          Xem showreel
        </a>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}

/* ---------- SHOWREEL ---------- */
function Showreel() {
  return (
    <section className="section" id="showreel">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="kicker center">Showreel</span>
          <h2 className="section-title">
            Một vài project &amp; style
            <br />
            sẽ được breakdown trong khóa
          </h2>
        </div>
        <Marquee
          className="vreel"
          trackClassName="vreel-track"
          speed={30}
          renderCopy={(c) =>
            VREEL.map((src, i) => (
              <div className="vreel-card" key={i} aria-hidden={c > 0 || undefined}>
                <video src={src} autoPlay loop muted playsInline preload="auto" />
              </div>
            ))
          }
        />
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
function Problem() {
  return (
    <section className="section" id="problem">
      <div className="wrap">
        <div className="problem-card reveal">
          <div className="problem-text">
            <span className="kicker">Vì sao có khóa học</span>
            <h2 className="problem-title">
              Rất nhiều editor Việt đang nhận những job <span className="q">edit khá rẻ</span>, không
              tương xứng với công sức &amp; chất xám — trong khi cùng dạng video đó, thị trường quốc
              tế trả <span className="hl-accent">cao hơn rất nhiều</span>.
            </h2>
            <p className="problem-p">
              Sau hơn 3 năm xây dựng cộng đồng{" "}
              <span className="hl">“Việc làm Editor Freelance”</span>, Dân nhận ra khoảng cách này
              đến từ kỹ năng, tư duy visual và cách làm việc chuyên nghiệp — chứ không phải vì editor
              Việt kém.
            </p>
            <p className="problem-p">
              Chính vì vậy, Dân thiết kế lộ trình này để giúp editor freelancer Việt Nam nâng level
              kỹ năng và hướng tới những cơ hội tốt hơn ở thị trường quốc tế.
            </p>
            <div className="signature">— Danmotion</div>
          </div>
          <div className="problem-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="problem-img" src={PROBLEM_IMG} alt="Vì sao có khóa học" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- S4 — KHÓA HỌC NÀY CÓ GÌ ---------- */
function Course() {
  return (
    <section className="section" id="course">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="kicker center">Nội dung</span>
          <h2 className="section-title">Khóa học này có gì?</h2>
          <p className="lead" style={{ margin: "22px auto 0" }}>
            Lộ trình đi từ kỹ thuật edit đến tư duy nghề và cách vận hành công việc với client quốc
            tế.
          </p>
        </div>
        <div className="reel-grid">
          {COURSE.map((c, i) => (
            <div className="reel-item reveal" key={i} style={v({ "--rd": (i % 3) * 80 + "ms" })}>
              <div className="reel-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="reel-img" src={c.img} alt={c.title} loading="lazy" />
              </div>
              <div className="course-info">
                <span className="course-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="course-title">{c.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- S5 — OUTCOME ---------- */
function Outcome() {
  return (
    <section className="section outcome" id="outcome">
      <div className="wrap">
        <div className="outcome-card reveal">
          <div className="story">
            <p className="kicker center" style={{ justifyContent: "center" }}>
              Sau khóa học
            </p>
            <h2 className="big" style={{ marginTop: "26px" }}>
              Khi kỹ năng &amp; chất lượng video đủ tốt, bạn{" "}
              <span className="hl-accent">không còn phải loay hoay</span> cạnh tranh ở những job giá
              rẻ như trước.
            </h2>
            <p>
              Bạn sẽ có nền tảng vững hơn về cả kỹ năng editing lẫn cách làm việc chuyên nghiệp với
              khách hàng quốc tế.
            </p>
            <p>
              Dưới đây là một vài case khách hàng quốc tế chủ động tìm đến Dân với những offer toàn
              thời gian, mức thu nhập vài nghìn đô mỗi tháng.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#feedback">
                Bấm để xem case study
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

/* ---------- S6 — PRICING ---------- */
function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="kicker center">Học phí</span>
          <h2 className="section-title">Chọn lộ trình phù hợp với bạn</h2>
        </div>
        <div className="pricing-grid">
          {PLANS.map((p, i) => (
            <div
              className={"plan reveal" + (p.featured ? " featured" : "")}
              key={i}
              style={v({ "--rd": i * 90 + "ms" })}
            >
              {p.badge && <span className="plan-badge">{p.badge}</span>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">
                <span className="amt">{p.price}</span>
                <span className="cur">VNĐ</span>
              </div>
              <div className="plan-divider"></div>
              <div className="plan-features">
                {p.feats.map((f, j) => (
                  <div className="feat" key={j}>
                    <span className="tick">
                      <Tick />
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary" href={p.href}>
                Tham gia khóa học
                <span className="arrow">
                  <ArrowR />
                </span>
              </a>
            </div>
          ))}
        </div>
        <div className="pricing-note reveal">
          <p>
            Premium Elite là option Dân hỗ trợ &amp; đồng hành trực tiếp nhiều hơn, nên mỗi tháng chỉ
            nhận số lượng học viên giới hạn để đảm bảo chất lượng tốt nhất.
          </p>
          <p>
            Học viên khóa Premium có thể nâng cấp lên Premium Elite bất cứ lúc nào bằng cách thanh
            toán phần chênh lệch.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- S7 — FEEDBACK ---------- */
function Feedback() {
  return (
    <section className="section" id="feedback">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="kicker center">Feedback</span>
          <h2 className="section-title">Học viên nói gì về khóa học của Dân?</h2>
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
      </div>
    </section>
  );
}

/* ---------- S8 — FAQ ---------- */
function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="kicker center">FAQ</span>
          <h2 className="section-title">Câu hỏi thường gặp</h2>
        </div>
        <div className="faq-list reveal">
          {FAQ.map((f, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="faq-ico"></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
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

/* ---------- S9 — COMMUNITY ---------- */
function Community() {
  return (
    <section className="section" id="community">
      <div className="wrap">
        <div className="community-card reveal">
          <div className="community-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="community-img"
              src={COMMUNITY_IMG}
              alt="Cộng đồng editor"
              loading="lazy"
            />
          </div>
          <div className="community-content">
            <span className="kicker">Cộng đồng</span>
            <h2 className="community-heading">
              Ngoài khóa học, mình xây dựng 2 cộng đồng editor
            </h2>
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

/* ---------- S10 — FINAL CTA + FOOTER ---------- */
function FinalCTA() {
  return (
    <section className="section" id="join">
      <div className="wrap">
        <div className="final-card reveal">
          <h2>Sẵn sàng nâng level cho sự nghiệp editing của bạn?</h2>
          <p className="lead">
            Nếu bạn muốn nâng kỹ năng editing và hướng tới những cơ hội tốt hơn ở thị trường quốc tế,
            tham gia khóa học ngay hôm nay.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#pricing">
              Tham gia khóa học
              <span className="arrow">
                <ArrowR />
              </span>
            </a>
            <a className="btn btn-ghost" href="#showreel">
              Xem showreel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <a className="brand" href="#top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src={LOGO} alt="VIDEO EDITOR" />
        </a>
        <div className="foot-social">
          <a className="soc" href="#" aria-label="TikTok">
            <TikTokIcon />
            TikTok
          </a>
          <a className="soc" href="#" aria-label="YouTube">
            <YouTubeIcon />
            YouTube
          </a>
        </div>
        <span className="foot-meta">© 2026 VIDEO EDITOR · Khóa học Video Editor quốc tế</span>
      </div>
    </footer>
  );
}

export default function Landing() {
  useReveal();
  return (
    <>
      <div className="page-bg">
        <div className="blob a"></div>
        <div className="blob b"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <Showreel />
        <Problem />
        <Course />
        <Outcome />
        <Pricing />
        <Feedback />
        <Faq />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
