// Multi-Language Support System for Truppman Law Website

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = 'en';
        this.supportedLanguages = {
            'en': { name: 'English', flag: '🇺🇸', nativeName: 'English' },
            'es': { name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
            'fr': { name: 'French', flag: '🇫🇷', nativeName: 'Français' },
            'pt': { name: 'Portuguese', flag: '🇧🇷', nativeName: 'Português' }
        };
        
        this.translations = {};
        this.init();
    }

    async init() {
        // Load saved language preference
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
        
        // Load translations
        await this.loadTranslations();
        
        // Apply current language
        this.applyLanguage(this.currentLanguage);
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Update language selector
        this.updateLanguageSelector();
        
        // Language indicator removed to avoid cluttering hero section
    }

    async loadTranslations() {
        // For now, we'll define translations inline. In production, these would be loaded from JSON files
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'HOME',
                'nav.about': 'ABOUT US',
                'nav.practice-areas': 'PRACTICE AREAS',
                'nav.hurricane-claims': 'HURRICANE CLAIMS',
                'nav.divorce-law': 'DIVORCE LAW',
                'nav.contact': 'CONTACT US',
                'nav.news': 'NEWS',
                'nav.free-consultation': 'Free Consultation',
                
                // Hero Section
                'hero.title': 'Trusted Legal Representation in Florida',
                'hero.subtitle': 'With over 30 years of experience, Harold B. Klite Truppman provides dedicated legal services across Fort Myers and Miami. From insurance claims to commercial litigation, we fight for your rights and deliver results.',
                'hero.years-experience': 'Years Experience',
                'hero.cases-won': 'Cases Won',
                'hero.florida-locations': 'Florida Locations',
                'hero.get-consultation': 'Get Free Consultation',
                'hero.call': 'Call: 239-922-3888',
                
                // Contact Information
                'contact.phone': '239-922-3888 / 305-374-7974',
                'contact.email': 'hbkt@truppmanlawoffices.com',
                'contact.address': '2451 First Street, Fort Myers, FL 33901',
                
                // Practice Areas
                'practice.bad-faith': 'Bad Faith',
                'practice.commercial-litigation': 'Commercial Litigation',
                'practice.real-estate': 'Real Estate Law',
                'practice.divorce': 'Divorce Law',
                'practice.personal-injury': 'Personal Injury',
                'practice.insurance': 'Insurance Law',
                
                // Footer
                'footer.description': 'Dedicated to providing exceptional legal services in Fort Myers and Miami, Florida. Your trusted partner for all your legal needs.',
                'footer.copyright': '© 2024 Truppman Law Offices. All rights reserved.',
                'footer.privacy': 'Privacy Policy',
                'footer.terms': 'Terms of Service',
                'footer.sitemap': 'Sitemap'
            },
            es: {
                // Navigation
                'nav.home': 'INICIO',
                'nav.about': 'ACERCA DE',
                'nav.practice-areas': 'ÁREAS DE PRÁCTICA',
                'nav.hurricane-claims': 'RECLAMOS DE HURACANES',
                'nav.divorce-law': 'LEY DE DIVORCIO',
                'nav.contact': 'CONTACTO',
                'nav.news': 'NOTICIAS',
                'nav.free-consultation': 'Consulta Gratuita',
                
                // Hero Section
                'hero.title': 'Representación Legal Confiable en Florida',
                'hero.subtitle': 'Con más de 30 años de experiencia, Harold B. Klite Truppman brinda servicios legales dedicados en Fort Myers y Miami. Desde reclamos de seguros hasta litigios comerciales, luchamos por sus derechos y entregamos resultados.',
                'hero.years-experience': 'Años de Experiencia',
                'hero.cases-won': 'Casos Ganados',
                'hero.florida-locations': 'Ubicaciones en Florida',
                'hero.get-consultation': 'Obtener Consulta Gratuita',
                'hero.call': 'Llamar: 239-922-3888',
                
                // Contact Information
                'contact.phone': '239-922-3888 / 305-374-7974',
                'contact.email': 'hbkt@truppmanlawoffices.com',
                'contact.address': '2451 First Street, Fort Myers, FL 33901',
                
                // Practice Areas
                'practice.bad-faith': 'Mala Fe',
                'practice.commercial-litigation': 'Litigio Comercial',
                'practice.real-estate': 'Ley Inmobiliaria',
                'practice.divorce': 'Ley de Divorcio',
                'practice.personal-injury': 'Lesiones Personales',
                'practice.insurance': 'Ley de Seguros',
                
                // Footer
                'footer.description': 'Dedicados a brindar servicios legales excepcionales en Fort Myers y Miami, Florida. Su socio de confianza para todas sus necesidades legales.',
                'footer.copyright': '© 2024 Oficinas Legales Truppman. Todos los derechos reservados.',
                'footer.privacy': 'Política de Privacidad',
                'footer.terms': 'Términos de Servicio',
                'footer.sitemap': 'Mapa del Sitio'
            },
            fr: {
                // Navigation
                'nav.home': 'ACCUEIL',
                'nav.about': 'À PROPOS',
                'nav.practice-areas': 'DOMAINES DE PRATIQUE',
                'nav.hurricane-claims': 'RÉCLAMATIONS OURAGAN',
                'nav.divorce-law': 'DROIT DU DIVORCE',
                'nav.contact': 'CONTACT',
                'nav.news': 'ACTUALITÉS',
                'nav.free-consultation': 'Consultation Gratuite',
                
                // Hero Section
                'hero.title': 'Représentation Juridique de Confiance en Floride',
                'hero.subtitle': 'Avec plus de 30 ans d\'expérience, Harold B. Klite Truppman fournit des services juridiques dédiés à Fort Myers et Miami. Des réclamations d\'assurance aux litiges commerciaux, nous défendons vos droits et obtenons des résultats.',
                'hero.years-experience': 'Années d\'Expérience',
                'hero.cases-won': 'Affaires Gagnées',
                'hero.florida-locations': 'Emplacements en Floride',
                'hero.get-consultation': 'Obtenir une Consultation Gratuite',
                'hero.call': 'Appeler: 239-922-3888',
                
                // Contact Information
                'contact.phone': '239-922-3888 / 305-374-7974',
                'contact.email': 'hbkt@truppmanlawoffices.com',
                'contact.address': '2451 First Street, Fort Myers, FL 33901',
                
                // Practice Areas
                'practice.bad-faith': 'Mauvaise Foi',
                'practice.commercial-litigation': 'Litige Commercial',
                'practice.real-estate': 'Droit Immobilier',
                'practice.divorce': 'Droit du Divorce',
                'practice.personal-injury': 'Blessures Personnelles',
                'practice.insurance': 'Droit des Assurances',
                
                // Footer
                'footer.description': 'Dédiés à fournir des services juridiques exceptionnels à Fort Myers et Miami, Floride. Votre partenaire de confiance pour tous vos besoins juridiques.',
                'footer.copyright': '© 2024 Cabinets d\'Avocats Truppman. Tous droits réservés.',
                'footer.privacy': 'Politique de Confidentialité',
                'footer.terms': 'Conditions de Service',
                'footer.sitemap': 'Plan du Site'
            },
            pt: {
                // Navigation
                'nav.home': 'INÍCIO',
                'nav.about': 'SOBRE NÓS',
                'nav.practice-areas': 'ÁREAS DE ATUAÇÃO',
                'nav.hurricane-claims': 'REIVINDICAÇÕES DE FURACÃO',
                'nav.divorce-law': 'LEI DO DIVÓRCIO',
                'nav.contact': 'CONTATO',
                'nav.news': 'NOTÍCIAS',
                'nav.free-consultation': 'Consulta Gratuita',
                
                // Hero Section
                'hero.title': 'Representação Legal Confiável na Flórida',
                'hero.subtitle': 'Com mais de 30 anos de experiência, Harold B. Klite Truppman fornece serviços jurídicos dedicados em Fort Myers e Miami. De reivindicações de seguro a litígios comerciais, lutamos pelos seus direitos e entregamos resultados.',
                'hero.years-experience': 'Anos de Experiência',
                'hero.cases-won': 'Casos Vencidos',
                'hero.florida-locations': 'Locais na Flórida',
                'hero.get-consultation': 'Obter Consulta Gratuita',
                'hero.call': 'Ligar: 239-922-3888',
                
                // Contact Information
                'contact.phone': '239-922-3888 / 305-374-7974',
                'contact.email': 'hbkt@truppmanlawoffices.com',
                'contact.address': '2451 First Street, Fort Myers, FL 33901',
                
                // Practice Areas
                'practice.bad-faith': 'Má-Fé',
                'practice.commercial-litigation': 'Litígio Comercial',
                'practice.real-estate': 'Direito Imobiliário',
                'practice.divorce': 'Lei do Divórcio',
                'practice.personal-injury': 'Lesões Pessoais',
                'practice.insurance': 'Direito de Seguros',
                
                // Footer
                'footer.description': 'Dedicados a fornecer serviços jurídicos excepcionais em Fort Myers e Miami, Flórida. Seu parceiro confiável para todas as suas necessidades legais.',
                'footer.copyright': '© 2024 Escritórios de Advocacia Truppman. Todos os direitos reservados.',
                'footer.privacy': 'Política de Privacidade',
                'footer.terms': 'Termos de Serviço',
                'footer.sitemap': 'Mapa do Site'
            }
        };
    }

    setupEventListeners() {
        // Language selector dropdown
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.switchLanguage(e.target.value);
            });
        }

        // Flag icon clicks in top navbar
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('flag-icon')) {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            }
        });
    }

    switchLanguage(languageCode) {
        if (this.supportedLanguages[languageCode]) {
            this.currentLanguage = languageCode;
            localStorage.setItem('preferredLanguage', languageCode);
            this.applyLanguage(languageCode);
            this.updateLanguageSelector();
            this.updateFlagStates();
        }
    }

    updateFlagStates() {
        // Update flag icon states
        document.querySelectorAll('.flag-icon').forEach(flag => {
            flag.classList.remove('active');
            if (flag.dataset.lang === this.currentLanguage) {
                flag.classList.add('active');
            }
        });
    }

    applyLanguage(languageCode) {
        const translations = this.translations[languageCode] || this.translations['en'];
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = languageCode;
        
        // Update page title if translation exists
        const titleKey = document.querySelector('meta[name="title-key"]');
        if (titleKey && translations[titleKey.content]) {
            document.title = translations[titleKey.content];
        }
    }

    updateLanguageSelector() {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = this.currentLanguage;
        }
    }

    createLanguageIndicator() {
        // Create floating language indicator showing supported languages
        const indicator = document.createElement('div');
        indicator.className = 'language-indicator';
        indicator.innerHTML = `
            <div class="language-indicator-content">
                <div class="language-indicator-header">
                    <i class="fas fa-globe"></i>
                    <span>Available Languages</span>
                </div>
                <div class="language-flags">
                    ${Object.entries(this.supportedLanguages).map(([code, lang]) => `
                        <span class="lang-flag ${code === this.currentLanguage ? 'active' : ''}" 
                              data-lang="${code}" 
                              title="${lang.name}">
                            ${lang.flag}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.body.appendChild(indicator);
    }
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});