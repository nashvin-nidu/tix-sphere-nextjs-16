
export interface Event {
  id: string;
  title: string;
  date: string;   // YYYY-MM-DD
  time: string;   // HH:mm format
  location: string;
  image: string;  // path under public/images
}

export const events: Event[] = [
  {
    id: 'devfest-2025-nyc',
    title: 'DevFest 2025 NYC',
    date: '2025-11-15',
    time: '09:00',
    location: 'New York City, NY, USA',
    image: '/images/event1.png'
  },
  {
    id: 'hackathon-asia-2026',
    title: 'Hackathon Asia 2026',
    date: '2026-02-20',
    time: '08:30',
    location: 'Singapore',
    image: '/images/event2.png'
  },
  {
    id: 'ai-meetup-mumbai',
    title: 'AI & ML Meetup Mumbai',
    date: '2025-12-05',
    time: '18:00',
    location: 'Mumbai, Maharashtra, India',
    image: '/images/event3.png'
  },
  {
    id: 'oss-summit-berlin-2025',
    title: 'Open Source Summit Berlin 2025',
    date: '2025-10-27',
    time: '10:00',
    location: 'Berlin, Germany',
    image: '/images/event4.png'
  },
  {
    id: 'edtech-conference-bangalore',
    title: 'EdTech Conference Bangalore 2026',
    date: '2026-03-18',
    time: '09:30',
    location: 'Bangalore, Karnataka, India',
    image: '/images/event5.png'
  },
  {
    id: 'tech-conference-bangalore',
    title: 'EdTech Conference Bangalore 2026',
    date: '2026-03-18',
    time: '09:30',
    location: 'Bangalore, Karnataka, India',
    image: '/images/event6.png'
  }
];
