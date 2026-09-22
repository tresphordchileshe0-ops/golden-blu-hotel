export const hotel = {
  name: 'Golden Blu Hotel',
  tagline: 'A calm, contemporary stay on Broadway, in the heart of Ndola.',
  phone: '077 0921071',
  street: 'Broadway, Ndola',
  plusCode: '2MJ2+H4 Ndola',
  neighborhood: 'Kanini',
  country: 'Zambia',
  rating: '4.1',
  reviewCount: '100+'
};

export const images = {
  facade: "/pasted-image.jpg",
  facadeAlt: "/pasted-image-1.jpg",
  twinRoom: "/pasted-image-2.jpg",
  doubleRoom: "/pasted-image-3.jpg",
  lobby: "/pasted-image-4.jpg",
  terrace: "/pasted-image-5.jpg",
  dining: "/pasted-image-6.jpg",
  parking: "/pasted-image-7.jpg"
};

export const rooms = [
{
  name: 'Twin Room',
  image: images.twinRoom,
  alt: 'Twin room at Golden Blu Hotel with two beds, wall-mounted television and tea tray',
  description:
  'Two full beds, a wall-mounted television and a tea and coffee tray by the window — suited to colleagues travelling together or a short family stay.',
  details: ['Two beds', 'Television', 'Tea & coffee tray']
},
{
  name: 'Double Room',
  image: images.doubleRoom,
  alt: 'Double room at Golden Blu Hotel with a large bed, bedside lamps and telephone',
  description:
  'A generous double bed with bedside lighting and a direct-dial telephone, kept quiet and simple for business and longer visits.',
  details: ['Double bed', 'Bedside lighting', 'In-room telephone']
}];


export const gallery = [
{ src: images.facade, alt: 'The Golden Blu Hotel building on Broadway, Ndola' },
{ src: images.lobby, alt: 'Hotel lobby with its distinctive blue resin floor and seating area' },
{ src: images.terrace, alt: 'Ground floor terrace with steel railing and lawn outside the hotel' },
{ src: images.dining, alt: 'Plated noodles with stir-fried vegetables served at the hotel' },
{ src: images.parking, alt: "Signposted visitors' car park within the hotel grounds" },
{ src: images.facadeAlt, alt: 'Front elevation of Golden Blu Hotel seen from the street' }];