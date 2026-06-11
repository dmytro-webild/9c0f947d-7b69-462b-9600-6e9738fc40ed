"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';

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

  <div id="products-work" data-section="products-work">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "project-1",
          name: "حملة إلكترونية لمتجر تجزئة",
          price: "زيادة المبيعات 120%",
          variant: "تجارة إلكترونية",
          imageSrc: "http://img.b2bpic.net/free-photo/corporate-business-line-graph-report_53876-120736.jpg",
          imageAlt: "لوحة تحكم تحليلات لمتجر تجزئة",
        },
        {
          id: "project-2",
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-abstract-paper-background_23-2147981635.jpg?_wi=1",
          imageAlt: "e-commerce analytics dashboard",
        },
      ]}
      title="أعمالنا: قصص نجاح تتحدث عن نفسها"
      description="استكشف مجموعة من المشاريع التي قمنا بها، وكيف ساعدنا عملائنا على تحقيق أهدافهم الرقمية."
      tag="مشاريعنا"
      tagAnimation="opacity"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "leadership",
          groupTitle: "فريق القيادة والخبراء",
          members: [
            {
              id: "member-1",
              title: "المدير التنفيذي",
              subtitle: "خبير استراتيجيات التسويق",
              detail: "بخبرة تتجاوز 15 عاماً في قيادة فرق التسويق وتحقيق النمو للعلامات التجارية الكبرى.",
              imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3650.jpg",
              imageAlt: "صورة المدير التنفيذي",
            },
            {
              id: "member-2",
              title: "مديرة التسويق",
              subtitle: "متخصصة في بناء العلامات التجارية",
              detail: "تجمع بين الإبداع والتحليل لإنشاء حملات تسويقية مؤثرة تصل إلى الجمهور المستهدف بفعالية.",
              imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-silly-face_1154-110.jpg",
              imageAlt: "صورة مديرة التسويق",
            },
            {
              id: "member-3",
              title: "رئيس قسم تحسين محركات البحث",
              subtitle: "خبير في السيو والتحليلات",
              detail: "يقود استراتيجيات SEO لضمان أعلى مستويات الظهور وتحقيق أفضل المراتب في نتائج البحث.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-businessman-posing-looking-camera_1163-4800.jpg",
              imageAlt: "صورة رئيس قسم تحسين محركات البحث",
            },
            {
              id: "member-4",
              title: "مديرة وسائل التواصل الاجتماعي",
              subtitle: "مبتكرة المحتوى والتفاعل",
              detail: "تبني استراتيجيات وسائل التواصل الاجتماعي التي تعزز التفاعل وتزيد من ولاء العملاء للعلامة التجارية.",
              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-chinese-lady-recording-voice-message_1262-18163.jpg",
              imageAlt: "صورة مديرة وسائل التواصل الاجتماعي",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-abstract-paper-background_23-2147981635.jpg?_wi=2",
          imageAlt: "male CEO strategic portrait",
        },
      ]}
      title="فريقنا: خبراء التسويق الرقمي تحت تصرفك"
      description="مجموعة من المحترفين الشغوفين، ملتزمون بتحقيق أفضل النتائج لعملك."
      tag="فريق العمل"
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
