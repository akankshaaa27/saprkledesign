// Team.js
import { FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Team = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Lead Designer',
    image: 'https://via.placeholder.com/400x300',
    bio: 'Design is her superpower.',
    social: [
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FiLinkedin /> },
      { name: 'Twitter', url: 'https://twitter.com', icon: <FiTwitter /> },
    ],
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Architect',
    image: 'https://via.placeholder.com/400x300',
    bio: 'Loves clean lines and creative spaces.',
    social: [
      { name: 'Instagram', url: 'https://instagram.com', icon: <FiInstagram /> },
    ],
  },
];

export default Team;
