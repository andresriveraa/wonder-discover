import Image from 'next/image';
import React from 'react';
import WpStepByStep from './StepByStep.style';
import { Step } from '@discover';
import { data } from './StepByStep.utils';
import { StepI } from 'libs/discover/src/lib/atoms/step/Step.models';

const StepByStep = () => {
  return (
    <WpStepByStep>
      <p>
        Wonder Travel es la plataforma que conecta viajeros con anfitriones en
        lugares mágicos de Colombia
      </p>
      <Image
        alt=""
        role="none"
        src="/assets/images/steps/hero-steps.svg"
        width={300}
        height={78}
      />
      <Image
        alt=""
        role="none"
        src="/assets/images/steps/person-hiking.svg"
        width={300}
        height={78}
      />

      <div className="steps__header">
        <h2>La travesía:</h2>
        <div className="header__name">
          <p>Wonder Travel</p>
          <Image
            alt=""
            role="none"
            src="/assets/images/hero/compass.svg"
            width={300}
            height={78}
          />
        </div>
      </div>
      <hr /> 

      <div className="steps__list">

        {
          data.map(({type, title, subtitle, text, urlIcon, highlightColor } : StepI, i) => 
            <Step 
              key={i}
              type={type}
              title={title}
              subtitle={subtitle}
              text={text}
              urlIcon={urlIcon}
              highlightColor={highlightColor}
            />)
          
        }

      </div>
      <p className="steps__text-end">Regreso a <br /> ciudad de origen</p>

    </WpStepByStep>
  );
};

export default StepByStep;
