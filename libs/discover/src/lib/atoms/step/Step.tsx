import React from "react";
import { StepI } from "./Step.models";
import WpStep from "./Step.style";
import { returnIconStep } from "./Step.utils";

export const Step = ({ type, title, subtitle, text, urlIcon, highlightColor }: StepI) => {
  return (
    <WpStep
      type={type}
      subtitle={subtitle}
      highlightColor={highlightColor}
      className="step"
    >
      <div className="step__title">
        <h4>{title}</h4>
        {
          subtitle && <p>{subtitle}</p>
        }
      </div>
      <div className="step__icon">
        {returnIconStep({ type, urlIcon, highlightColor })}
      </div>
      {
        type === 'day' ?

          <div  className='step__text'>
            <hr />
            <p
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </div>
          :
          <p
            dangerouslySetInnerHTML={{
              __html: text,
            }}
            className='step__text'
          />
      }

    </WpStep>
  )
};

export default Step;
