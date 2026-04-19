document.addEventListener('DOMContentLoaded', () => {
    // 1. التحكم في القائمة الجانبية
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebar = document.querySelector('.close-sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // 2. تحديث بيانات الموقع من config.js
    const updateSiteData = () => {
        const companyNames = document.querySelectorAll('.company-name');
        companyNames.forEach(el => el.textContent = siteConfig.companyName);

        const logos = document.querySelectorAll('.site-logo');
        logos.forEach(img => img.src = siteConfig.logoUrl);

        const whatsappLinks = document.querySelectorAll('.whatsapp-link');
        whatsappLinks.forEach(link => {
            link.href = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}`;
        });

        const phoneLinks = document.querySelectorAll('.phone-link');
        phoneLinks.forEach(link => {
            link.href = `tel:${siteConfig.phone}`;
        });

        // تحديث روابط السوشيال ميديا
        document.querySelectorAll('.insta-link').forEach(a => a.href = siteConfig.social.instagram);
        document.querySelectorAll('.tiktok-link').forEach(a => a.href = siteConfig.social.tiktok);
        document.querySelectorAll('.snap-link').forEach(a => a.href = siteConfig.social.snapchat);
    };

    updateSiteData();

    // 3. عرض الخدمات في الصفحة الرئيسية ديناميكياً
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid && siteConfig.services) {
        servicesGrid.innerHTML = siteConfig.services.map(service => `
            <div class="service-card">
                <div class="watermark">
                    <img src="${service.image1}" alt="${service.name}">
                </div>
                <h3>${service.name}</h3>
                <p>${service.description.substring(0, 80)}...</p>
                <a href="services/service-detail.html?id=${service.id}" class="btn">عرض التفاصيل</a>
            </div>
        `).join('');
    }

    // 4. معالجة إرسال الفورم إلى واتساب مع الموقع الجغرافي
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const city = document.getElementById('city').value;
            const service = document.getElementById('service-type')?.value || "استشارة عامة";
            const details = document.getElementById('details').value;

            // محاولة الحصول على الموقع الجغرافي
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
                    sendToWhatsApp(name, phone, city, service, details, googleMapsUrl);
                }, () => {
                    // في حال رفض العميل مشاركة الموقع
                    sendToWhatsApp(name, phone, city, service, details, "لم يتم تحديد الموقع");
                });
            } else {
                sendToWhatsApp(name, phone, city, service, details, "المتصفح لا يدعم تحديد الموقع");
            }
        });
    }

    function sendToWhatsApp(name, phone, city, service, details, locationUrl) {
        const message = `طلب خدمة جديد من الموقع:\n\n` +
                        `الاسم: ${name}\n` +
                        `الجوال: ${phone}\n` +
                        `المدينة: ${city}\n` +
                        `الخدمة: ${service}\n` +
                        `التفاصيل: ${details}\n` +
                        `موقع العميل: ${locationUrl}`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
});
