class Portfolio {
  constructor(document) {
    this.refs = {
      navLink: 'js-nav-link',
      sectionLink: '.js-section-link',
      section: 'section'
    }

    this.dom = {
      $document: document,
      $navLinks:  document.querySelectorAll(`.${this.refs.navLink}`),
      $sectionLinks: document.querySelectorAll(this.refs.sectionLink),
      $sections: document.querySelectorAll(this.refs.section)
    }

    this.state = {}

    this.mount();

    this.init();
  }

  mount() {
    const { dom } = this;
    [...dom.$sectionLinks].forEach(($sectionLink) => {
      $sectionLink.addEventListener('click', this.onSectionLinkClick.bind(this))
    })
  }

  init() {
    const { dom } = this;
    console.log('init portfolio');

    dom.$sectionLinks[0].classList.add('is-active')
  }

  onSectionLinkClick(e) {
    const { dom, refs } = this;
    const { scrollTarget } = e.currentTarget.dataset

    if(e.currentTarget.classList.contains(refs.navLink)) {
      [...dom.$navLinks].forEach(($navLink) => {
        $navLink.classList.remove('is-active');
      })
      e.currentTarget.classList.add('is-active')
    }

    const scrollToSection = [...dom.$sections].find(($section) => {
      return $section.id === scrollTarget
    })

    if (scrollToSection) {
      e.preventDefault();
      scrollToSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Portfolio(document);
})