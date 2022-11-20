import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React from 'react';
import { useFlow } from 'src/utils/stackflow';

const MainPage: ActivityComponentType = () => {
  const { push } = useFlow();

  const handleLinkDetailPage = () => {
    push('DetailPage', {
      id: 0,
    });
  };

  return (
    <AppScreen appBar={{ title: 'MainPage' }}>
      <div>
        MainPage
        <button onClick={handleLinkDetailPage}>Go to detail page</button>
      </div>
    </AppScreen>
  );
};

export default MainPage;
