"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

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

  <div id="features-services" data-section="features-services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "seo",
          title: "تحسين محركات البحث (SEO)",
          description: "نضمن ظهور موقعك في صدارة نتائج البحث، مما يزيد من الزيارات العضوية والعملاء المحتملين.",
          tag: "رؤية قوية",
          imageSrc: "http://img.b2bpic.net/free-photo/homepage-concept-with-search-bar_23-2150040193.jpg",
          imageAlt: "تحسين محركات البحث",
        },
        {
          id: "social-media",
          title: "إدارة وتسويق وسائل التواصل الاجتماعي",
          description: "نصمم استراتيجيات محتوى وتفاعل جذابة لتعزيز علامتك التجارية وبناء مجتمع حولها.",
          tag: "تفاعل مستمر",
          imageSrc: "http://img.b2bpic.net/free-photo/network-concept-with-yellow-squares-top-view_23-2148999200.jpg",
          imageAlt: "التسويق عبر وسائل التواصل الاجتماعي",
        },
        {
          id: "content-marketing",
          title: "التسويق بالمحتوى الإبداعي",
          description: "ننتج محتوى عالي الجودة يلهم، يثقف، ويقنع جمهورك، مما يحولهم إلى عملاء مخلصين.",
          tag: "قصص ملهمة",
          imageSrc: "http://img.b2bpic.net/free-vector/media-banners-set_1284-8310.jpg",
          imageAlt: "التسويق بالمحتوى",
        },
        {
          id: "paid-ads",
          title: "الإعلانات المدفوعة (PPC)",
          description: "نطلق حملات إعلانية مستهدفة على جوجل ووسائل التواصل الاجتماعي لتحقيق أقصى عائد على الاستثمار.",
          tag: "نتائج سريعة",
          imageSrc: "http://img.b2bpic.net/free-photo/financial-manager-doing-accounting-work-pc-with-chroma-key-screen_482257-126417.jpg",
          imageAlt: "الإعلانات المدفوعة",
        },
        {
          id: "web-design",
          title: "تصميم وتطوير المواقع الإلكترونية",
          description: "نصمم مواقع ويب جذابة وسهلة الاستخدام، تعمل كواجهة احترافية لعملك على الإنترنت.",
          tag: "حضور مميز",
          imageSrc: "http://img.b2bpic.net/free-vector/web-site-design-concept-presenting-content-web-pages-website-layout-composition-color-development-idea-computer-technology-flat-vector-illustration_613284-1959.jpg",
          imageAlt: "تصميم وتطوير المواقع",
        },
        {
          id: "analytics",
          title: "تحليلات البيانات والتقارير",
          description: "نوفر تحليلات دقيقة وتقارير مفصلة لمساعدتك على فهم أداء حملاتك واتخاذ قرارات مستنيرة.",
          tag: "رؤى قابلة للتنفيذ",
          imageSrc: "http://img.b2bpic.net/free-vector/stock-market-analysis-with-chart_23-2148584739.jpg",
          imageAlt: "تحليلات البيانات",
        },
      ]}
      title="حلول تسويقية متكاملة لنجاح لا حدود له"
      description="نقدم مجموعة واسعة من الخدمات المصممة خصيصًا لتلبية احتياجات عملك وتحقيق أهدافك الرقمية."
      tag="خدماتنا"
      tagAnimation="opacity"
    />
  </div>

  <div id="metrics-services" data-section="metrics-services">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="أرقام تتحدث عن نجاح حملاتنا"
      tag="نتائج مبهرة"
      tagAnimation="opacity"
      metrics={[
        {
          id: "1",
          value: "+150%",
          description: "متوسط نمو الزيارات العضوية لعملائنا.",
        },
        {
          id: "2",
          value: "20M+",
          description: "وصول شهري عبر حملاتنا الاجتماعية.",
        },
        {
          id: "3",
          value: "3x",
          description: "متوسط زيادة في عائد الاستثمار للإعلانات المدفوعة.",
        },
        {
          id: "4",
          value: "95%",
          description: "نسبة الاحتفاظ بالعملاء سنوياً.",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq-services" data-section="faq-services">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "كيف تبدأون العمل معنا؟",
          content: "نبدأ بجلسة استشارة مجانية لفهم أهداف عملك واحتياجاتك، ثم نقترح خطة عمل مخصصة.",
        },
        {
          id: "2",
          title: "ما هي المدة الزمنية لرؤية النتائج؟",
          content: "تختلف المدة حسب طبيعة الخدمة وأهداف الحملة، ولكننا نلتزم بتقديم تقارير دورية ونتائج ملموسة في أقرب وقت.",
        },
        {
          id: "3",
          title: "هل تقدمون خدمات مخصصة؟",
          content: "بالتأكيد! جميع خدماتنا قابلة للتخصيص لتناسب المتطلبات الفريدة لعلامتك التجارية.",
        },
      ]}
      title="أسئلة متكررة حول خدماتنا"
      description="نجيب على بعض الاستفسارات الشائعة لمساعدتك في اتخاذ قرار مستنير."
      faqsAnimation="slide-up"
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
