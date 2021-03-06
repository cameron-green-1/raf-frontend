import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ScenarioTemplate from '../components/scenarioTemplate';
import { debugHoldingSwitch } from '../utils/helpers';

const scenario = {
  satelliteImage: '/loader-biloxi-2.jpg',
  // operation: 'Biloxi',
  operation: 'BILOXI',
  location: 'Undisclosed',
  details: 'Expeditionary Force Forward Operating Base. 4 Typhoons',
  professions:
    'Weapons Technician, Aircraft Technician (Avionics), Logistics Supplier',
  // video: '/briefing-demo.webm',
  video: '/intro-biloxi.webm',
  safariVideo: '/intro-biloxi.mov',
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

const vimeoEOC = (
  <iframe
    src='https://player.vimeo.com/video/718621655?h=33cde8c588'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoNO = (
  <iframe
    src='https://player.vimeo.com/video/718714878?h=26c87b0368'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoATA = (
  <iframe
    src='https://player.vimeo.com/video/718641576?h=b88a0f9a3e'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const vimeoATM = (
  <iframe
    src='https://player.vimeo.com/video/718642657?h=35fd3a50eb'
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
    // type: 'new',
    type: 'link',
    title: 'Find your role',
    link: 'https://www.raf.mod.uk/recruitment/find-your-role',
    position: [-16.1, 2.6, 7.6],
    // position: [-12.2, -0.4, 13.2],
    colour: 'blue',
  },
  {
    // type: 'new',
    type: 'link',
    title: 'Apply now',
    // link: 'https://www.raf.mod.uk/recruitment/find-your-role',
    link: 'https://www.raf.mod.uk/recruitment/apply?utm_source=virtual_event&utm_medium=referral&utm_campaign=RAF&utm_content=RAFWorld-Event-Application-84334',
    position: [-1, 1.5, 18],
    colour: 'blue',
  },
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
    // position: [-17.9, 0.39, -1.99],
    position: [-18, 0.5, 0.8],
  },
  {
    type: 'link',
    title: 'Aircraft Technician (Mechanical)',
    link: 'https://joom.ag/Phad',
    description:
      'As an Aircraft Technician (Mechanical) your job is to carry out maintenance and repair work on the airframe and propulsion systems on RAF aircraft.',
    img: '/aircraft-technician-mech.jpg',
    position: [14.5, -2.7, -10.6],
  },
  {
    type: 'link',
    title: 'Survival Equipment Specialist',
    link: 'https://joom.ag/khad',
    description:
      'Survival Equipment Specialists look after the safety and survival equipment that aircrew depend on when they fly. They specialise in either Survival Equipment ??? fitted to aircraft ??? or individual Aircrew Equipment.',
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
    link: 'https://joom.ag/6had',
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
      'Air Operations (Control) Sergeants provide an air traffic control service at airfields, and work alongside civilian air traffic controllers at the UK???s Air Traffic Control Centre, or as a Weapons Controller directing fast jet aircraft to intercept potentially hostile aircraft.',
    img: '/air-operations-sgt.jpg',
    position: [15.1, 4.4, 8.7],
  },
  {
    type: 'link',
    title: 'Intelligence Officer',
    link: 'https://joom.ag/Thad',
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
      'As a Communications Infrastructure Technician you will provide communication for the RAF???s digital infrastructure ecosystem by installing and maintaining essential fibre optic and data communication cables, radome structures and antenna masts working at height or in secure operation rooms.',
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
    img: '/raf-regiment-gunner-2.jpg',
    position: [17.7, -2.5, 3.3],
  },
  {
    type: 'video',
    title: 'Engineering Officer (Comms Electronics)',
    link: vimeoEOC,
    description:
      'As an Engineer Officer (Communications Electronics) you are responsible for leading the engineering activity that supports the RAF???s vast array of information technology, strategic communications services, satellite communications, air defence RADARs and the latest generation aircraft engineering and mission support systems.',
    img: '/driver.jpg',
    position: [6, -0.5, 17],
  },
  {
    type: 'video',
    title: 'Nursing Officer',
    link: vimeoNO,
    description:
      'Nursing officers manage the teams of Registered Nurses in the RAF, while still delivering a high standard care, in hospitals at home, or on postings and deployments abroad, near the front line. Flt Lt Sara Drivers talks about her role, and experience on deployments around the world.',
    img: '/driver.jpg',
    position: [7, 0, -16.5],
  },
  {
    type: 'video',
    title: 'Aircraft Technician (Avionics)',
    link: vimeoATA,
    description:
      'As an Aircraft Technician (Avionics) you will keep our aircraft airborne by carrying out maintenance and repair work on the sophisticated electronic and on board avionics.',
    img: '/driver.jpg',
    position: [14.4, 4.4, -10],
  },
  {
    type: 'video',
    title: 'Aircraft Technician (Mechanical)',
    link: vimeoATM,
    description:
      'As an Aircraft Technician your job is to carry out maintenance and repair work on the airframe and propulsion systems on RAF aircraft.',
    img: '/driver.jpg',
    position: [12.5, 1, -12.8],
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
    img: '/life-in-the-raf-3.jpg',
    position: [-12.2, 2.5, 13.2],
    colour: 'blue',
  },
];

const Biloxi = () => {
  const router = useRouter();
  useEffect(() => {
    if (debugHoldingSwitch) router.push('/');
  }, []);
  return (
    <>
      <Head>
        <title>RAF World | BILOXI</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <ScenarioTemplate
        imageSrc='/pano-biloxi.jpg'
        scenario={scenario}
        hotspots={hotspots}
        duration={89000}
      />
    </>
  );
};

export default Biloxi;
