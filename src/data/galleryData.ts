export interface GalleryImage {
  id: number;
  category: 'whitetail' | 'axis' | 'exotics' | 'lodge';
  title: string;
  score?: string;
  src: string;
}

export const galleryImages: GalleryImage[] = [
  // Axis (existing)
  { id: 1, category: 'axis', title: 'Axis Trophy #1', src: '/images/gallery/axis_1.jpeg?preset=webp' },
  { id: 2, category: 'axis', title: 'Axis Trophy #2 (AVIF)', src: '/images/gallery/axis_2.avif' },
  { id: 3, category: 'axis', title: 'Axis Trophy #2 (PNG)', src: '/images/gallery/axis_2.PNG?preset=webp' },
  { id: 4, category: 'axis', title: 'Axis Trophy #3 (AVIF)', src: '/images/gallery/axis_3.avif' },
  { id: 5, category: 'axis', title: 'Axis Trophy #3 (JPG)', src: '/images/gallery/axis_3.JPG?preset=webp' },
  { id: 6, category: 'axis', title: 'Axis Trophy #5', src: '/images/gallery/axis_5.JPG?preset=webp' },
  { id: 8, category: 'axis', title: 'Axis Trophy #7', src: '/images/gallery/axis_7.JPG?preset=webp' },
  { id: 9, category: 'axis', title: 'Axis Trophy #8', src: '/images/gallery/axis_8.avif' },

  // Exotics (existing)
  { id: 10, category: 'exotics', title: 'Blackbuck Group #1', src: '/images/gallery/blackbuck_1.jpg?preset=webp' },
  { id: 11, category: 'exotics', title: 'Blackbuck Trophy', src: '/images/gallery/blackbuck.avif' },
  { id: 12, category: 'exotics', title: 'Exotic Hunt #1', src: '/images/gallery/exotic_1.JPG?preset=webp' },
  { id: 13, category: 'exotics', title: 'Fallow Deer', src: '/images/gallery/fallow.jpeg?preset=webp' },

  // Whitetail (existing)
  { id: 14, category: 'whitetail', title: 'Whitetail #3', src: '/images/gallery/whitetail_3.PNG?preset=webp' },
  { id: 15, category: 'whitetail', title: 'Whitetail #7', src: '/images/gallery/whitetail_7.avif' },
  { id: 16, category: 'whitetail', title: 'Whitetail #8', src: '/images/gallery/whitetail_8.avif' },
  { id: 17, category: 'whitetail', title: 'Whitetail Portrait', src: '/images/gallery/whitetail.avif' },

  // Lodge (existing)
  { id: 18, category: 'lodge', title: 'Lodge Exterior 1', src: '/images/gallery/lodge_1.avif' },
  { id: 21, category: 'lodge', title: 'Half Court Basketball', src: '/images/gallery/basketball.avif' },
  { id: 22, category: 'lodge', title: 'Lodge Bedroom #1', src: '/images/gallery/bedroom.jpg?preset=webp' },
  { id: 23, category: 'lodge', title: 'Lodge Kitchen', src: '/images/gallery/kitchen.jpg?preset=webp' },
  { id: 24, category: 'lodge', title: 'Lodge Bedroom #2', src: '/images/gallery/bedroom_2.jpg?preset=webp' },
  { id: 25, category: 'lodge', title: 'Lodge Game Room', src: '/images/gallery/gameroom.jpg?preset=webp' },
  { id: 26, category: 'lodge', title: 'Lodge Living Area', src: '/images/gallery/living.jpg?preset=webp' },

  // 🆕 Axis (new .webp)
  { id: 27, category: 'axis', title: 'Axis 10', src: '/optimized-images/axis_10.webp' },
  { id: 28, category: 'axis', title: 'Axis 11', src: '/optimized-images/axis_11.webp' },
  { id: 29, category: 'axis', title: 'Axis 12', src: '/optimized-images/axis_12.webp' },

  // 🆕 Whitetail (wt_)
  { id: 30, category: 'whitetail', title: 'Whitetail 10', src: '/optimized-images/wt_10.webp' },
  { id: 31, category: 'whitetail', title: 'Whitetail 11', src: '/optimized-images/wt_11.webp' },
  { id: 32, category: 'whitetail', title: 'Whitetail 12', src: '/optimized-images/wt_12.webp' },

  // 🆕 Exotics (bb_, exotic_, fallow_, stag_, xotic_)
  { id: 33, category: 'exotics', title: 'Blackbuck 4', src: '/optimized-images/bb_4.webp' },
  { id: 34, category: 'exotics', title: 'Blackbuck 10', src: '/optimized-images/bb_10.webp' },
  { id: 35, category: 'exotics', title: 'Blackbuck 11', src: '/optimized-images/bb_11.webp' },
  { id: 36, category: 'exotics', title: 'Blackbuck 12', src: '/optimized-images/bb_12.webp' },
  { id: 37, category: 'exotics', title: 'Blackbuck 13', src: '/optimized-images/bb_13.webp' },

  { id: 38, category: 'exotics', title: 'Exotic 10', src: '/optimized-images/exotic_10.webp' },
  { id: 39, category: 'exotics', title: 'Exotic 11', src: '/optimized-images/exotic_11.webp' },
  { id: 40, category: 'exotics', title: 'Exotic 13', src: '/optimized-images/exotic_13.webp' },
  { id: 41, category: 'exotics', title: 'Exotic 14', src: '/optimized-images/exotic_14.webp' },
  { id: 42, category: 'exotics', title: 'Exotic 15', src: '/optimized-images/exotic_15.webp' },
  { id: 43, category: 'exotics', title: 'Exotic 16', src: '/optimized-images/exotic_16.webp' },

  { id: 44, category: 'exotics', title: 'Fallow 11', src: '/optimized-images/fallow_11.webp' },
  { id: 45, category: 'exotics', title: 'Fallow 12', src: '/optimized-images/fallow_12.webp' },
  { id: 46, category: 'exotics', title: 'Fallow 13', src: '/optimized-images/fallow_13.webp' },

  { id: 47, category: 'exotics', title: 'Stag 1', src: '/optimized-images/stag_1.webp' },
  { id: 48, category: 'exotics', title: 'Stag 2', src: '/optimized-images/stag_2.webp' },

  { id: 49, category: 'exotics', title: 'Xotic 12', src: '/optimized-images/xotic_12.webp' },

  // 🆕 Lodge (bass)
  { id: 50, category: 'lodge', title: 'Bass 1', src: '/optimized-images/bass_1.webp' },
  { id: 51, category: 'lodge', title: 'Bass', src: '/optimized-images/bass.webp' },
];
