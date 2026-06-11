"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "الرئيسية",
          id: "/",
        },
        {
          name: "خدماتنا",
          id: "/services",
        },
        {
          name: "أعمالنا",
          id: "/work",
        },
        {
          name: "تواصل معنا",
          id: "/contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/overhead-view-abstract-paper-background_23-2147981635.jpg"
      logoAlt="شعار شركة التسويق الرقمي"
      brandName="شركة التسويق الرقمي"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="نطلق نجاحك الرقمي"
      description="حلول تسويقية مبتكرة لنمو أعمالك وتحقيق أهدافك التجارية في العالم الرقمي المتطور."
      testimonials={[
        {
          name: "سارة المحمدي",
          handle: "@سارة_ديجيتال",
          testimonial: "خدماتهم غيرت قواعد اللعبة بالنسبة لشركتي! زيادة هائلة في المبيعات والوعي بالعلامة التجارية.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-businesswoman-looking-camera-office_1301-7794.jpg",
          imageAlt: "صورة سارة المحمدي",
        },
        {
          name: "أحمد الزهراني",
          handle: "@أحمد_تيك",
          testimonial: "فريق عمل محترف ونتائج ملموسة. أنصح بهم بشدة لأي شركة تبحث عن التميز الرقمي.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-sad-man-with-beard_1154-159.jpg",
          imageAlt: "صورة أحمد الزهراني",
        },
        {
          name: "ليلى الفهد",
          handle: "@ليلى_ماركتينج",
          testimonial: "لقد فاقت توقعاتي! استراتيجيات إبداعية وتنفيذ متقن. شكراً لكم.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-having-online-meeting-work_23-2148940757.jpg",
          imageAlt: "صورة ليلى الفهد",
        },
        {
          name: "خالد المنصور",
          handle: "@خالد_بزنس",
          testimonial: "دعم مستمر وتحليل دقيق، ساعدونا على فهم جمهورنا والوصول إليه بفعالية أكبر.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smart-looking-teacher_53876-23045.jpg",
          imageAlt: "صورة خالد المنصور",
        },
        {
          name: "نور الهدى",
          handle: "@نور_ريادة",
          testimonial: "شراكة حقيقية تهدف إلى النجاح المشترك. فريق عمل ملتزم وذو خبرة عالية.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-posing_23-2149745618.jpg",
          imageAlt: "صورة نور الهدى",
        },
      ]}
      testimonialRotationInterval={5000}
      tag="التسويق الرقمي أولاً"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "اكتشف خدماتنا",
          href: "/services",
        },
        {
          text: "تواصل معنا",
          href: "/contact",
        },
      ]}
      buttonAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/overhead-view-abstract-paper-background_23-2147981635.jpg",
          alt: "صورة سارة المحمدي",
        },
        {
          src: "http://img.b2bpic.net/free-photo/analytics-plan-strategy-insight-concept_53876-124214.jpg",
          alt: "صورة أحمد الزهراني",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-businesswoman-looking-camera-office_1301-7794.jpg",
          alt: "صورة ليلى الفهد",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-sad-man-with-beard_1154-159.jpg",
          alt: "صورة خالد المنصور",
        },
        {
          src: "http://img.b2bpic.net/free-photo/colleagues-having-online-meeting-work_23-2148940757.jpg",
          alt: "صورة نور الهدى",
        },
      ]}
      avatarText="أكثر من 500 عميل سعيد"
      imageSrc="http://img.b2bpic.net/free-photo/analytics-plan-strategy-insight-concept_53876-124214.jpg"
      imageAlt="فريق عمل تسويق رقمي يتعاون على لوحات معلومات وتحليلات"
      showDimOverlay={false}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="من نحن: شركاءك في النجاح الرقمي"
      description={[
        "نحن شركة تسويق رقمي رائدة ومتكاملة، نكرس جهودنا لمساعدة الشركات على تحقيق أقصى إمكاناتها في المشهد الرقمي. من خلال الجمع بين الإبداع والبيانات، نقدم استراتيجيات مخصصة تحدث فرقاً حقيقياً في نمو أعمال عملائنا.",
        "فريقنا من الخبراء يمتلك شغفاً عميقاً بالتسويق الرقمي وأحدث التقنيات. نحن نفهم أن كل علامة تجارية فريدة، ولذلك نصمم حلولاً مخصصة تلبي احتياجاتك وأهدافك الخاصة، سواء كنت تبحث عن زيادة الوعي بالعلامة التجارية، جذب العملاء المحتملين، أو تعزيز المبيعات.",
      ]}
      buttons={[
        {
          text: "تعرف على قصتنا",
          href: "/about",
        },
      ]}
      buttonAnimation="slide-up"
      showBorder={false}
    />
  </div>

  <div id="features-home" data-section="features-home">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "seo",
          title: "تحسين محركات البحث (SEO)",
          description: "نساعدك على الظهور في قمة نتائج البحث وجذب المزيد من الزوار المؤهلين إلى موقعك.",
          tag: "رؤية أعلى",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884896.jpg",
          imageAlt: "تصوير لتحسين محركات البحث",
        },
        {
          id: "social-media",
          title: "التسويق عبر وسائل التواصل الاجتماعي",
          description: "بناء حضور قوي والتفاعل مع جمهورك المستهدف عبر جميع المنصات الاجتماعية.",
          tag: "تواصل فعال",
          imageSrc: "http://img.b2bpic.net/free-photo/millennials-using-smartphones-outdoors-together_53876-146098.jpg",
          imageAlt: "تصوير للتسويق عبر وسائل التواصل الاجتماعي",
        },
        {
          id: "content-marketing",
          title: "التسويق بالمحتوى",
          description: "إنشاء محتوى قيم وجذاب يجذب العملاء ويجعل علامتك التجارية مرجعاً في مجالك.",
          tag: "محتوى هادف",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-books-versus-technology_23-2150062944.jpg",
          imageAlt: "تصوير للتسويق بالمحتوى",
        },
      ]}
      title="خدماتنا المتميزة: حلول شاملة لنموك"
      description="نقدم مجموعة شاملة من خدمات التسويق الرقمي المصممة لتعزيز حضورك على الإنترنت وتحقيق نتائج قابلة للقياس."
      tag="خدماتنا"
      tagAnimation="opacity"
      buttons={[
        {
          text: "شاهد كل الخدمات",
          href: "/services",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "شركة التقنية العالمية",
        "فينتيك المبتكرة",
        "سوق إلكتروني رائد",
        "صحة المستقبل",
        "أكاديمية المعرفة",
        "حلول لوجستية ذكية",
        "مجموعة إعلامية",
      ]}
      title="شركاء النجاح: ثقة تترجم إلى نتائج"
      description="نفخر بالعمل مع مجموعة واسعة من الشركات الرائدة في مختلف الصناعات."
      tag="شركاؤنا"
      tagAnimation="opacity"
      speed={40}
      showCard={false}
    />
  </div>

  <div id="testimonials-home" data-section="testimonials-home">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "فاطمة أحمد",
          role: "مديرة التسويق",
          company: "متجر الأزياء",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-black-businesswoman-office_637285-9877.jpg",
          imageAlt: "صورة فاطمة أحمد",
        },
        {
          id: "2",
          name: "محمد علي",
          role: "رائد أعمال",
          company: "تطبيق جديد",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-plump-male-eyeglasses-grey-background_613910-13551.jpg",
          imageAlt: "صورة محمد علي",
        },
        {
          id: "3",
          name: "هناء سعيد",
          role: "مديرة علاقات عامة",
          company: "شركة عقارية",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-joyful-curly-haired-woman-makes-triumph-dance-feels-like-winner-dressed-elegant-clothes-celebrates-personal-achievements-isolated-pink-background-finally-i-reached-my-goal_273609-60168.jpg",
          imageAlt: "صورة هناء سعيد",
        },
        {
          id: "4",
          name: "يوسف منصور",
          role: "المدير التنفيذي",
          company: "شركة استشارات",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-with-horns_23-2149850829.jpg",
          imageAlt: "صورة يوسف منصور",
        },
        {
          id: "5",
          name: "مريم عبدالله",
          role: "خبيرة تسويق",
          company: "وكالة إعلانات",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smile-woman-talking-phone-looking-camera_23-2148317284.jpg",
          imageAlt: "صورة مريم عبدالله",
        },
      ]}
      kpiItems={[
        {
          value: "+5",
          label: "سنوات خبرة",
        },
        {
          value: "98%",
          label: "رضا العملاء",
        },
        {
          value: "+200",
          label: "حملة ناجحة",
        },
      ]}
      title="ماذا يقول عملاؤنا عنا"
      description="قصص نجاح حقيقية من عملائنا الذين وثقوا بنا وحققوا نتائج مبهرة."
      tag="شهادات"
      tagAnimation="opacity"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="http://img.b2bpic.net/free-photo/overhead-view-abstract-paper-background_23-2147981635.jpg"
      logoAlt="شعار شركة التسويق الرقمي"
      logoText="شركة التسويق الرقمي"
      columns={[
        {
          title: "روابط سريعة",
          items: [
            {
              label: "الرئيسية",
              href: "/",
            },
            {
              label: "عن الشركة",
              href: "#about",
            },
            {
              label: "خدماتنا",
              href: "/services",
            },
            {
              label: "أعمالنا",
              href: "/work",
            },
          ],
        },
        {
          title: "خدماتنا",
          items: [
            {
              label: "تحسين محركات البحث",
              href: "/services#seo",
            },
            {
              label: "التسويق الاجتماعي",
              href: "/services#social-media",
            },
            {
              label: "التسويق بالمحتوى",
              href: "/services#content-marketing",
            },
            {
              label: "الإعلانات المدفوعة",
              href: "/services#paid-ads",
            },
          ],
        },
        {
          title: "تواصل معنا",
          items: [
            {
              label: "البريد الإلكتروني",
              href: "mailto:info@digitalmarketing.com",
            },
            {
              label: "الهاتف",
              href: "tel:+966500000000",
            },
            {
              label: "العنوان",
              href: "#",
            },
            {
              label: "تواصل معنا مباشرة",
              href: "/contact",
            },
          ],
        },
      ]}
      copyrightText="© 2024 شركة التسويق الرقمي. جميع الحقوق محفوظة."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
