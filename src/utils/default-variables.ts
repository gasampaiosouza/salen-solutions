export const getCarouselOptions = (desktopItems = 4) => ({
  ssr: true,
  showDots: false,
  arrows: false,
  renderDotsOutside: true,
  renderButtonGroupOutside: true,
  responsive: {
    desktop: {
      breakpoint: { max: 4000, min: 1023 },
      items: desktopItems,
      slidesToSlide: desktopItems,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  },
});
