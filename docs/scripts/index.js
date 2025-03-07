class Portfolio {
  constructor(document) {
    this.refs = {
      mobileNavToggle: '.js-mobile-nav-toggle',
      mobileNav: '.js-mobile-nav',
      navLink: 'js-nav-link',
      sectionLink: '.js-section-link',
      section: 'section'
    }

    this.dom = {
      $document: document,
      $body: document.querySelector('body'),
      $navLinks:  document.querySelectorAll(`.${this.refs.navLink}`),
      $sectionLinks: document.querySelectorAll(this.refs.sectionLink),
      $sections: document.querySelectorAll(this.refs.section),
      $mobileNavToggle: document.querySelector(this.refs.mobileNavToggle),
      $mobileNav: document.querySelector(this.refs.mobileNav)
    }

    this.state = {
      mobileNavActive: false,
      escapeKeyHandler: this.onKeydown.bind(this)
    }

    this.mount();

    this.init();
  }

  mount() {
    const { dom } = this;
    [...dom.$sectionLinks].forEach(($sectionLink) => {
      $sectionLink.addEventListener('click', this.onSectionLinkClick.bind(this))
    })

    dom.$mobileNavToggle.addEventListener('click', this.onMobileNavToggleClick.bind(this))
  }

  init() {
    const { dom } = this;
    console.log('init portfolio');

    [...dom.$navLinks].forEach(($navLink) => {
      if ($navLink.dataset.scrollTarget === 'home') {
        $navLink.classList.add('is-active')
      }
    })
  }

  onMobileNavToggleClick(e) {
    const { state } = this;

    if (state.mobileNavActive) {
      this.closeMobileNav();
      return;
    }

    this.openMobileNav();
  }

  closeMobileNav() {
    const { dom, state } = this;

    dom.$mobileNavToggle.classList.remove('is-active');
    dom.$mobileNav.classList.remove('is-active');
    state.mobileNavActive = false;

    document.removeEventListener('keydown', state.escapeKeyHandler)
  }

  openMobileNav() {
    const { dom, state } = this;

    dom.$mobileNavToggle.classList.add('is-active');
    dom.$mobileNav.classList.add('is-active');
    state.mobileNavActive = true;

    document.addEventListener('keydown', state.escapeKeyHandler)
  }

  onKeydown({ key }) {
    if (key === "Escape") {
      this.closeMobileNav();
    }
  }

  onSectionLinkClick(e) {
    const { dom, refs } = this;
    const { scrollTarget } = e.currentTarget.dataset

    if(e.currentTarget.classList.contains(refs.navLink)) {

      [...dom.$navLinks].forEach(($navLink) => {
        $navLink.classList.remove('is-active');

        if ($navLink.dataset.scrollTarget === scrollTarget) {
          $navLink.classList.add('is-active')
        }
      })

      this.closeMobileNav();
    }

    const scrollToSection = [...dom.$sections].find(($section) => {
      return $section.id === scrollTarget
    })

    if (scrollToSection) {
      e.preventDefault();
      let $elToScroll = scrollToSection;
      if (scrollToSection.id === 'home') {
        $elToScroll = dom.$body
      }
      
      $elToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Portfolio(document);
})