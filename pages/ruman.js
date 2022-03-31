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
    title: 'General Technician',
    link: vimeoEmbed,
    description:
      'As a General Technician (Workshops) you will manufacture and repair parts for aircraft, vehicles and specialist equipment. You will be working in specially equipped workshops and aircraft maintenance hangars.',
    img: null,
    position: [-10, 0, 5],
    sprite: '/scenario-hotspot.png',
  },
  {
    type: 'pdf',
    title: 'General Technician',
    link: '/dummy.pdf',
    description:
      'As a General Technician (Workshops) you will manufacture and repair parts for aircraft, vehicles and specialist equipment. You will be working in specially equipped workshops and aircraft maintenance hangars.',
    img: '/general-technician.jpg',
    position: [10, 0, 5],
    sprite: '/scenario-hotspot.png',
  },
  {
    type: 'link',
    title: 'General Technician',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'As a General Technician (Workshops) you will manufacture and repair parts for aircraft, vehicles and specialist equipment. You will be working in specially equipped workshops and aircraft maintenance hangars.',
    img: '/general-technician.jpg',
    position: [-8, 0, -8],
    sprite: '/scenario-hotspot.png',
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
