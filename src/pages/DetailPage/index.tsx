import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React from 'react';
import { useFlow } from 'src/utils/stackflow';

const DetailPage: ActivityComponentType = () => {
  const { pop } = useFlow();

  const handleBackToMainPage = () => {
    pop();
  };

  return (
    <AppScreen appBar={{ title: 'DetailPage' }}>
      <div>
        DetailPage
        <button onClick={handleBackToMainPage}>Back to main page</button>
      </div>
    </AppScreen>
  );
};

export default DetailPage;
