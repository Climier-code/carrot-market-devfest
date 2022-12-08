import React from 'react';
import { EllipsisBox } from 'src/components/common/elements';
import { UserOtherProductInterface } from 'src/schemas/Product';
import { OtherItemsWrapper, OtherItemsContentWrapper, OtherItem, OtherItemImageWrapper } from './styled';

interface Props {
  userName: string;
  other: UserOtherProductInterface[];
}

const OtherItems: React.FC<Props> = ({ userName, other }) => {
  return (
    <OtherItemsWrapper>
      <p className="title">{userName}님의 판매 상품</p>
      <OtherItemsContentWrapper>
        {other.map((otherProduct) => (
          <OtherItem key={otherProduct.name}>
            <OtherItemImageWrapper>
              <div>
                <img src={otherProduct.img} alt="otherProductImg" width={'100%'} height={'100%'} />
              </div>
            </OtherItemImageWrapper>

            <EllipsisBox>
              <p>{otherProduct.name}</p>
            </EllipsisBox>

            <p>
              <strong>{otherProduct.price}원</strong>
            </p>
          </OtherItem>
        ))}
      </OtherItemsContentWrapper>
    </OtherItemsWrapper>
  );
};

export default OtherItems;
