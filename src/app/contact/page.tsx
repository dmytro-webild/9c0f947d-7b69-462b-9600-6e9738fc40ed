"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
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

  <div id="contact-form" data-section="contact-form">
      <ContactSplitForm
      useInvertedBackground={true}
      title="تواصل معنا اليوم"
      description="دعنا نبدأ رحلة نجاحك الرقمي. املأ النموذج وسنتواصل معك قريباً."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "الاسم الكامل",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "البريد الإلكتروني",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "رقم الهاتف",
          required: false,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "كيف يمكننا مساعدتك؟",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/mid-adult-businessman-texting-smart-phone-while-sitting-with-colleague-desk-office_662251-6.jpg"
      imageAlt="مكتب حديث لشخص يعمل على كمبيوتر محمول"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="إرسال الرسالة"
    />
  </div>

  <div id="faq-general" data-section="faq-general">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "أين يقع مكتبكم الرئيسي؟",
          content: "مكتبنا الرئيسي يقع في مدينة الرياض، المملكة العربية السعودية، ولكننا نخدم عملاءنا في جميع أنحاء المنطقة والعالم.",
        },
        {
          id: "2",
          title: "ما هي ساعات عملكم؟",
          content: "نحن نعمل من الأحد إلى الخميس، من الساعة 9 صباحًا حتى 5 مساءً بتوقيت الرياض.",
        },
        {
          id: "3",
          title: "هل تقدمون استشارات مجانية؟",
          content: "نعم، نقدم استشارة مجانية أولية لمناقشة احتياجاتك وكيف يمكننا مساعدتك.",
        },
      ]}
      title="أسئلة شائعة"
      description="ابحث عن إجابات لاستفساراتك العامة حول شركتنا."
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
