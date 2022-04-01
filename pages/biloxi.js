import Head from 'next/head';
import ScenarioTemplate from '../components/scenarioTemplate';

const scenario = {
  satelliteImage: '/loader-biloxi.jpg',
  operation: 'Biloxi',
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
    type: 'pdf',
    title: 'Weapons Technician',
    link: vimeoEmbed,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/weapons-tech.jpg',
    position: [-17.3, -1.9, 4.5],
  },
  {
    type: 'pdf',
    title: 'Aircraft Technician (Avionics)',
    link: '/dummy.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-17.9, 0.39, -1.99],
  },
  {
    type: 'link',
    title: 'Aircraft Technician (Mechanical)',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/aircraft-technician-mech.jpg',
    position: [14.5, -2.7, -10.6],
  },
  {
    type: 'link',
    title: 'Survival Equipment Specialist',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-7.4, -2, 16.1],
  },
  {
    type: 'link',
    title: 'Air Operations Systems Officer',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [15.5, -0.6, 9.2],
  },
  {
    type: 'link',
    title: 'Air Operations Control Officer',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [16.3, 2.3, 7.2],
  },
  {
    type: 'link',
    title: 'Air Operations Control (Sgt)',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [15.1, 4.4, 8.7],
  },
  {
    type: 'link',
    title: 'Intelligence Officer',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-15.2, 0.9, -9.5],
  },
  {
    type: 'link',
    title: 'Intelligence Analyst',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-8.2, 3, -15.9],
  },
  {
    type: 'link',
    title: 'Intelligence Analyst (Linguist)',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-10.8, -0.8, -14.4],
  },
  {
    type: 'link',
    title: 'Cyber Space Comms Specialist',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [3.1, 8.7, -15.5],
  },
  {
    type: 'link',
    title: 'Communications Infrastructure Tech',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [3.1, 4.1, -15.5],
  },
  {
    type: 'link',
    title: 'Chef',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/chef.jpg',
    position: [-0.9, -0.2, -18],
  },
  {
    type: 'link',
    title: 'Air Ground Steward',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [11.2, -3.7, 14],
  },
  {
    type: 'link',
    title: 'Supplier',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/logistics-supplier.jpg',
    position: [-6.2, -5, -16.2],
  },
  {
    type: 'link',
    title: 'Driver',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/driver.jpg',
    position: [17.6, 0, -3.1],
  },
  {
    type: 'link',
    title: 'RAF Regiment Gunner',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [17.7, -2.5, 3.3],
  },
];

const Biloxi = () => {
  return (
    <>
      <Head>
        <title>RAF World | Operation Biloxi</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <ScenarioTemplate
        imageSrc='/pano-biloxi.jpg'
        scenario={scenario}
        hotspots={hotspots}
      />
    </>
  );
};

export default Biloxi;
