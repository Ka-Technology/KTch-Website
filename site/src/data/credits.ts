// Found pictures and footage (open collections and free-licence stock), listed on /credits.
// `image` is the optimized copy in public/images.
export const credits: {
  image: string; w: number; h: number; title: string; creator: string; licence: string;
  page: string; usedOn: string; sourceLabel?: string;
}[] = [
  { image: 'hero-reel', w: 1280, h: 720, title: 'Home page video, seven clips of bridges, landscapes and people', creator: 'Mixkit', licence: 'Mixkit Free License', page: 'https://mixkit.co/license/#videoFree', usedOn: 'Home page hero', sourceLabel: 'Mixkit licence' },
  { image: 'hawthorne-1912', w: 1600, h: 1019, title: 'Hawthorne Avenue Bridge, Portland, Oregon (postcard, 1912)', creator: 'US postcard publisher', licence: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Hawthorne_Avenue_Bridge,_Portland,_Oregon_-_Postcard.png', usedOn: 'Footer' },
  { image: 'downtown-portland', w: 1600, h: 735, title: 'Downtown Portland and Hawthorne Bridge from Marquam Bridge (2016)', creator: 'Lessa Clayton', licence: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Downtown_Portland_and_Hawthorne_Bridge_from_Marquam_Bridge_(2016).jpg', usedOn: 'Home, Contact, footer' },
  { image: 'st-johns-1938', w: 1078, h: 850, title: 'St. Johns Bridge, 1938', creator: 'Unknown', licence: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:St._Johns_Bridge,_1938.JPG', usedOn: 'Home, footer' },
  { image: 'third-street-1910', w: 1600, h: 2397, title: 'Third Street in Portland, Oregon, 1910', creator: 'Unknown', licence: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Third_Street_in_Portland,_Oregon,_1910.png', usedOn: 'Home, About, footer' },
  { image: 'hawthorne-pan', w: 1600, h: 441, title: 'Hawthorne Bridge pan, Portland, Oregon', creator: 'M.O. Stevens', licence: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:Hawthorne_Bridge_pan_-_Portland,_Oregon.jpg', usedOn: 'About' },
  { image: 'first-street-stereo', w: 1600, h: 827, title: 'First Street from the Occidental Hotel, Portland', creator: 'J. G. Crawford', licence: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:First_street_from_the_Occidental_hotel,_Portland,_Oregon,_by_J._G._Crawford.jpg', usedOn: 'Home' },
];
