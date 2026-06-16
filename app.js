/* ==========================================================================
   Dream Decor Interiors - Luxury Script Handler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate burger bars to cross
        const bars = navToggle.querySelectorAll('.bar');
        if (navToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close menu when link is clicked (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navToggle.click(); // resets state and toggles class
            }
        });
    });

    // Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // About Us Tabs Logic
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from buttons & contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Set clicked tab and content active
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Active Nav Link Highlight based on Scroll Section
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Project Details Data
    const projectDetails = {
        "modular-kitchen-&-breakfast-counter": {
            title: "Modular Kitchen & Breakfast Counter",
            category: "Chavara",
            client: "Private Client",
            materials: "Marine Plywood, Acrylic Laminate, Granite Countertops",
            year: "2026",
            story: "A complete custom kitchen and breakfast counter layout executed in Chavara. We optimized the work triangle, integrated heavy-duty modular hardware, and constructed a beautiful floating breakfast island.",
            images: [
                "assets/real projects/kitchen, chavara.webp",
                "assets/real projects/kitchen 2, chavara.webp",
                "assets/real projects/breakfast counter, chavara.webp"
            ]
        },
        "modular-kitchen,-tv-unit-&-partition": {
            title: "Modular Kitchen, TV Unit & Partition",
            category: "Madannada",
            client: "Private Client",
            materials: "Multiwood, Veneer Finishes, Toughened Glass",
            year: "2026",
            story: "A full home interior execution in Madannada. This showcases a custom TV console unit, a fluted wooden dining room partition, and a functional high-end modular kitchen built to maximize space utility.",
            images: [
                "assets/real projects/tv-unit-madannada.webp",
                "assets/real projects/partition-madannada.webp",
                "assets/real projects/kitchen-madannada.webp"
            ]
        },
        "wash-area-&-staircase": {
            title: "Wash Area & Staircase",
            category: "Edava",
            client: "Private Client",
            materials: "Teak Wood, LED Backlights, Premium Sanitaryware",
            year: "2026",
            story: "A premium wash area integrated with smart under-stair storage storage executed in Edava. The project highlights clean lines, hidden storage cabinets, and ambient washbasin lighting.",
            images: [
                "assets/real projects/wash & stair, Edava.webp"
            ]
        },
        "bespoke-wardrobe": {
            title: "Bespoke Wardrobe",
            category: "Punthalathazham",
            client: "Private Client",
            materials: "MDF panels, Soft-close hinges, Luxury Laminate",
            year: "2026",
            story: "A sleek bedroom wardrobe solution executed in Punthalathazham. Features internal organizers, custom drawer units, and a durable soft-close sliding system.",
            images: [
                "assets/real projects/waredrobe, punthalathazham.webp"
            ]
        },
        "wardrobe-with-bay-window": {
            title: "Wardrobe with Bay Window",
            category: "Ernakulam",
            client: "Private Client",
            materials: "Plywood carcass, Upholstered cushions, Premium laminates",
            year: "2026",
            story: "An elegant master bedroom wardrobe featuring an integrated upholstered bay window seating area. Executed with hidden storage drawers under the bench and tall closets.",
            images: [
                "assets/real projects/waredrobe with bay window, ernamkulam.webp"
            ]
        },
        "wardrobe-with-study-table": {
            title: "Wardrobe with Study Table",
            category: "Kottayam",
            client: "Private Client",
            materials: "High-grade laminates, Wooden study desk, Warm LED strip",
            year: "2026",
            story: "A bedroom layout combining wardrobe storage and a study desk workspace executed in Kottayam. Designed to optimize compact layouts while offering high aesthetic value.",
            images: [
                "assets/real projects/Wardrobe with study table, Kottayam.webp"
            ]
        },
        "wardrobe-with-study-table---kulathupuzha": {
            title: "Wardrobe with Study Table - Kulathupuzha",
            category: "Kulathupuzha",
            client: "Private Client",
            materials: "Laminated plywood, Integrated desk, Custom pulls",
            year: "2026",
            story: "A bespoke kid's room design in Kulathupuzha integrating full-height wardrobe units and a large attached study desk layout with custom shelf organizers.",
            images: [
                "assets/real projects/Wardrobe with study table, Kulathupuzha.webp",
                "assets/real projects/Wardrobe with study table 2, Kulathupuzha.webp"
            ]
        }
    };

    // Helper to map project names to keys
    const getProjectKey = (titleText) => {
        return titleText.toLowerCase().trim().replace(/\s+/g, '-');
    };

    // Lightbox / Zoom Feature for Gallery
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        // Image zoom on click of card (except button)
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-btn')) return; // handled separately
            
            const img = item.querySelector('img');
            const title = item.querySelector('h3').textContent;
            const category = item.querySelector('.category').textContent;

            lightboxImg.src = img.src;
            lightboxCaption.textContent = `${category} - ${title}`;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // stop scroll
        });
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // restore scroll
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Case Study Drawer Interactivity
    const projectDrawer = document.getElementById('projectDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerClose = document.getElementById('drawerClose');
    const viewButtons = document.querySelectorAll('.view-btn');

    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent lightbox
            
            const card = btn.closest('.gallery-item');
            const titleText = card.querySelector('h3').textContent;
            const key = getProjectKey(titleText);
            const data = projectDetails[key];
            
            if (data) {
                // Populate Drawer fields
                document.getElementById('drawerCategory').textContent = data.category.toUpperCase();
                document.getElementById('drawerTitle').textContent = data.title;
                document.getElementById('drawerClient').textContent = data.client;
                document.getElementById('drawerMaterials').textContent = data.materials;
                document.getElementById('drawerYear').textContent = data.year;
                document.getElementById('drawerStory').textContent = data.story;
                
                // Populate Drawer gallery
                const galleryContainer = document.getElementById('drawerGallery');
                galleryContainer.innerHTML = '';
                
                data.images.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = `${data.title} Detail`;
                    img.className = 'drawer-gallery-img';
                    
                    // Add zoom lightbox on click of details images too!
                    img.addEventListener('click', () => {
                        lightboxImg.src = imgSrc;
                        lightboxCaption.textContent = `${data.category} - ${data.title} Detail`;
                        lightbox.classList.add('active');
                    });
                    
                    galleryContainer.appendChild(img);
                });
                
                // Show Drawer
                projectDrawer.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeDrawer = () => {
        projectDrawer.classList.remove('active');
        document.body.style.overflow = '';
    };

    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    // Slideshow Transition Logic (Fade Slideshow)
    const initSlideshow = (slideshowId, interval = 4000) => {
        const frame = document.getElementById(slideshowId);
        if (!frame) return;
        const slides = frame.querySelectorAll('.slide');
        let currentIndex = 0;
        
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, interval);
    };
    
    initSlideshow('aboutSlideshow', 4000);
    initSlideshow('whyUsSlideshow', 4500);

    // Auto Transition Vision & Mission Content
    const initTabAutoCycle = (interval = 6000) => {
        const tabBtns = document.querySelectorAll('.tab-btn');
        if (tabBtns.length === 0) return;
        let currentTabIdx = 0;
        
        setInterval(() => {
            currentTabIdx = (currentTabIdx + 1) % tabBtns.length;
            tabBtns[currentTabIdx].click();
        }, interval);
    };
    initTabAutoCycle(6000);

    // Contact Form Submission Handler (WhatsApp Redirection)
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const serviceSelect = document.getElementById('service');
        const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
        const details = document.getElementById('message').value;

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'REDIRECTING TO WHATSAPP...';
        
        // Construct WhatsApp format
        const waMessage = `*Dream Decor Interiors Inquiry*\n` +
                          `---------------------------------\n` +
                          `*Name:* ${name}\n` +
                          `*Mobile:* ${phone}\n` +
                          `*Email:* ${email}\n` +
                          `*Service:* ${serviceName}\n` +
                          `*Message:* ${details || 'None'}`;
                          
        const encodedMsg = encodeURIComponent(waMessage);
        const waUrl = `https://wa.me/917306394008?text=${encodedMsg}`;
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            
            // Redirect
            window.open(waUrl, '_blank');
            
            // Clear input fields
            contactForm.reset();
            
            // Success response
            formResponse.textContent = 'Inquiry details formatted. Redirected to WhatsApp chat successfully.';
            formResponse.className = 'form-response success';
            
            setTimeout(() => {
                formResponse.textContent = '';
                formResponse.className = 'form-response';
            }, 6000);
            
        }, 1200);
     });

    // Gallery Category Filtering
    const galleryTabBtns = document.querySelectorAll('.gallery-tab-btn');
    const galleryItemsList = document.querySelectorAll('.gallery-item');

    galleryTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            galleryTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItemsList.forEach(item => {
                const itemType = item.getAttribute('data-type');
                if (filterValue === 'all' || itemType === filterValue) {
                    item.style.display = '';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        const activeFilter = document.querySelector('.gallery-tab-btn.active').getAttribute('data-filter');
                        if (activeFilter !== 'all' && itemType !== activeFilter) {
                            item.style.display = 'none';
                        }
                    }, 350);
                }
            });
        });
    });
});
