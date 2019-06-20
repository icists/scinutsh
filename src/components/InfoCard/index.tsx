import React from 'react';

interface IInfoCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const InfoCard: React.FC<IInfoCardProps> = (props: IInfoCardProps) => (
  <div className="info-card">
    <h3> {props.title} </h3>
    <div className="info-card-image">
      <img src={props.imageSrc}/>
    </div>
    <div className="info-card-description">
      <p>
        {props.description}
      </p>
    </div>
  </div>
)

export default InfoCard;