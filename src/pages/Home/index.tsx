import '@Styles/tailwind.css';

import MembersList from '@Components/MembersList';

import { PageWrapper as Page } from './../../styles/GlobalStyles';

const Home = () => {
  return (
    <Page>
      <MembersList />
    </Page>
  );
};

export default Home;
