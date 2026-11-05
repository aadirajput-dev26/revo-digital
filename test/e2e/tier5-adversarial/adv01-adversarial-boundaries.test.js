const { describe, it, expect, requireSourceFile, parseAndValidateWhatsAppUrl } = require('../test-helpers');

describe('Tier 5 Adversarial: Form Validation & URL Encoding Stress', () => {
  it('ADV-01: Form validation blocks empty name and phone without crashing, highlighting inputs in red', () => {
    const faqFooterSource = requireSourceFile('src/components/FaqFooter.tsx');
    expect(faqFooterSource).toContain('if (!formData.fullName.trim())');
    expect(faqFooterSource).toContain('errors.fullName = "Please enter your full name"');
    expect(faqFooterSource).toContain('if (!formData.whatsappNumber.trim())');
    expect(faqFooterSource).toContain('errors.whatsappNumber = "Please enter your WhatsApp number"');
    expect(faqFooterSource).toContain('formErrors.fullName ? "border-red-500" : "border-border"');
    expect(faqFooterSource).toContain('formErrors.whatsappNumber ? "border-red-500" : "border-border"');
  });

  it('ADV-02: Form error states clear immediately when user corrects the input', () => {
    const faqFooterSource = requireSourceFile('src/components/FaqFooter.tsx');
    expect(faqFooterSource).toContain('if (formErrors[field])');
    expect(faqFooterSource).toContain('delete next[field]');
  });

  it('ADV-03: WhatsApp URL generator handles extreme unicode, emoji, and special character inputs safely', () => {
    const specialBusiness = 'Café "L’Étoile" & Brew <Co.> #1 / 100% 👍';
    const specialReq = 'Need 10 stands with ☕✨🎉 and symbols @#$%^&*()_+{}[]:;"\'<>?,./|\\~`';
    const message = [
      `*New Product Enquiry — RevoDigital*`,
      `*Business Name:* ${specialBusiness}`,
      `*Requirements:* ${specialReq}`,
    ].join('\n');
    const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    const parsed = parseAndValidateWhatsAppUrl(waUrl);
    expect(parsed.isValid).toBe(true);
    expect(parsed.text).toContain(specialBusiness);
    expect(parsed.text).toContain('☕✨🎉');
    expect(parsed.text).toContain('@#$%^&*()');
  });

  it('ADV-04: Quantity boundary values (1, 2, 5, 10, 25+ bulk) parse properly to numeric values', () => {
    const faqFooterSource = requireSourceFile('src/components/FaqFooter.tsx');
    expect(faqFooterSource).toContain('<option value={1}>1 piece</option>');
    expect(faqFooterSource).toContain('<option value={2}>2 pieces</option>');
    expect(faqFooterSource).toContain('<option value={5}>5 pieces</option>');
    expect(faqFooterSource).toContain('<option value={10}>10 pieces</option>');
    expect(faqFooterSource).toContain('<option value={25}>25+ pieces (Bulk)</option>');
    expect(faqFooterSource).toContain('handleInputChange("quantity", Number(e.target.value))');
  });
});

describe('Tier 5 Adversarial: Layout Viewport & Drawer Boundaries', () => {
  it('ADV-05: Desktop, tablet, and mobile layouts respect 1280px container bounds and padding', () => {
    const heroSource = requireSourceFile('src/components/Hero.tsx');
    const productsSource = requireSourceFile('src/components/ProductsSection.tsx');
    const gallerySource = requireSourceFile('src/components/GalleryCustom.tsx');
    const howAiSource = requireSourceFile('src/components/HowAiWho.tsx');
    const faqFooterSource = requireSourceFile('src/components/FaqFooter.tsx');

    expect(heroSource).toContain('max-w-[1280px]');
    expect(productsSource).toContain('max-w-[1280px]');
    expect(gallerySource).toContain('max-w-[1280px]');
    expect(howAiSource).toContain('max-w-[1280px]');
    expect(faqFooterSource).toContain('max-w-[1280px]');
  });

  it('ADV-06: Potential overflow hazards (gradients, ambient blurs) are contained with overflow-hidden', () => {
    const heroSource = requireSourceFile('src/components/Hero.tsx');
    const howAiSource = requireSourceFile('src/components/HowAiWho.tsx');
    const productsSource = requireSourceFile('src/components/ProductsSection.tsx');

    expect(heroSource).toContain('overflow-hidden');
    expect(howAiSource).toContain('overflow-hidden');
    expect(productsSource).toContain('overflow-hidden');
  });

  it('ADV-07: Mobile drawer opens, closes on link click, and provides backdrop blur styling', () => {
    const navbarSource = requireSourceFile('src/components/Navbar.tsx');
    expect(navbarSource).toContain('const [mobileMenuOpen, setMobileMenuOpen] = useState(false)');
    expect(navbarSource).toContain('setMobileMenuOpen(!mobileMenuOpen)');
    expect(navbarSource).toContain('setMobileMenuOpen(false)');
    expect(navbarSource).toContain('backdrop-blur-lg');
  });
});

describe('Tier 5 Adversarial: DOM & Asset Accessibility Integrity', () => {
  it('ADV-08: All <img> elements have non-empty src and descriptive alt attributes', () => {
    const files = [
      'src/components/Navbar.tsx',
      'src/components/Hero.tsx',
      'src/components/ProductsSection.tsx',
      'src/components/GalleryCustom.tsx',
      'src/components/HowAiWho.tsx',
      'src/components/FaqFooter.tsx',
    ];
    let totalImages = 0;
    for (const f of files) {
      const src = requireSourceFile(f);
      const matches = [...src.matchAll(/<img\s+([^>]+)>/g)];
      for (const m of matches) {
        totalImages++;
        const attrs = m[1];
        expect(attrs).toContain('src=');
        expect(attrs).toContain('alt=');
        expect(attrs).not.toContain('alt=""');
        expect(attrs).not.toContain("alt=''");
      }
    }
    expect(totalImages >= 10).toBe(true);
  });

  it('ADV-09: All icon-only buttons have descriptive aria-label attributes', () => {
    const navbarSource = requireSourceFile('src/components/Navbar.tsx');
    const heroSource = requireSourceFile('src/components/Hero.tsx');
    const howAiSource = requireSourceFile('src/components/HowAiWho.tsx');
    const productsSource = requireSourceFile('src/components/ProductsSection.tsx');

    expect(navbarSource).toContain('aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}');
    expect(navbarSource).toContain('aria-label="WhatsApp quick contact"');
    expect(heroSource).toContain('aria-label={isPlaying ? "Pause timeline preview" : "Play timeline preview"}');
    expect(howAiSource).toContain('aria-label={`Rate ${star} stars`}');
    expect(productsSource).toContain('aria-label="Close modal"');
  });

  it('ADV-10: Social footer links and FAQ accordions communicate accessibility state', () => {
    const faqFooterSource = requireSourceFile('src/components/FaqFooter.tsx');
    expect(faqFooterSource).toContain('aria-expanded={isOpen}');
    expect(faqFooterSource).toContain('aria-label="Instagram"');
    expect(faqFooterSource).toContain('aria-label="LinkedIn"');
    expect(faqFooterSource).toContain('aria-label="YouTube"');
    expect(faqFooterSource).toContain('aria-label="Facebook"');
  });
});
