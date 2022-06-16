import Head from 'next/head';
import ScenarioTemplate from '../components/scenarioTemplate';

const scenario = {
  satelliteImage: '/loader-ruman.jpg',
  // operation: 'Ruman',
  operation: 'RUMAN',
  location: 'Caribbean',
  details:
    'Joint service operation, forward operating base, multi engine and rotary air assets',
  professions: 'Medical Services, Logistics, Security and Resilience',
  // video: '/briefing-demo.webm',
  video: '/intro-ruman.webm',
  safariVideo: '/intro-ruman.mov',
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
    // src='https://player.vimeo.com/video/718256946?h=6da12828ed'
    src='https://player.vimeo.com/video/715619605?h=6aa54d27f0'
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

const vimeoARN = (
  <iframe
    src='https://player.vimeo.com/video/718714878?h=26c87b0368'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoRAFP = (
  <iframe
    src='https://player.vimeo.com/video/715658116?h=0128cd8404'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoRAFF = (
  <iframe
    src='https://player.vimeo.com/video/715648382?h=ff6ffd11c6'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoEOC = (
  <iframe
    src='https://player.vimeo.com/video/718624428?h=0cddeb5142'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoASOS = (
  <iframe
    src='https://player.vimeo.com/video/715934634?h=6d1e22faae'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoLO = (
  <iframe
    src='https://player.vimeo.com/video/718641947?h=fc77d4c9a5'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoIA = (
  <iframe
    src='https://player.vimeo.com/video/715909344?h=02c8479e35'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoWSO2 = (
  <iframe
    src='https://player.vimeo.com/video/718641106?h=7f4360c879'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoReligion = (
  <iframe
    src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoBenefits = (
  <iframe
    src='https://player.vimeo.com/video/715941929?h=2679020c86'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoLGBT = (
  <iframe
    src='https://player.vimeo.com/video/715941469?h=9b4cb30a9e'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoWomen = (
  <iframe
    src='https://player.vimeo.com/video/715941868?h=21170e86b6'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoRoles = (
  <iframe
    src='https://player.vimeo.com/video/715941757?h=e6f2fd8c43'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoInspiration = (
  <iframe
    src='https://player.vimeo.com/video/715941715?h=d618193375'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoApprenticeships = (
  <iframe
    src='https://player.vimeo.com/video/715941196?h=84e13f6423'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoPhase1 = (
  <iframe
    src='https://player.vimeo.com/video/715940901?h=3dcb5f7ae5'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const hotspots = [
  {
    type: 'link',
    title: 'Find your role',
    link: 'https://www.raf.mod.uk/recruitment/find-your-role',
    position: [-5.8, 1, 17],
    // position: [-12.2, -0.4, 13.2],
    colour: 'blue',
  },
  {
    type: 'link',
    title: 'Adult Registered Nurse',
    link: 'https://joom.ag/Ahad',
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
  // {
  //   type: 'link',
  //   title: 'Medical Officer',
  //   link: 'https://joom.ag/0had',
  //   description:
  //     'Medical officers manage the teams of Registered Nurses in the RAF, while still delivering a high standard care, in hospitals at home, or on postings and deployments abroad, near the front line.',
  //   img: '/nursing-officer.jpg',
  //   position: [-17, -1.6, -5.8],
  // },
  {
    type: 'link',
    title: 'Air Operations (Control) Sergeant',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/air-operations-support/air-operations-control-sergeant',
    description:
      'As an RAF Air Operations (Control) Sergeant, you could be providing an air traffic control service at an airfield, working alongside civilian air traffic controllers at the UK’s Air Traffic Control Centre at Swanwick or as a Weapons Controller directing fast jet aircraft to intercept potentially hostile aircraft.',
    img: '/air-operations-sgt-2.jpg',
    position: [-15.8, 2.5, 8.3],
  },
  {
    type: 'link',
    title: 'Air Operations (Control) Officer',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/air-operations-support/air-operations-control',
    description:
      'Air Operations (Control) Officer manage all professions within Air Operations, which gather a diverse, exciting and complex employment area and directs and supports operations both in the UK and around the world. The three key employment areas are Terminal Air Traffic Control, Area Control, and finally as a Weapons Controller.',
    img: '/air-operations-officer.jpg',
    // position: [-15.2, 0, 9.6],
    position: [-15, 1, 10],
  },
  // {
  //   type: 'video',
  //   title: 'Aircraft Tech (Mechanical & Avionics)',
  //   link: vimeoAircraftTech,
  //   description:
  //     'RAF Technicians look after all the moving parts of an aircraft, and are both indespensable to the RAF family,  Mechanical Technicians focus on all moving parts of an aircraft, whilst Avionics Technicians focus on all electronics and computer systems for navigation.',
  //   img: '/aircraft-tech-avionics.jpg',
  //   // position: [-7, -1, 15.5],
  //   position: [-7.5, -2, 16.5],
  // },
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
    link: 'https://joom.ag/Nhad',
    description:
      'As an RAF Intelligence Analyst, you will use state-of-the-art technologies to collect and interpret information, providing vital intelligence, which makes a direct and timely impact to operations around the world.',
    img: '/ccs.jpg',
    position: [-4.5, 0.2, -17.4],
  },
  {
    type: 'link',
    title: 'Driver',
    link: 'https://joom.ag/qhad',
    description:
      'Being a driver in the RAF is far more exciting than a driver in the civilian world. You get to deploy all around the world and drive some of the most exciting vehicles. In addition to this, the RAF pays for any training you might need to get your licenses.',
    img: '/driver.jpg',
    position: [1.5, -1.4, 17.9],
  },
  {
    type: 'link',
    title: 'Mover',
    link: 'https://joom.ag/Jhad',
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
    img: '/raf-regiment-gunner-2.jpg',
    position: [11.3, 0.9, 14],
  },
  {
    type: 'video',
    title: 'Adult Registered Nurse',
    link: vimeoARN,
    description:
      'Nursing officers manage the teams of Registered Nurses in the RAF, while still delivering a high standard care, in hospitals at home, or on postings and deployments abroad, near the front line. Flt Lt Sara Drivers talks about her role, and experience on deployments around the world.',
    img: null,
    // position: [-17.8, 1.7, -1.7],
    position: [-17.2, 2.5, -6.1],
  },
  {
    type: 'video',
    title: 'RAF Police',
    link: vimeoRAFP,
    description:
      'As a member of the RAF Police, you will conduct criminal and security investigations. As specialists in Aviation Security, Counter Intelligence, Protective Security, Law Enforcement, Military Working Dogs, Information and Cyber Security, the RAF Police plays a critical role enabling airpower operations globally. Cpl Vicky Bloor specialised in Military Working Dogs, from explosive detection to patrolling.',
    img: null,
    position: [16.2, -2.2, 7.5],
  },
  {
    type: 'video',
    title: 'RAF Firefighter',
    link: vimeoRAFF,
    description:
      'As an RAF Firefighter you will provide 24/7 fire and crash rescue protection. You will be organised and trained to respond to any emergency with highly specialised equipment like powerful cutting tools.',
    img: null,
    position: [17.8, 1.2, 2.7],
  },
  {
    type: 'video',
    title: 'Engineering Officer (Comms Electronics)',
    link: vimeoEOC,
    description:
      'As an Engineer Officer (Communications Electronics) you are responsible for leading the engineering activity that supports the RAF’s vast array of information technology, strategic communications services, satellite communications, air defence RADARs and the latest generation aircraft engineering and mission support systems.',
    img: null,
    position: [12.5, -2.6, 11.4],
  },
  {
    type: 'video',
    title: 'Air and Space Ops Specialist',
    link: vimeoASOS,
    description:
      'As an RAF Air & Space Operations Specialist (Flight Operations) you will support aircrew, Air Operations Controllers and Air Operations (Systems) Officers to facilitate the successful planning and execution of flights and missions, both in the UK and on worldwide operations.',
    img: null,
    position: [-7.5, 4, 16.5],
  },
  {
    type: 'video',
    title: 'Logistics Officer',
    link: vimeoLO,
    description:
      'The Logistics Officer manages all the trades within the Logistics Profession, Chefs, Air & Ground Stewards, Movers, Drivers and Suppliers. They enable these teams to get the RAF functionning properly. Flt Lt John Ormsby talks about his role, and his experience on deployment on Op Ruman.',
    img: null,
    position: [4, -3, -17.3],
  },
  {
    type: 'video',
    title: 'Intelligence Analyst (Linguist)',
    link: vimeoIA,
    description:
      'Being a WSOp Linguist in the RAF is one of the most rewarding jobs in the RAF. Not only you are the eyes and ears that keeps everyone safe, but you also get to fly in reconnaissance aircraft to catch foreign transmissions, and learn languages whilst being paid.',
    img: null,
    position: [4, 0.5, -17.5],
  },
  {
    type: 'video',
    title: 'Weapon Systems Operator',
    link: vimeoWSO2,
    description:
      'As a Weapon Systems Operator you will manage the sensors and weapons of a particular aircraft during operational missions, whilst at the same time gathering intelligence and supporting forces on the ground.',
    img: null,
    position: [17.5, 4, -1.2],
  },
  {
    type: 'find',
    title: 'Life in the RAF',
    link: null,
    links: [
      {
        title: 'Faith and Religion',
        type: 'link',
        // link: 'https://vimeo.com/715942022/2208ca34cb',
        link: vimeoReligion,
        description:
          'Amir Khan is a Medical Officer and comes from a background of Pashtun Muslim. He talks about how the RAF has grown into a diverse organisation; different religions bring languages and culture which makes for a stronger RAF.',
      },
      {
        title: 'Benefits and Lifestyle',
        type: 'link',
        link: vimeoBenefits,
        description:
          'The RAF has countless benefits to offer, from subsidised accommodation to travels and sports competing in your paid time, no two days are the same. You might not know it, but the RAF also offers very competitive salaries. Find out more on the RAF website.',
      },
      {
        title: 'LGBTQ+',
        type: 'link',
        link: vimeoLGBT,
        description:
          'The RAF counts many members of the LGBTQ+ community in its ranks, and as such, created a network dedicated to educating the workforce, and making sure everyone is treated fairly.',
      },
      {
        title: 'Women in the RAF',
        type: 'link',
        link: vimeoWomen,
        description:
          'The RAF is proud to count over 5,000 women in its ranks. All roles are open to everyone in the RAF, and we thrive to empower everyone, no matter their gender or ethnicity.',
      },
      {
        title: 'Roles in the RAF',
        type: 'link',
        link: vimeoRoles,
        description:
          'The RAF offer a wide variety of roles, which are vital to keep the Air Force operating every day. From Logistics to Military Working Dogs and RAF Firefighters, no day is the same, and no role is the same either.',
      },
      {
        title: 'Inspiration',
        type: 'link',
        link: vimeoInspiration,
        description:
          'Everyone in the RAF had their interest sparked somewhere in their lives. Whether it is to follow the footsteps of a family member, or to fulfil their duty to their country, there are so many goals that keep our personnel going.',
      },
      {
        title: 'Apprenticeships',
        type: 'link',
        link: vimeoApprenticeships,
        description:
          'Every ground role offers an Apprenticeship in the RAF. When leaving school at 16, you can follow an NVQ in order to get qualified for your role.',
      },
      {
        title: 'Phase 1 Training Meet Jessica',
        type: 'link',
        link: vimeoPhase1,
        description:
          'Phase 1 Training can seem scary at first, every personnel in the RAF has gone through that training, and most have felt nervous about the first day. This training is a great way to meet RAF personel, and learn about the forces. From marching to weapon handling, you will learn everything there is to learn about the military life.',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
    img: '/general-technician.jpg',
    position: [-12.2, -0.4, 13.2],
    colour: 'blue',
  },
];

const Ruman = () => {
  return (
    <>
      <Head>
        <title>RAF World | RUMAN</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <ScenarioTemplate
        imageSrc='/pano-ruman.jpg'
        scenario={scenario}
        hotspots={hotspots}
        duration={66000}
      />
    </>
  );
};

export default Ruman;
