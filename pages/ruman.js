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

const vimeoMedicalOfficer = (
  <iframe
    src='https://player.vimeo.com/video/718640180?h=7da9676d73'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoAircraftTech = (
  <iframe
    src='https://player.vimeo.com/video/718256946?h=6da12828ed'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoWSO = (
  <iframe
    src='https://player.vimeo.com/video/718256946?h=6da12828ed'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoGunner = (
  <iframe
    src='https://player.vimeo.com/video/718259685?h=2ec2ca1403'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const hotspots = [
  {
    type: 'link',
    title: 'Adult Registered Nurse',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      "Nurses play a vital part in looking after the RAF Personnel's health. Weather deployed in an Medical Air Evacuation role in an area of conflict, or working alongside the NHS in a hospital in the UK, the nurses' roles are wide and varied.",
    img: '/registered-nurse.jpg',
    position: [-17.3, -2.2, 2.2],
  },
  {
    type: 'video',
    title: 'Medical Officer',
    link: vimeoMedicalOfficer,
    description:
      'Medical Officers keeps the RAF Personnel fit and medically prepared for opertions. They delivery high standard of care, sometimes under callenging conditions. Wg Cmd Becky Woolley talks about her experience in this role, and her deployments.',
    img: '/medical-officer.jpg',
    position: [-15.1, -0.7, -9.7],
  },
  {
    type: 'link',
    title: 'Nursing Officer',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      'Nursing officers manage the teams of Registered Nurses in the RAF, while still delivering a high standard care, in hospitals at home, or on postings and deployments abroad, near the front line.',
    img: '/nursing-officer.jpg',
    position: [-17, -1.6, -5.8],
  },
  {
    type: 'link',
    title: 'Air Operations (Control) Sergeant',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/air-operations-support/air-operations-control-sergeant',
    description:
      'As an RAF Air Operations (Control) Sergeant, you could be providing an air traffic control service at an airfield, working alongside civilian air traffic controllers at the UK’s Air Traffic Control Centre at Swanwick or as a Weapons Controller directing fast jet aircraft to intercept potentially hostile aircraft.',
    img: '/air-operations-sgt.jpg',
    position: [-15.8, 2.5, 8.3],
  },
  {
    type: 'link',
    title: 'Air Operations (Control) Officer',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/air-operations-support/air-operations-control',
    description:
      'Air Operations (Control) Officer manage all professions within Air Operations, which gather a diverse, exciting and complex employment area and directs and supports operations both in the UK and around the world. The three key employment areas are Terminal Air Traffic Control, Area Control, and finally as a Weapons Controller.',
    img: '/air-operations-officer.jpg',
    position: [-15.2, 0, 9.6],
  },
  {
    type: 'video',
    title: 'Aircraft Tech (Mechanical & Avionics)',
    link: vimeoAircraftTech,
    description:
      'RAF Technicians look after all the moving parts of an aircraft, and are both indespensable to the RAF family,  Mechanical Technicians focus on all moving parts of an aircraft, whilst Avionics Technicians focus on all electronics and computer systems for navigation.',
    img: '/aircraft-tech-avionics.jpg',
    position: [-7, -1, 15.5],
  },
  {
    type: 'link',
    title: 'Pilot',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/aircrew/pilot',
    description:
      'RAF Pilots allow the RAF to control the skies. They enjoy a variety of aircraft. They can be on fixed wing and transport crew in the C-17 or A400M Atlas, or fast jets like the Typhoon or the F-35. They can also be on rotary wing, like the Puma or the Chinook helicopters.',
    img: '/pilot.jpg',
    position: [15.2, 1.7, 9.5],
  },
  {
    type: 'video',
    title: 'Weapon Systems Operator',
    link: vimeoWSO,
    description:
      "Sgt Ashley Smith is a Weapon Systems Operator, also known as 'Air Loadmaster'. He is assigned to fixed wing aircraft, but explains the other aircraft a WSOp might work on, as well as the WSOp's role in the RAF's bigger picture.",
    img: '/weapon-systems-operator.jpg',
    position: [0.2, 8.3, 16],
  },
  {
    type: 'link',
    title: 'Intelligence Analyst',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      'As an RAF Intelligence Analyst, you will use state-of-the-art technologies to collect and interpret information, providing vital intelligence, which makes a direct and timely impact to operations around the world.',
    img: '/ccs.jpg',
    position: [-4.5, 0.2, -17.4],
  },
  {
    type: 'link',
    title: 'Driver',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      'Being a driver in the RAF is far more exciting than a driver in the civilian world. You get to deploy all around the world and drive some of the most exciting vehicles. In addition to this, the RAF pays for any training you might need to get your licenses.',
    img: '/driver.jpg',
    position: [1.5, -1.4, 17.9],
  },
  {
    type: 'link',
    title: 'Mover',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      'Movers are the legwork of the Logistics Profession. They allow for equipment, supplies, weapons and other kits to go from A to B. They take equipment from the Logistics Suppliers, and load it in aircraft, which are then signed-off by Weapon Systems Operators, who take on the responsibility of this kit on board.',
    img: '/mover.jpg',
    position: [17.9, -0.6, -1.5],
  },
  {
    type: 'video',
    title: 'RAF Regiment Gunner',
    link: vimeoGunner,
    description:
      'Specialising in combat tactics, weaponry, fieldcraft and force protection, the RAF Regiment is the Force that protects the Force. They ensure the protection on the ground, whilst the RAF operates in the air.',
    img: '/raf-regiment-gunner.jpg',
    position: [11.3, 0.9, 14],
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
