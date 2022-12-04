import React from 'react';
import { OtherItemsWrapper, OtherItemsContentWrapper, OtherItem } from './styled';

interface Props {
  userName: string;
  id: string;
}

const OtherItems: React.FC<Props> = ({ userName, id }) => {
  return (
    <OtherItemsWrapper>
      <p className="title">Other Items by {userName}</p>
      <OtherItemsContentWrapper>
        {Array.from({ length: 20 }).map((_, idx) => (
          <OtherItem key={idx}>
            <div>
              <img src={'https://picsum.photos/800/800/?id=25140667'} alt="mock-img" width={'100%'} height={'100%'} />
            </div>
            <p>Ran</p>
            <p>
              <strong>£41.00</strong>
            </p>
          </OtherItem>
        ))}
      </OtherItemsContentWrapper>
    </OtherItemsWrapper>
  );
};

export default OtherItems;
