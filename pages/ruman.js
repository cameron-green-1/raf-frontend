import Head from 'next/head';
import ScenarioTemplate from '../components/scenarioTemplate';

const scenario = {
  satelliteImage: '/loader-ruman.jpg',
  operation: 'Ruman',
  location: 'Undisclosed',
  details: '83 Expeditionary Force Forward Operating Base. 4 Typhoons',
  professions: 'Flight Control, Engineer, Cyber Security',
  video: '/briefing-demo.webm',
};

const vimeoEmbed = (
  <iframe
    src='https://player.vimeo.com/video/684564506?h=a7bd2f8234'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const hotspots = [
  {
    type: 'video',
    title: 'Adult Registered Nurse',
    link: vimeoEmbed,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: null,
    position: [-17.3, -2.2, 2.2],
  },
  {
    type: 'pdf',
    title: 'Medical Officer',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/medical-officer.jpg',
    position: [-15.1, -0.7, -9.7],
  },
  {
    type: 'link',
    title: 'Nursing Officer',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-17, -1.6, -5.8],
  },
  {
    type: 'pdf',
    title: 'Air Operations Controller (Sgt)',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-15.8, 2.5, 8.3],
  },
  {
    type: 'pdf',
    title: 'Air Operations Controller',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-15.2, 0, 9.6],
  },
  {
    type: 'pdf',
    title: 'Aircraft Tech (AV & Mechanical)	- Chinook',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-7.1, 0.8, 15.5],
  },
  {
    type: 'pdf',
    title: 'Pilot',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/pilot.jpg',
    position: [15.2, 1.7, 9.5],
  },
  {
    type: 'pdf',
    title: 'Weapon Systems Operator',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [0.2, 8.3, 16],
  },
  {
    type: 'pdf',
    title: 'Intelligence Analyst',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/ccs.jpg',
    position: [-4.5, 0.2, -17.4],
  },
  {
    type: 'pdf',
    title: 'Driver',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/driver.jpg',
    position: [1.5, -1.4, 17.9],
  },
  {
    type: 'pdf',
    title: 'Mover',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/mover.jpg',
    position: [17.9, -0.6, -1.5],
  },
  {
    type: 'pdf',
    title: 'RAF Regiment Gunner',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/raf-regiment-gunner.jpg',
    position: [11.3, 0.9, 14],
  },
  {
    type: 'find',
    title: 'Find your fit',
    link: null,
    links: [
      {
        title: 'Engineering - Weapon Technician',
        type: 'pdf',
        link: '/dummy.pdf',
      },
      {
        title: 'Logistics - Supplier',
        type: 'link',
        link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
      },
      {
        title: 'Logistics - Musician',
        type: 'pdf',
        link: '/dummy.pdf',
      },
      {
        title: 'Logistics - Logistics Officer',
        type: 'pdf',
        link: '/dummy.pdf',
      },
      {
        title: 'Engineering - General Technician',
        type: 'pdf',
        link: '/dummy.pdf',
      },
      {
        title: 'Logistics - Driver',
        type: 'pdf',
        link: '/dummy.pdf',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-17.6, 2.2, -3.8],
  },
];

const Ruman = () => {
  return (
    <>
      <Head>
        <title>RAF World | Operation Ruman</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <ScenarioTemplate
        imageSrc='/pano-ruman.jpg'
        scenario={scenario}
        hotspots={hotspots}
      />
    </>
  );
};

export default Ruman;
