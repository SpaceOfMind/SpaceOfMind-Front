import { Chrono } from 'react-chrono';

const ChronoWrapper = ({ dateItems, customContents }) => {
  return (
    <Chrono
      items={dateItems}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: '#718fa7',
        secondary: '#1d6291',
        cardBgColor: '#f7e8e1',
        titleColor: '#88a2bd',
        titleColorActive: '#ffffff',
        cardTitleColor: '#1d6291',
      }}
    >
      {customContents}
    </Chrono>
  );
};

export default ChronoWrapper;
