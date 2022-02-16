import dynamic from 'next/dynamic';
import withTransition from '../components/withTransition';

const PanoViewer = dynamic(() => import('../components/panoViewer'), {
  ssr: false,
});

const Scenario = () => <PanoViewer imageSrc='/pano1.jpg' />;

export default withTransition(Scenario);
// export default Scenario;
