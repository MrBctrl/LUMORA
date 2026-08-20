const tone = (a, b, c) => `linear-gradient(155deg, ${a} 0%, ${b} 45%, ${c} 100%)`;

export const categories = {
  house: {
    key: 'house',
    label: 'Houses',
    singular: 'House',
    intro: 'Detached houses, duplexes and bungalows, from starter homes to full compounds.',
    filters: ['All', 'Single Room', '2 Bedroom', '3 Bedroom', '4 Bedroom', '5 Bedroom+'],
    items: [
      { id: 'h1', name: 'The Aldergate Residence', location: 'Ikoyi, Lagos', price: '₦680,000,000', tag: '5 Bedroom+', image: '/images/listings/house/h1.jpg', tone: tone('#efe6d1', '#d8c49f', '#a9835a'), blurb: 'A private villa on a quiet close, with a walled garden and staff quarters at the back. Fully renovated last year, so there is nothing left to fix before you move in.' },
      { id: 'h2', name: 'Marsh House', location: 'Lekki Phase 1, Lagos', price: '₦295,000,000', tag: '4 Bedroom', image: '/images/listings/house/h2.jpg', tone: tone('#e6ded0', '#c3b393', '#7c5f3f'), blurb: 'A family townhouse close to the main road but shielded from the noise. Good natural light in every bedroom, and a compound big enough for two cars.' },
      { id: 'h3', name: 'Whitegate Bungalow', location: 'Magodo, Lagos', price: '₦145,000,000', tag: '3 Bedroom', image: '/images/listings/house/h3.jpg', tone: tone('#f1e9d8', '#d3c2a0', '#977247'), blurb: 'A single-storey home on a corner plot, recently repainted, with a small front garden. Simple layout, easy to furnish, easy to live in.' },
      { id: 'h4', name: 'The Halden Duplex', location: 'Gwarinpa, Abuja', price: '₦210,000,000', tag: '4 Bedroom', image: '/images/listings/house/h4.jpg', tone: tone('#ece1cb', '#c9b48b', '#84603a'), blurb: 'A two-storey duplex on a tarred street, built with a private compound and a small guest wing on the ground floor.' },
      { id: 'h5', name: 'Riverside Cottage', location: 'Ajah, Lagos', price: '₦78,000,000', tag: '2 Bedroom', image: '/images/listings/house/h5.jpg', tone: tone('#f0e8d6', '#cbb98f', '#8b6841'), blurb: 'A cosy two bedroom home a short drive from the Lekki-Epe expressway. Great starter house, low upkeep, quiet street.' },
      { id: 'h6', name: 'Stonebridge Studio Room', location: 'Yaba, Lagos', price: '₦22,000,000', tag: 'Single Room', image: '/images/listings/house/h6.jpg', tone: tone('#eee5d2', '#cabb98', '#8a6c45'), blurb: 'A self-contained single room close to the university and the tech hub, ideal for a first place of your own.' },
    ],
  },
  apartment: {
    key: 'apartment',
    label: 'Apartments',
    singular: 'Apartment',
    intro: 'Flats and serviced apartments for rent or purchase, from single rooms to full penthouses.',
    filters: ['All', 'Single Room', '2 Bedroom', '3 Bedroom', 'Penthouse'],
    items: [
      { id: 'a1', name: 'The Northbank Loft', location: 'Victoria Island, Lagos', price: '₦8,500,000 / year', tag: 'Penthouse', image: '/images/listings/apartment/a1.jpg', tone: tone('#ece2cd', '#cdb98d', '#8a6640'), blurb: 'A top-floor apartment with a wraparound balcony and a clear view of the water. Comes with 24-hour power and a lift that actually works.' },
      { id: 'a2', name: 'Parkview Two-Bed', location: 'Ikeja GRA, Lagos', price: '₦3,200,000 / year', tag: '2 Bedroom', image: '/images/listings/apartment/a2.jpg', tone: tone('#f0e8d9', '#d0bd97', '#93714a'), blurb: 'A quiet block set back from the main road, with a shared generator and a gate that is manned around the clock.' },
      { id: 'a3', name: 'Cascade Serviced Flat', location: 'Wuse 2, Abuja', price: '₦4,800,000 / year', tag: '3 Bedroom', image: '/images/listings/apartment/a3.jpg', tone: tone('#eee6d4', '#c9b58d', '#84613b'), blurb: 'A serviced apartment with cleaning included, good for someone relocating for work who wants to skip the setup stress.' },
      { id: 'a4', name: 'The Fenwick Studio', location: 'Surulere, Lagos', price: '₦1,600,000 / year', tag: 'Single Room', image: '/images/listings/apartment/a4.jpg', tone: tone('#f2ecdd', '#d6c6a3', '#977350'), blurb: 'A compact self-contained flat close to public transport, well suited to someone just starting out on their own.' },
    ],
  },
  building: {
    key: 'building',
    label: 'Buildings',
    singular: 'Building',
    intro: 'Whole buildings for offices, event spaces, warehouses and mixed-use developments.',
    filters: ['All', 'Office', 'Warehouse', 'Event Center', 'Mixed Use'],
    items: [
      { id: 'b1', name: 'The Harrington Office Block', location: 'Victoria Island, Lagos', price: '₦1,200,000,000', tag: 'Office', image: '/images/listings/building/b1.jpg', tone: tone('#e9e0cc', '#c2ac82', '#7c5834'), blurb: 'A five-floor commercial building with parking for 40 cars and a backup power system already installed.' },
      { id: 'b2', name: 'Dockside Warehouse', location: 'Apapa, Lagos', price: '₦450,000,000', tag: 'Warehouse', image: '/images/listings/building/b2.jpg', tone: tone('#ece4d1', '#c9b88f', '#8c6a41'), blurb: 'A large storage facility close to the port, with high ceilings and direct truck access from the main road.' },
      { id: 'b3', name: 'The Grove Event Center', location: 'Lekki, Lagos', price: '₦520,000,000', tag: 'Event Center', image: '/images/listings/building/b3.jpg', tone: tone('#efe7d5', '#d0be97', '#93704a'), blurb: 'A standalone hall with its own parking and a garden area, built for weddings, conferences and large gatherings.' },
      { id: 'b4', name: 'Meridian Mixed-Use Complex', location: 'Wuse, Abuja', price: '₦980,000,000', tag: 'Mixed Use', image: '/images/listings/building/b4.jpg', tone: tone('#ece3cd', '#c7b28a', '#815d38'), blurb: 'Shops on the ground floor with offices above, in a location with steady foot traffic all week.' },
    ],
  },
  land: {
    key: 'land',
    label: 'Land',
    singular: 'Plot of Land',
    intro: 'Titled land for residential, commercial or agricultural use, ready to build on.',
    filters: ['All', 'Half Plot', 'Full Plot', '2 Plots', '5 Plots+'],
    items: [
      { id: 'l1', name: 'Crestview Estate Plot', location: 'Sangotedo, Lagos', price: '₦35,000,000', tag: 'Full Plot', image: '/images/listings/land/l1.jpg', tone: tone('#efe9d9', '#d7c8a1', '#9f7c50'), blurb: 'A dry, fenced plot inside a gated estate with survey and Certificate of Occupancy already in place.' },
      { id: 'l2', name: 'Green Acres Half Plot', location: 'Epe, Lagos', price: '₦9,500,000', tag: 'Half Plot', image: '/images/listings/land/l2.jpg', tone: tone('#f1ebdc', '#dbcda6', '#a68153'), blurb: 'A smaller plot suited to a first-time buyer, with road access already graded and levelled.' },
      { id: 'l3', name: 'Riverbend Farmland', location: 'Ibeju-Lekki, Lagos', price: '₦120,000,000', tag: '5 Plots+', image: '/images/listings/land/l3.jpg', tone: tone('#ede5d0', '#c9b183', '#876037'), blurb: 'A stretch of land suited to agriculture or a future estate, with river access on one boundary.' },
      { id: 'l4', name: 'Northgate Commercial Plots', location: 'Karu, Abuja', price: '₦48,000,000', tag: '2 Plots', image: '/images/listings/land/l4.jpg', tone: tone('#eee6d3', '#cdb98d', '#8c6740'), blurb: 'Two adjoining plots on a commercial layout, close enough to the expressway for a retail build.' },
    ],
  },
};

export const categoryOrder = ['house', 'apartment', 'building', 'land'];

export const categoryCover = {
  house: '/images/categories/house.jpg',
  apartment: '/images/categories/apartment.jpg',
  building: '/images/categories/building.jpg',
  land: '/images/categories/land.jpg',
};
