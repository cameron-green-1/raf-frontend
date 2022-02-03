import dynamic from 'next/dynamic';

const PanoViewer = dynamic(() => import('../components/panoViewer'), {
  ssr: false,
});

const Scenario = () => <PanoViewer imageSrc='/demo-image.jpg' />;

export default Scenario;
