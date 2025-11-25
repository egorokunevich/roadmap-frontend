import axios from 'axios';
import PageContent from '../../components/common/PageContent/PageContent';
import Header from '../../components/Header/Header';

const RoadmapPage = () => {
  const handleBtnClick = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    console.log({ apiUrl });

    const response = await axios.get(apiUrl);
    console.log({ response });
  };

  return (
    <PageContent>
      <Header />
      roadmap tbd...
      <button onClick={handleBtnClick}>request</button>
    </PageContent>
  );
};

export default RoadmapPage;
