
export interface Event {
  id: string;
  title: string;
  description: string;
  time: string;   // HH:mm format
  date: string;   // YYYY-MM-DD
  agenda: string[];
  image: string;  // path under public/images
  location: string;
  overview: string;
  mode: 'online' | 'offline' | 'hybrid';
  audience: string[];
  organizer: string;
  tags: string[];
}

export const events: Event[] = [
  {
    id: 'devfest-2025-nyc',
    title: 'DevFest 2025 NYC',
    description: 'Join us for the biggest developer festival in New York City featuring talks, workshops, and networking opportunities.',
    time: '09:00',
    date: '2025-11-15',
    agenda: [
      '09:00 - Registration & Breakfast',
      '10:00 - Keynote: Future of Web Development',
      '11:30 - Workshop: Building with Next.js',
      '13:00 - Lunch Break',
      '14:00 - Panel Discussion: AI in Development',
      '16:00 - Networking Session'
    ],
    image: '/images/event1.png',
    location: 'New York City, NY, USA',
    overview: 'DevFest NYC brings together developers, designers, and tech enthusiasts for a full day of learning and collaboration. Experience cutting-edge technology demonstrations and connect with industry leaders.',
    mode: 'offline',
    audience: ['Developers', 'Designers', 'Tech Enthusiasts', 'Students'],
    organizer: 'Google Developer Groups NYC',
    tags: ['Web Development', 'Cloud', 'Mobile', 'AI/ML']
  },
  {
    id: 'hackathon-asia-2026',
    title: 'Hackathon Asia 2026',
    description: 'A 48-hour hackathon bringing together the brightest minds across Asia to build innovative solutions.',
    time: '08:30',
    date: '2026-02-20',
    agenda: [
      '08:30 - Check-in & Team Formation',
      '10:00 - Opening Ceremony',
      '11:00 - Hacking Begins',
      '19:00 - Dinner & Mentorship Sessions',
      'Day 2: 10:00 - Mid-point Check-in',
      'Day 3: 14:00 - Final Presentations'
    ],
    image: '/images/event2.png',
    location: 'Singapore',
    overview: 'Compete for prizes worth $50,000 while solving real-world problems. Get mentorship from industry experts and access to cutting-edge tools and APIs.',
    mode: 'hybrid',
    audience: ['Developers', 'Entrepreneurs', 'Students', 'Innovators'],
    organizer: 'TechAsia Foundation',
    tags: ['Hackathon', 'Innovation', 'Startup', 'Competition']
  },
  {
    id: 'ai-meetup-mumbai',
    title: 'AI & ML Meetup Mumbai',
    description: 'Monthly meetup for AI and Machine Learning practitioners to share knowledge and experiences.',
    time: '18:00',
    date: '2025-12-05',
    agenda: [
      '18:00 - Networking & Snacks',
      '18:30 - Talk: Deep Learning in Production',
      '19:15 - Lightning Talks',
      '20:00 - Open Discussion & Q&A',
      '20:45 - Closing Remarks'
    ],
    image: '/images/event3.png',
    location: 'Mumbai, Maharashtra, India',
    overview: 'Connect with fellow AI/ML enthusiasts, learn about the latest trends, and share your projects. Perfect for both beginners and experienced practitioners.',
    mode: 'offline',
    audience: ['Data Scientists', 'ML Engineers', 'Researchers', 'Students'],
    organizer: 'Mumbai AI Community',
    tags: ['AI', 'Machine Learning', 'Deep Learning', 'Data Science']
  },
  {
    id: 'oss-summit-berlin-2025',
    title: 'Open Source Summit Berlin 2025',
    description: 'The premier event for open source developers, technologists, and community leaders.',
    time: '10:00',
    date: '2025-10-27',
    agenda: [
      '10:00 - Welcome & Keynote',
      '11:30 - Track Sessions Begin',
      '13:00 - Lunch & Expo Hall',
      '14:30 - Workshops & Tutorials',
      '16:30 - Community Meetups',
      '18:00 - Evening Reception'
    ],
    image: '/images/event4.png',
    location: 'Berlin, Germany',
    overview: 'Explore the latest in open source technologies, contribute to projects, and network with maintainers and contributors from around the world.',
    mode: 'offline',
    audience: ['Open Source Contributors', 'Developers', 'DevOps Engineers', 'Community Leaders'],
    organizer: 'Linux Foundation',
    tags: ['Open Source', 'Linux', 'Cloud Native', 'DevOps']
  },
  {
    id: 'edtech-conference-bangalore',
    title: 'EdTech Conference Bangalore 2026',
    description: 'Exploring the intersection of education and technology to transform learning experiences.',
    time: '09:30',
    date: '2026-03-18',
    agenda: [
      '09:30 - Registration',
      '10:00 - Keynote: Future of Education',
      '11:30 - Panel: AI in Education',
      '13:00 - Lunch Break',
      '14:00 - Workshop Sessions',
      '16:00 - Startup Showcase',
      '17:30 - Networking'
    ],
    image: '/images/event5.png',
    location: 'Bangalore, Karnataka, India',
    overview: 'Join educators, technologists, and entrepreneurs to discuss innovative approaches to education technology and digital learning platforms.',
    mode: 'hybrid',
    audience: ['Educators', 'EdTech Entrepreneurs', 'Developers', 'Investors'],
    organizer: 'EdTech India Association',
    tags: ['EdTech', 'Education', 'E-Learning', 'Innovation']
  },
  {
    id: 'tech-conference-bangalore',
    title: 'Tech Conference Bangalore 2026',
    description: 'A comprehensive technology conference covering the latest trends in software development and emerging technologies.',
    time: '09:30',
    date: '2026-03-18',
    agenda: [
      '09:30 - Registration & Coffee',
      '10:30 - Opening Keynote',
      '12:00 - Technical Sessions',
      '13:30 - Lunch & Networking',
      '15:00 - Hands-on Workshops',
      '17:00 - Panel Discussion',
      '18:30 - Closing & Networking'
    ],
    image: '/images/event6.png',
    location: 'Bangalore, Karnataka, India',
    overview: 'Discover cutting-edge technologies, learn from industry experts, and connect with the vibrant tech community in India\'s Silicon Valley.',
    mode: 'offline',
    audience: ['Software Engineers', 'Tech Leaders', 'Architects', 'Product Managers'],
    organizer: 'Bangalore Tech Community',
    tags: ['Technology', 'Software Development', 'Cloud', 'Architecture']
  }
];
