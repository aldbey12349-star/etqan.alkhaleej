/**
 * صفحة الأكواد المخصصة لإدارة محتوى موقع شركة إتقان الخليج
 * ---------------------------------------------------
 * يمكنك من هنا تعديل كل شيء في الموقع بسهولة تامة:
 * 1. اللوجو والاسم
 * 2. أرقام التواصل وروابط السوشيال ميديا
 * 3. الخدمات (الاسم، الوصف، الصور)
 * 4. معرض الأعمال (إضافة صور جديدة)
 */

const siteConfig = {
    // --- [1] إعدادات الهوية البصرية ---
    companyName: "شركة اتقان الخليج راحتك تبدأ بخدمات منزلية موثوقة",
   logoUrl: "https://i.postimg.cc/kVGb0KZv/Picsart-26-04-17-01-09-51-296.jpg", // غير رابط اللوجو هنا
    
    // --- [2] بيانات التواصل الاجتماعي ---
    phone: "+966579465223",
    whatsapp: "+966579465223",
    location: "المملكة العربية السعودية",
    social: {
        instagram: "https://www.instagram.com/itqan_al_khaleej?igsh=cThldDBnMWo5cDhw", // رابط إنستجرام
        tiktok: "https://www.tiktok.com/@itqan_al_khaleej?_r=1&_d=eh3480hdijfh68&sec_uid=MS4wLjABAAAAjot6C309rnanD3PlIHy1Gr5qzIu87PiedDBl_2mSI93xpNkcbUWgqNxEDGd0o822&share_author_id=7629693277961012242&sharer_language=ar&source=h5_m&u_code=f33d3k996mgj00&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAAjot6C309rnanD3PlIHy1Gr5qzIu87PiedDBl_2mSI93xpNkcbUWgqNxEDGd0o822&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7629693277961012242&share_link_id=A83E7DC2-0F86-4691-882D-5717DCA7CD5C&share_app_id=1233",       // رابط تيك توك
        snapchat: "https://snapchat.com/t/IPXe6DFq" // رابط سناب شات
    },

    // --- [3] قائمة الخدمات (يمكنك تعديل الأسماء والروابط هنا) ---
    services: [
        {
            id: "water-leak",
            name: "إصلاح تسريبات المياه",
            description: "نستخدم أحدث الأجهزة لكشف وتسريب المياه بدون تكسير مع ضمان معتمد.",
            image1: "https://i.postimg.cc/7LXvx0dV/IMG-20260415-WA0055.jpg",
            image2: "https://i.postimg.cc/cr9VcNQX/IMG-20260415-WA0059.jpg",
            features: ["كشف إلكتروني", "إصلاح فوري", "ضمان علي الخدمه "]
        },
        {
            id: "insulation",
            name: "العزل المائي والحراري",
            description: "حماية منزلك من الرطوبة والحرارة بأفضل مواد العزل العالمية.",
            image1: "https://i.postimg.cc/4n5CmcnZ/IMG-20260415-WA0089.jpg",
            image2: "https://i.postimg.cc/MXDkvBXc/IMG-20260415-WA0083.jpg",
            features: ["عزل أسطح", "عزل خزانات", "توفير كهرباء"]
        },
        {
            id: "pest-control",
            name: "تمديدات الغاز ",
            description: "تنفيذ وتمديد شبكات الغاز بطريقة آمنة وفق أعلى معايير السلامة.",
            image1: "https://i.postimg.cc/RNsjTzc2/IMG-20260415-WA0051(1).jpg",
            image2: "https://i.postimg.cc/PP3BMkmB/IMG-20260415-WA0050(1).jpg",
            features: [" آمنة", "ضمان إبادة", "متابعة دورية"]
        },
        {
            id: "cleaning",
            name: "تنظيف المنازل والشقق",
            description: "تنظيف شامل وعميق للمنازل والفلل والشقق بأيدي عمالة مدربة.",
            image1: "https://i.postimg.cc/w7TCJBsw-/IMG-20260415-WA0068.jpg",
            image2: "https://i.postimg.cc/vcHJ9m6X/IMG-20260415-WA0070.jpg",
            features: ["تنظيف كنب وسجاد", "جلي بلاط", "تعقيم كامل"]
        },
        {
            id: "plumbing",
            name: "جميع أعمال السباكة",
            description: "تأسيس وتشطيب وصيانة جميع شبكات السباكة والصرف الصحي.",
            image1: "https://i.postimg.cc/bsCKRjQT/IMG-20260415-WA0062.jpg",
            image2: "https://i.postimg.cc/ykQwTzFT/IMG-20260415-WA0063.jpg",
            features: ["تركيب أدوات صحية", "تسليك مجاري", "صيانة فورية"]
        },
        {
            id: "restoration",
            name: "أعمال الترميم والصيانة العامة",
            description: "تجديد شامل للمباني والفلل القديمة وإعادتها كأنها جديدة.",
            image1: "https://i.postimg.cc/w7TCJBsk/IMG-20260415-WA0074(1).jpg",
            image2: "https://i.postimg.cc/kBX085tB/IMG-20260415-WA0079.jpg",
            features: ["ترميم إنشائي", "معالجة شروخ", "تجديد واجهات"]
        },
        {
            id: "glass-facades",
            name: "تركيب وصيانة الزجاج والواجهات",
            description: "متخصصون في تركيب الواجهات الزجاجية والزجاج السيكوريت للمحلات والفلل.",
            image1: "https://i.postimg.cc/4nZkfPfq/IMG-20260415-WA0110(1).jpg",
            image2: "https://i.postimg.cc/5j1d4g4R/IMG-20260415-WA0111.jpg",
            features: ["زجاج سيكوريت", "واجهات استركشر", "صيانة دورية"]
        },
        {
            id: "alumetal",
            name: "نقل عفش",
            description: "نقدم نقل عفش متكامله داخل و خارج جميع مدن المملكه باعلي درجات الامان",
            image1: "https://i.postimg.cc/vDMFYh8F/IMG-20260415-WA0105.jpg",
            image2: "https://i.postimg.cc/dDBMLC3W/IMG-20260415-WA0104.jpg",
            features: ["تحميل و تنزيل و نقل العفش ", "تغليف العفش بماد حمايه","فك جميع انوع الاثاثات"]
        },
        {
            id: "painting",
            name: "دهانات وتشطيبات داخلية",
            description: "أحدث صيحات الدهانات والديكورات الداخلية بأرقى الألوان والخامات.",
            image1: "https://i.postimg.cc/VJ7n6KPY/Screenshot-20260417-022937-Tik-Tok.jpg",
            image2: "https://i.postimg.cc/qNB249SN/Screenshot-20260417-022927-Tik-Tok.jpg",
            features: ["دهانات جوتن", "ديكورات جبسية", "ورق حائط"]
        },
        {
            id: "bathrooms",
            name: "إصلاح وتجديد الحمامات والمطابخ",
            description: "تجديد كامل للحمامات والمطابخ يشمل السباكة والكهرباء والسيراميك.",
            image1: "https://i.postimg.cc/jDqytGmn/Screenshot-20260417-024223-Tik-Tok.jpg",
            image2: "https://i.postimg.cc/75PSw-pdC/Screenshot-20260417-024513-Tik-Tok.jpg",
            features: ["تغيير سيراميك", "تأسيس سباكة", "عزل أرضيات"]
        },
        {
            id: "maintenance",
            name: "صيانة شاملة للمنازل والعقارات",
            description: "خدمات الصيانة الوقائية والدورية لجميع مرافق المنزل والعقار.",
            image1: "https://i.postimg.cc/RNsjTzcL/IMG-20260415-WA0064.jpg",
            image2: "https://i.postimg.cc/56NhvtFY/IMG-20260415-WA0077(1).jpg",
            features: ["عقود سنوية", "صيانة طارئة", "فريق فني متكامل"]
        }
    ],

    // --- [4] معرض الصور (يمكنك إضافة صور جديدة هنا وتحديد القسم التابعة له) ---
     gallery: [
    { category: "cleaning", image: "https://i.postimg.cc/dLHz9K8x/IMG-20260415-WA0053(1).jpg", title: "مديدات غاز" },
    { category: "cleaning", image: "https://i.postimg.cc/PP3BMkmB/IMG-20260415-WA0050(1).jpg", title: "مديدات غاز" },
    { category: "cleaning", image: "https://i.postimg.cc/w7fSkdhZ/IMG-20260415-WA0052(1).jpg", title: "مديدات غاز" },
    { category: "cleaning", image: "https://i.postimg.cc/4n5CmcnZ/IMG-20260415-WA0089.jpg", title: "عزل أسطح" },
    { category: "cleaning", image: "https://i.postimg.cc/MXDkvBXS/IMG-20260415-WA0092.jpg", title: "عزل أسطح" },
    { category: "cleaning", image: "https://i.postimg.cc/2VcPxfQp/IMG-20260415-WA0048.jpg", title: "خدمات الفوم" },

    // هنا الفيديو الجديد
{ category: "video", video: "https://streamable.com/j54k33", title: "تشطيبات اعمال السباكه" },
     { category: "video", video: "https://streamable.com/f64mxa", title: "فيديو توضيحي للخدمات" },
         { category: "video", video: "https://streamable.com/mtmjvm", title: "كشف تسريبات مسبح" },

]

};
