import Head from 'next/head';
import ScenarioTemplate from '../components/scenarioTemplate';

const scenario = {
  satelliteImage: '/loader-maca.jpg',
  operation: 'Maca Support',
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
  // {
  //   type: 'video',
  //   title: 'Adult Registered Nurse',
  //   link: vimeoEmbed,
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
  //   img: null,
  //   // position: [-10, 0, 5],
  //   position: [19, 1, 2.5],
  // },
  {
    type: 'pdf',
    title: 'Adult Registered Nurse',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/registered-nurse.jpg',
    position: [19, 1, 2.5],
  },
  {
    type: 'pdf',
    title: 'Medical Officer',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/medical-officer.jpg',
    position: [5.3, -0.5, 17],
  },
  {
    type: 'link',
    title: 'Nursing Officer',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/nursing-officer.jpg',
    position: [18, -2.1, 1.5],
  },
  {
    type: 'pdf',
    title: 'Supplier',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/logistics-supplier.jpg',
    position: [18.07, -1.8, -7],
  },
  {
    type: 'pdf',
    title: 'Driver',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/driver.jpg',
    position: [5.82, -1.8, -18],
  },
  {
    type: 'pdf',
    title: 'Intelligence Analyst',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/intelligence-officer.jpg',
    position: [-3.8, 2.3, 12],
  },
  {
    type: 'pdf',
    title: 'Intelligence Analyst (Linguist)',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/intelligence-analyst-linguist.jpg',
    position: [15, 2.2, 9.8],
  },
  {
    type: 'pdf',
    title: 'RAF Regiment Gunner',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/raf-regiment-gunner.jpg',
    position: [-16, -0.5, 5.819120914630715],
  },
  {
    type: 'pdf',
    title: 'Personnel Support',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/personnel-support.jpg',
    position: [11, -0.5, 14.3],
  },
  {
    type: 'pdf',
    title: 'Chaplaincy',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/chaplaincy.jpg',
    position: [13, -2.3, 13.9],
  },
  {
    type: 'pdf',
    title: 'Legal',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/legal-officer.jpg',
    position: [16.2, 0, 10],
  },
  {
    type: 'pdf',
    title: 'Pilot',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/pilot.jpg',
    position: [-14, -0.5, -9.12],
  },
  {
    type: 'pdf',
    title: 'Weapon Systems Operator',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/weapon-systems-operator.jpg',
    position: [-17, 2, -2.5],
  },
  {
    type: 'pdf',
    title: 'Aircraft Technician (Mechanical)',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/aircraft-technician-mech.jpg',
    position: [-14, 1, -13.5],
  },
  {
    type: 'pdf',
    title: 'Aircraft Technician Avionics',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/aircraft-tech-avionics.jpg',
    position: [-16.5, 10, 0],
  },
  {
    type: 'text',
    title: 'General Technician',
    link: null,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada mauris augue, sed pretium neque cursus et. Nulla facilisi. Sed dictum laoreet velit porta sagittis. Phasellus volutpat urna at libero ultricies, ut dictum nibh tempus. Praesent metus mauris, accumsan eu nunc eget, interdum lacinia risus. Vivamus ut iaculis leo. Proin volutpat urna at placerat fringilla. Sed placerat, ipsum non dictum ultricies, risus erat porta justo, quis laoreet sapien dolor quis arcu.',
    img: '/general-technician.jpg',
    position: [-4.5, -0.9, -19],
  },
  {
    type: 'find',
    title: 'Find your role',
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
    position: [-12.2, -0.4, 13.2],
  },
];

const Maca = () => {
  return (
    <>
      <Head>
        <title>RAF World | Maca Support</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <ScenarioTemplate
        imageSrc='/pano-maca.jpg'
        scenario={scenario}
        hotspots={hotspots}
      />
    </>
  );
};

export default Maca;
