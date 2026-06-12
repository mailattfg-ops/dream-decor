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
        "culinary-elegance": {
            title: "Culinary Elegance",
            category: "Modular Kitchen",
            client: "Mr. & Mrs. R. Nair",
            materials: "Dark Oak cabinetry, Calacatta Gold marble, Copper pendant fittings",
            year: "2026",
            story: "A complete redesign of a modern open-concept culinary space. Our team focused on structural layout flow, maximizing storage with handleless cabinetry, and selecting premium calacatta marble slabs with matching bronze accents to anchor the room's aesthetic.",
            images: ["assets/gallery_kitchen.webp", "assets/kitchen.webp"]
        },
        "warm-sanctuary": {
            title: "Warm Sanctuary",
            category: "Bedroom Suite",
            client: "Anjali Sharma",
            materials: "Velvet paneling, Walnut veneers, Brushed gold",
            year: "2025",
            story: "Designed as a personal hotel-suite sanctuary. The highlight is the custom headboard integrated with sound-dampening panels, floating walnut nightstands, and soft, dimmable ambient pendant glow panels for relaxing evenings.",
            images: ["assets/bedroom.webp", "assets/service_bed.webp"]
        },
        "bespoke-closet": {
            title: "Bespoke Closet",
            category: "Custom Closet",
            client: "Vikram Malhotra",
            materials: "Oak timber, Glass doors, Warm LED strip",
            year: "2026",
            story: "An end-to-end walk-in closet customization. We integrated black oak frames, clear glass doors, and automated LED strip lights that illuminate shelves as you enter. The central island holds custom organizers for accessories.",
            images: ["assets/wardrobe.webp", "assets/service_wardrobe.webp"]
        },
        "obsidian-lounge": {
            title: "Obsidian Lounge",
            category: "Living Space",
            client: "The Grand Regency",
            materials: "Obsidian marble, Polished walnut, Leather",
            year: "2026",
            story: "An expansive, panoramic living room configuration that anchors the home. Features minimalist floating cabinets, premium bookmatched marble slabs, and custom modular sofas optimized to frame the garden view.",
            images: ["assets/hero.webp", "assets/service_home.webp"]
        },
        "minimalist-console": {
            title: "Minimalist Console",
            category: "Media Console",
            client: "Siddharth Sen",
            materials: "Walnut slats, LED strips, White marble",
            year: "2025",
            story: "A custom entertainment console designed to hide all cabling and media players seamlessly. The background utilizes vertical walnut timber slats contrasted against an illuminated marble slab.",
            images: ["assets/tv_unit.webp", "assets/service_tv.webp"]
        },
        "artisan-kitchen": {
            title: "Artisan Kitchen",
            category: "Modular Kitchen",
            client: "Meera Fernandez",
            materials: "Matte charcoal laminate, Brass pulls, Carrara marble",
            year: "2026",
            story: "A classic yet contemporary kitchen space designed for high utility. Incorporates heavy-duty plywood lamination, scratch-resistant matte finishes, and a spacious central island for culinary preparation.",
            images: ["assets/kitchen.webp", "assets/gallery_kitchen.webp"]
        },
        "bronze-partition": {
            title: "Bronze Partition",
            category: "Room Partition",
            client: "Rajesh & Kavitha",
            materials: "Fluted timber, Bronze frames, Frosted glass",
            year: "2026",
            story: "A functional divider partition wall that maintains a sense of flow. Built with fluted solid wood panels set in hand-brushed bronze tracks, creating a private dining layout without shutting off light.",
            images: ["assets/partition.webp", "assets/service_partition.webp"]
        },
        "aesthetic-accents": {
            title: "Aesthetic Accents",
            category: "Interior Details",
            client: "Dr. Sandeep Gupta",
            materials: "Ceramic, Brass, Organic linen",
            year: "2025",
            story: "Carefully curated accessory arrangements that add texture and personal identity to the spaces. Includes linen drapes, brass lighting bowls, and handmade sculptural clay ceramics.",
            images: ["assets/decor.webp", "assets/service_decor.webp"]
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
        const waUrl = `https://wa.me/918921860580?text=${encodedMsg}`;
        
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
});
