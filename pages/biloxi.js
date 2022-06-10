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

const vimeoWeaponsTech = (
  <iframe
    src='https://player.vimeo.com/video/718642304?h=639d68a568'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoSysOff = (
  <iframe
    src='https://player.vimeo.com/video/715635529?h=bb5e366a25'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoCtrlSgt = (
  <iframe
    src='https://player.vimeo.com/video/715634576?h=050d4aedf1'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoAnalyst = (
  <iframe
    src='https://player.vimeo.com/video/715635091?h=a39f8a8174'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoCSCS = (
  <iframe
    src='https://player.vimeo.com/video/715641302?h=5240dbdd2d'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoChef = (
  <iframe
    src='https://player.vimeo.com/video/718711886?h=ffdd0e797b'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoAGSteward = (
  <iframe
    src='https://player.vimeo.com/video/715634796?h=68a5811be6'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoLSupplier = (
  <iframe
    src='https://player.vimeo.com/video/718298224?h=0c357217dd'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoDriver = (
  <iframe
    src='https://player.vimeo.com/video/718300239?h=ac2590583c'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoEOfficer = (
  <iframe
    src='https://player.vimeo.com/video/718621655?h=33cde8c588'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoNOfficer = (
  <iframe
    src='https://player.vimeo.com/video/718714878?h=26c87b0368'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoATechAv = (
  <iframe
    src='https://player.vimeo.com/video/718641576?h=b88a0f9a3e'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoATech = (
  <iframe
    src='https://player.vimeo.com/video/718642657?h=35fd3a50eb'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const hotspots = [
  {
    type: 'video',
    title: 'Weapons Technician',
    link: vimeoWeaponsTech,
    description:
      "Weapon Technicians are in charge of managing and maintaining weapons and explosives, making sure they are ready at a moment's notice. They are crucial to the success of every RAF operation. Cpl Adam Clare talks about his role as a Weapon Technician and his deployments abroad.",
    img: '/weapons-tech.jpg',
    position: [-17.3, -1.9, 4.5],
  },
  {
    type: 'link',
    title: 'Aircraft Technician (Avionics)',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/technical-and-engineering/aircraft-technician-avionics',
    description:
      'As an Aircraft Technician (Avionics) you will keep our aircraft airborne by carrying out maintenance and repair work on all electrical systems on an aircraft, like coms, radio systems and navigation.',
    img: '/aircraft-tech-avionics.jpg',
    position: [-17.9, 0.39, -1.99],
  },
  {
    type: 'link',
    title: 'Aircraft Technician (Mechanical)',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      'As an Aircraft Technician (Mechanical) your job is to carry out maintenance and repair work on the airframe and propulsion systems on RAF aircraft.',
    img: '/aircraft-technician-mech.jpg',
    position: [14.5, -2.7, -10.6],
  },
  {
    type: 'link',
    title: 'Survival Equipment Specialist',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      'Survival Equipment Specialists look after the safety and survival equipment that aircrew depend on when they fly. They specialise in either Survival Equipment – fitted to aircraft – or individual Aircrew Equipment.',
    img: '/survival-equipment-specialist.jpg',
    position: [-7.4, -2, 16.1],
  },
  {
    type: 'video',
    title: 'Air Operations (Systems) Officer',
    link: vimeoSysOff,
    description:
      'Air Operations (Systems) Officer control RAF aircraft to intercept hostile intruders.  This can be performed from a bunker or on board a surveillance aircraft like Poseidon or Rivet Joint  ',
    img: '/air-space-ops-spec.jpg',
    position: [15.5, -0.6, 9.2],
  },
  {
    type: 'link',
    title: 'Air Operations (Control) Officer',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      'Air Operations (Control) Officer manage all professions within Air Operations, which gather a diverse, exciting and complex employment area and directs and supports operations both in the UK and around the world. The three key employment areas are Terminal Air Traffic Control, Area Control, and finally as a Weapons Controller.',
    img: '/air-operations-officer.jpg',
    position: [16.3, 2.3, 7.2],
  },
  {
    type: 'video',
    title: 'Air Operations (Control) Sergeant',
    link: vimeoCtrlSgt,
    description:
      'Air Operations (Control) Sergeants provide an air traffic control service at airfields, and work alongside civilian air traffic controllers at the UK’s Air Traffic Control Centre, or as a Weapons Controller directing fast jet aircraft to intercept potentially hostile aircraft.',
    img: '/air-operations-sgt.jpg',
    position: [15.1, 4.4, 8.7],
  },
  {
    type: 'link',
    title: 'Intelligence Officer',
    link: 'https://viewer.joomag.com/intelligence-analyst-linguist/0385672001648676883?short&',
    description:
      'Intelligence Officers obtain, analyse and present defence intelligence from a variety of sources and manage a team of Intelligence Analysts and Linguists. The information and intelligence they collect and analyse is critical to the success of RAF operations, and can save countless lives.',
    img: '/intelligence-officer.jpg',
    position: [-15.2, 0.9, -9.5],
  },
  {
    type: 'link',
    title: 'Intelligence Analyst',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/intelligence/intelligence-analyst',
    description:
      'As an RAF Intelligence Analyst, you will use state-of-the-art technologies to collect and interpret information, providing vital intelligence, which makes a direct and timely impact to operations around the world.',
    img: '/intelligence-officer.jpg',
    position: [-8.2, 3, -15.9],
  },
  {
    type: 'video',
    title: 'Intelligence Analyst (Linguist)',
    link: vimeoAnalyst,
    description:
      'Being a linguist in the RAF is one of the most rewarding jobs in the Force. Not only you are the eyes and ears that keeps everyone safe, but you also put your skills to the test, and learn languages whilst being paid by the Air Force.',
    img: '/intelligence-analyst-linguist.jpg',
    position: [-10.8, -0.8, -14.4],
  },
  {
    type: 'video',
    title: 'Cyber Space Comms Specialist',
    link: vimeoCSCS,
    description:
      'Cyberspace Communications Specialists are the technicians that allow the RAF to communicate. They are often the first ones to arrive in a new environment in order to establish communications. They allow aircraft to fly, runways to work, and operations to run smoothly. In the RAF, nothing happens without a Cyberspace Communications Specialist.',
    img: '/ccs.jpg',
    position: [3.1, 8.7, -15.5],
  },
  {
    type: 'link',
    title: 'Communications Infrastructure Tech',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/cyberspace/communications-infrastructure-technician',
    description:
      'As a Communications Infrastructure Technician you will provide communication for the RAF’s digital infrastructure ecosystem by installing and maintaining essential fibre optic and data communication cables, radome structures and antenna masts working at height or in secure operation rooms.',
    img: '/comms-infra-tech.jpg',
    position: [3.1, 4.1, -15.5],
  },
  {
    type: 'video',
    title: 'Chef',
    link: vimeoChef,
    description:
      'Being a Chef in the Air Force is more than a Chef job in the civilian world. The RAF offers a much more varied career, but also a very stable career within the organisation. You could be posted at home and working on Gala dinners, or deployed on operations, working in a mobile kitchen. Cpl Jamie McFee is an RAF Chef and talks about his experiences and deployments.',
    img: '/chef.jpg',
    position: [-0.9, -0.2, -18],
  },
  {
    type: 'video',
    title: 'Air Ground Steward',
    link: vimeoAGSteward,
    description:
      'You might now know it, but even the RAF has Cabin Crew. Air & Ground Stewards allow good transfer of RAF troops between RAF bases. They travel the world daily, and conduct similar duties to civilian Air Stewards, but in a military setting. They enjoy a varied and exciting role, which sees them fly all over the world.',
    img: '/air-ground-steward.jpg',
    position: [11.2, -3.7, 14],
  },
  {
    type: 'video',
    title: 'Logistics Supplier',
    link: vimeoLSupplier,
    description:
      "The Logistics Suppliers look after the storage and the deployment of all RAF Assets. This could be equipment, vehicles, humanitarian goods, weapons and explosives. Without them, the RAF wouldn't run.",
    img: '/logistics-supplier.jpg',
    position: [-6.2, -5, -16.2],
  },
  {
    type: 'video',
    title: 'Driver',
    link: vimeoDriver,
    description:
      'Being a driver in the RAF is far more exciting than a driver in the civilian world. You get to deploy all around the world and drive some of the most exciting vehicles. In addition to this, the RAF pays for any training you might need to get your licenses.',
    img: '/driver.jpg',
    position: [17.6, 0, -3.1],
  },
  {
    type: 'link',
    title: 'RAF Regiment Gunner',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/force-protection/raf-regiment-gunner',
    description:
      'As an RAF Regiment Gunner, you will specialise in combat tactics, weaponry, fieldcraft and force protection. You will be part of a highly trained team carrying out a range of crucial duties to defend RAF bases and overseas air operations.',
    img: '/raf-regiment-gunner.jpg',
    position: [17.7, -2.5, 3.3],
  },
  {
    type: 'find',
    title: 'Find your role',
    link: null,
    links: [
      {
        title: 'Faith and Religion',
        type: 'link',
        link: 'https://vimeo.com/715942022/2208ca34cb',
      },
      {
        title: 'Benefits and Lifestyle',
        type: 'link',
        link: 'https://vimeo.com/715941929/2679020c86',
      },
      {
        title: 'LGBTQ+',
        type: 'link',
        link: 'https://vimeo.com/715941469/9b4cb30a9e',
      },
      {
        title: 'Women in the RAF',
        type: 'link',
        link: 'https://vimeo.com/715941868/21170e86b6',
      },
      {
        title: 'Roles in the RAF',
        type: 'link',
        link: 'https://vimeo.com/715941757/e6f2fd8c43',
      },
      {
        title: 'Inspiration',
        type: 'link',
        link: 'https://vimeo.com/715941715/d618193375',
      },
      {
        title: 'Apprenticeships',
        type: 'link',
        link: 'https://vimeo.com/715941196/84e13f6423',
      },
      {
        title: 'Phase 1 Training Meet Jessica',
        type: 'link',
        link: 'https://vimeo.com/715940901/3dcb5f7ae5',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-12.2, -0.4, 13.2],
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
