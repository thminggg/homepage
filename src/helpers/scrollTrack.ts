const trackWidth = Number(process.env.SCROLL_TRACK_WIDTH);

export const handleLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();
  // Scroll to Top
  if (id === "#home") {
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  // Section Specific Scroll
  const section = document.querySelector(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

export const updateActiveSection = (
  sections: NodeListOf<HTMLElement>,
  navLinks: NodeListOf<Element>
) => {
  console.log("scroll");
  let currentSectionIndex = -1;
  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop - window.innerHeight / 3 < 0) {
      currentSectionIndex = index;
    }
  });
  navLinks.forEach((link, index) => {
    if (index === currentSectionIndex) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

export const trackScroll = () => {
  // Only Track for Laptop
  if (window.innerWidth < trackWidth) return;

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener(
    "scroll",
    () => updateActiveSection(sections, navLinks),
    {
      passive: true,
    }
  );
};

export const trackResize = (initialWidth: number) => {
  // No resize listener required for laptop
  if (initialWidth >= trackWidth) return;

  // Add only once when it's resized to larger screen
  let isTrackScrollSet = false;
  window.addEventListener("resize", function () {
    if (!isTrackScrollSet && window.innerWidth >= trackWidth) {
      isTrackScrollSet = true;
      trackScroll();
    }
  });
};
