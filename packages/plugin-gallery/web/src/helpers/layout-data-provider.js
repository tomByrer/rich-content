const layouts = [
  {
    showArrows: false,
    cubeImages: false,
    groupSize: 3,
    groupTypes: '1,2h,2v,3t,3b,3l,3r',
    fixedColumns: 0,
    hasThumbnails: false,
    enableScroll: true,
    isGrid: false,
    isSlider: false,
    isColumns: false,
    isSlideshow: false,
    cropOnlyFill: false,
  }, //Collage
  {
    showArrows: false,
    cubeImages: false,
    groupSize: 1,
    groupTypes: '1',
    fixedColumns: 0,
    hasThumbnails: false,
    enableScroll: true,
    isGrid: false,
    isSlider: false,
    isColumns: false,
    isSlideshow: false,
    cropOnlyFill: false,
    oneRow: false,
  }, // Masonry
  {
    showArrows: false,
    cubeImages: true,
    smartCrop: false,
    imageResize: false,
    galleryImageRatio: 2,
    numberOfImagesPerRow: 3,
    isVertical: true,
    galleryType: 'Columns',
    groupSize: 1,
    groupTypes: '1',
    fixedColumns: undefined,
    hasThumbnails: false,
    enableScroll: true,
    cropOnlyFill: false,
    isSlider: false,
    isColumns: false,
    isGrid: true,
    isSlideshow: false,
    minItemSize: 50,
    oneRow: false,
  }, // Grid
  {
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    cubeType: 'fill',
    cubeRatio: 1,
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    groupTypes: '1',
    oneRow: true,
    hasThumbnails: true,
    enableScroll: false,
    isGrid: false,
    isSlider: false,
    isColumns: false,
    isSlideshow: false,
    cropOnlyFill: false,
    floatingImages: 0,
    galleryMargin: 0,
    imageMargin: 0,
  }, //Thumbnails
  {
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    gallerySliderImageRatio: 0,
    groupTypes: '1',
    oneRow: true,
    hasThumbnails: false,
    enableScroll: true,
    isGrid: false,
    isSlider: true,
    isColumns: false,
    isSlideshow: false,
    cropOnlyFill: true,
  }, // Slider
  {
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    cubeRatio: 1,
    cubeType: 'fill',
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    groupTypes: '1',
    fixedColumns: 1,
    oneRow: true,
    hasThumbnails: false,
    enableScroll: false,
    isGrid: false,
    isColumns: false,
    isSlider: false,
    isSlideshow: true,
    cropOnlyFill: false,
    floatingImages: 0,
    galleryMargin: 0,
    imageMargin: 0,
  }, // Slideshow
  {
    showArrows: false,
    cubeImages: false,
    isVertical: true,
    galleryType: 'Columns',
    groupSize: 1,
    groupTypes: '1',
    oneRow: false,
    fixedColumns: 1,
    hasThumbnails: false,
    enableScroll: true,
    isGrid: false,
    isColumns: false,
    isSlider: false,
    isSlideshow: false,
    cropOnlyFill: false,
  }, // Panorama
  {
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    cubeType: 'fill',
    cubeRatio: 0.35,
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    groupTypes: '1',
    fixedColumns: 0,
    hasThumbnails: false,
    oneRow: true,
    enableScroll: true,
    isGrid: false,
    isColumns: true,
    isSlider: false,
    isSlideshow: false,
    cropOnlyFill: false,
  }, // Columns
  {}, //magic layout ???
  {
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    cubeType: 'fill',
    cubeRatio: 1,
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    groupTypes: '1',
    oneRow: true,
    hasThumbnails: false,
    galleryThumbnailsAlignment: 'none',
    enableScroll: false,
    isGrid: false,
    isSlider: false,
    isColumns: false,
    isSlideshow: false,
    cropOnlyFill: false,
    floatingImages: 0,
    galleryMargin: 0,
    imageMargin: 0,
  }, //Fullsize
];

export default layouts;
