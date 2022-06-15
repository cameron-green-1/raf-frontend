import Head from 'next/head';
import ScenarioTemplate from '../components/scenarioTemplate';

const scenario = {
  satelliteImage: '/loader-maca.jpg',
  // operation: 'Maca Support',
  operation: 'MACA',
  location: 'UK',
  details: 'Military and civil cooperation, RAF bases, air assets',
  professions: 'Engineering, Medical Services, Logistics',
  // video: '/briefing-demo.webm',
  video: '/intro-maca.webm',
  safariVideo: '/intro-maca.mov',
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

const vimeoMental = (
  <iframe
    src='https://player.vimeo.com/video/715575997?h=9062b319a9'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoNursingOfficer = (
  <iframe
    src='https://player.vimeo.com/video/715531088?h=5c263cb2a2'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoIntelAnalyst = (
  <iframe
    src='https://player.vimeo.com/video/715607525?h=0390dc266b'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoPersonnel = (
  <iframe
    src='https://player.vimeo.com/video/715552085?h=f2751e5256'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoChaplaincy = (
  <iframe
    src='https://player.vimeo.com/video/718246101?h=aa281fa1a6'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoEOA = (
  <iframe
    src='https://player.vimeo.com/video/715575374?h=6ee27abdd5'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoEOC = (
  <iframe
    src='https://player.vimeo.com/video/715597002?h=f9df78b727'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoASOS = (
  <iframe
    src='https://player.vimeo.com/video/715607600?h=22f48634cc'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoRAFP = (
  <iframe
    src='https://player.vimeo.com/video/715654106?h=6f0252e8fa'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoMACA = (
  <iframe
    src='https://player.vimeo.com/video/718640621?h=0f8d99ba08'
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

// const vimeoSuppFAR = (
//   <iframe
//     src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo'
//   ></iframe>
// );

// const vimeoSuppBAL = (
//   <iframe
//     src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo'
//   ></iframe>
// );

// const vimeoSuppLGBT = (
//   <iframe
//     src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo'
//   ></iframe>
// );

// const vimeoSuppWomen = (
//   <iframe
//     src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo'
//   ></iframe>
// );

// const vimeoSuppRoles = (
//   <iframe
//     src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo'
//   ></iframe>
// );

// const vimeoSuppFAR = (
//   <iframe
//     src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo'
//   ></iframe>
// );

// const vimeoSuppFAR = (
//   <iframe
//     src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo'
//   ></iframe>
// );

// const vimeoSuppFAR = (
//   <iframe
//     src='https://player.vimeo.com/video/715942022?h=2208ca34cb'
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo'
//   ></iframe>
// );

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
    type: 'video',
    title: 'Registered Nurse (Mental Health)',
    // link: '/dummy.pdf',
    link: vimeoMental,
    description:
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ligula enim. Sed et egestas leo, quis volutpat enim. Praesent sed pellentesque ipsum, eget pretium erat. Aliquam at eleifend sapien, vitae tempor ante.',
      'As an RAF Mental Health Nurse, you will operate in multi-disciplinary teams to deliver a safe and effective community mental health service-to-service personnel, in order to enhance and sustain the operational effectiveness of the UK Armed Forces. Sergeant Susie Ferguson explains what Mental Health Nurses do in the RAF and how they support RAF personnel. She has had various roles and is proud to have completed a post-graduate diploma in Cognitive Behavioral Therapy.',
    // img: '/registered-nurse.jpg',
    img: null,
    // position: [19, 1, 2.5],
    position: [17.9, 1.5, -1],
  },
  {
    // type: 'pdf',
    type: 'link',
    title: 'Medical Officer',
    link: 'https://joom.ag/0had',
    description:
      'Medical Officers keeps the RAF Personnel fit and medically prepared for operations. They delivery high standard of care, sometimes under callenging conditions.',
    img: '/medical-officer.jpg',
    position: [5.3, -0.5, 17],
  },
  {
    type: 'video',
    title: 'Nursing Officer',
    link: vimeoNursingOfficer,
    description:
      'Nursing officers manage the teams of Registered Nurses in the RAF, while still delivering a high standard care, in hospitals at home, or on postings and deployments abroad, near the front line. Sqn Ldr Amy talks about her role as a Nursing Officer.',
    img: '/nursing-officer.jpg',
    position: [18, -2.1, 1.5],
  },
  {
    type: 'link',
    title: 'Supplier',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/logistics/supplier',
    description:
      "The Logistics Suppliers look after the storage and the deployment of all RAF Assets. This could be equipment, vehicles, humanitarian goods, weapons and explosives. Without them, the RAF wouldn't run.",
    img: '/logistics-supplier.jpg',
    position: [18.07, -1.8, -7],
  },
  {
    type: 'link',
    title: 'Driver',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/logistics/driver',
    description:
      'As an RAF Driver, you will operate many vehicle types, from cars and minibuses to cranes, articulated trucks, coaches and specialist vehicles (such as aircraft refuellers) to ensure RAF personnel, equipment and commodities are in the right place at the right time.',
    img: '/driver.jpg',
    position: [5.82, -1.8, -18],
  },
  {
    type: 'video',
    title: 'Intelligence Analyst',
    link: vimeoIntelAnalyst,
    description:
      'Intelligence Analysts are the eyes and ears that keep the country and the RAF safe. They intercept transmissions for analysis, in order to make the best strategic decisions.',
    img: '/intelligence-officer.jpg',
    position: [-3.8, 2.3, 12],
  },
  {
    type: 'link',
    title: 'Intelligence Analyst (Linguist)',
    link: 'https://joom.ag/Nhad',
    description:
      'Being a linguist in the RAF is one of the most rewarding jobs in the Force. Not only you are the eyes and ears that keeps everyone safe, but you also put your skills to the test, and learn languages whilst being paid by the Air Force.',
    img: '/intelligence-analyst-linguist.jpg',
    position: [15, 2.2, 9.8],
  },
  {
    type: 'link',
    title: 'RAF Regiment Gunner',
    link: 'https://joom.ag/uhad',
    description:
      'Specialising in combat tactics, weaponry, fieldcraft and force protection, the RAF Regiment is the Force that protects the Force. They ensure the protection on the ground, whilst the RAF operates in the air.',
    img: '/raf-regiment-gunner.jpg',
    position: [-16, -0.5, 5.819120914630715],
  },
  {
    type: 'video',
    title: 'Personnel Support',
    link: vimeoPersonnel,
    description:
      'The role of Personnel Support Officer is diverse and covers a wide range of specialisations such as HR, Accounts & Personnel management. You could be working from a UK airbase, or posted in the Falkland or Cyprus whilst undertaking your duty.',
    img: '/personnel-support.jpg',
    position: [11, -0.5, 14.3],
  },
  {
    type: 'video',
    title: 'Chaplaincy',
    link: vimeoChaplaincy,
    description:
      'Our Chaplains benefit from an exciting career, serving in all our UK and overseas bases. They are there to listen, and help personnel of all faiths, and none.',
    img: '/chaplaincy.jpg',
    position: [13, -2.3, 13.9],
  },
  {
    type: 'link',
    title: 'Legal',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/personnel-support/legal-officer',
    description:
      'Law in the RAF addresses the rules and regulations of the organisation, society at large and the international community. As an RAF Legal Officer, you will have a wide variety of legal challenges linked to the force and will play a central role in ensuring that we function smoothly.',
    img: '/legal-officer.jpg',
    position: [16.2, 0, 10],
  },
  {
    type: 'link',
    title: 'Pilot',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/aircrew/pilot',
    description:
      'RAF Pilots allow the RAF to control the skies. They enjoy a variety of aircraft. They can be on fixed wing and transport crew in the C-17 or A400M Atlas, or fast jets like the Typhoon or the F-35. They can also be on rotary wing, like the Puma or the Chinook helicopters.',
    img: '/pilot.jpg',
    position: [-14, -0.5, -9.12],
  },
  {
    type: 'link',
    title: 'Weapon Systems Operator',
    link: 'https://joom.ag/thad',
    description:
      'Weapon Systems Operators are the aircrew that allow the aircraft to fly, but are not in the cockpit. They are in the back of a helicopter or plane, and manage the navigation, and the load, whether passengers or kit handed over from the Movers.',
    img: '/weapon-systems-operator.jpg',
    position: [-17, 2, -2.5],
  },
  {
    type: 'link',
    title: 'Aircraft Technician (Mechanical)',
    link: 'https://recruitment.raf.mod.uk/roles/roles-finder/technical-and-engineering/aircraft-technician-mechanical',
    description:
      'As an Aircraft Technician (Mechanical) your job is to carry out maintenance and repair work on the airframe and propulsion systems on RAF aircraft.',
    img: '/aircraft-technician-mech.jpg',
    position: [-14, 1, -13.5],
  },
  {
    type: 'link',
    title: 'Aircraft Technician (Avionics)',
    link: 'https://joom.ag/8had',
    description:
      'As an Aircraft Technician (Avionics) look after all electrical systems on an aircraft, like coms, radio systems and navigation.',
    img: '/aircraft-tech-avionics.jpg',
    position: [-16.5, 10, 0],
  },
  {
    type: 'video',
    title: 'Engineering Officer (Aerosystems)',
    link: vimeoEOA,
    description:
      "As an Aerosystems Engineer Officer you will manage the maintenance and operation of the RAF's cutting-edge aircraft and supporting technology. Wing Commander Gemma Lonsdale shares highlights from her exciting and varied career as a female engineer. From being awarded an RAF sponsorship, to adventure training and flying in the back of a Typhoon.",
    img: '/aircraft-tech-avionics.jpg',
    position: [-15.8, 3, 8.4],
  },
  {
    type: 'video',
    title: 'Engineering Officer (Comms Electronics)',
    link: vimeoEOC,
    description:
      'As an Engineer Officer (Communications Electronics) you are responsible for leading the engineering activity that supports the RAF’s vast array of information technology, strategic communications services, satellite communications, air defence RADARs and the latest generation aircraft engineering and mission support systems.',
    img: '/aircraft-tech-avionics.jpg',
    position: [-6.8, -2.5, 16.5],
  },
  {
    type: 'video',
    title: 'Air and Space Ops Specialist',
    link: vimeoASOS,
    description:
      'As an RAF Air & Space Operations Specialist (Flight Operations) you will support aircrew, Air Operations (Control) Officers and Air Operations (Systems) Officers to facilitate the successful planning and execution of flights and missions, as well as deployment of the Quick Reaction Alert team, both in the UK and on worldwide operations.',
    img: '/aircraft-tech-avionics.jpg',
    position: [-8.8, 6.7, 14.2],
  },
  {
    type: 'video',
    title: 'RAF Police',
    link: vimeoRAFP,
    description:
      'RAF Police have a critical role to enable airpower opreations globally. They conduct criminal and security investigations. They either specialise in Aviation Security, Counter Intelligence, Protective Security, Law Enforcement, Military Working Dogs, Information or Cyber Security. Cpl Callum Hales specialises in Cyber Security, and talks about his experience training RAF Personnel and foreign forces on deployements, about cyber security and its importance.',
    img: '/aircraft-tech-avionics.jpg',
    position: [-3.2, 0.4, -17.7],
  },
  {
    type: 'video',
    title: 'MACA Explained',
    link: vimeoMACA,
    description:
      'MACA explained by RAF Regional Liason Officer (East Midlands).',
    img: '/aircraft-tech-avionics.jpg',
    position: [12.5, -2, -12.5],
  },
  // {
  //   type: 'text',
  //   title: 'General Technician',
  //   link: null,
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada mauris augue, sed pretium neque cursus et. Nulla facilisi. Sed dictum laoreet velit porta sagittis. Phasellus volutpat urna at libero ultricies, ut dictum nibh tempus. Praesent metus mauris, accumsan eu nunc eget, interdum lacinia risus. Vivamus ut iaculis leo. Proin volutpat urna at placerat fringilla. Sed placerat, ipsum non dictum ultricies, risus erat porta justo, quis laoreet sapien dolor quis arcu.',
  //   img: '/general-technician.jpg',
  //   position: [-4.5, -0.9, -19],
  // },
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
  },
];

const Maca = () => {
  return (
    <>
      <Head>
        <title>RAF World | MACA</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <ScenarioTemplate
        imageSrc='/pano-maca.jpg'
        scenario={scenario}
        hotspots={hotspots}
        duration={73000}
      />
    </>
  );
};

export default Maca;
