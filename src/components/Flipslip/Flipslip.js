/* eslint-disable */
import React from "react";
import "./styles/FlipCard.css";
import "./styles/FlipCardButton.css";
import "./styles/FlipCardClick.css";
import "./styles/FlipCardHover.css";
import "./styles/Slider.css";
import "./styles/FButton.css";

const FButton = ({ buttonText, disabled, id }) => {
  id = "." + id;

  function handleClick() {
    document.querySelector(`${id} .flip-card-inner`).classList.toggle("flipped");
  }

  return (
    <button disabled={disabled} type="submit" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

const FlipCard = ({
                    id,
                    title_front,
                    text_front,
                    image_front,
                    altText_front,
                    title_back,
                    text_back,
                    image_back,
                    altText_back,
                    button_front_text,
                    button_front_disabled,
                    button_back_text,
                    button_back_disabled,
                    children
                  }) => {
  const incButton = (button_text, id, disabled) => {
    if (button_text) {
      return (
        <React.Fragment>
          <FButton buttonText={button_text} disabled={disabled} id={id} />
        </React.Fragment>);
    }
  };

  const renderMe = (property) => {
    return property !== undefined && property;
  };

  const renderText = (textArray) => {
    return textArray.map((text) => <p key={text}>{text}</p>);
  };

  const cardContent = (
    image,
    altText,
    title,
    text,
    button_text,
    disabled,
    id,
    child
  ) => {
    if (image) {
      return (
        <React.Fragment>
          <img src={image} alt={altText} width="100%" />
          {incButton(button_text, id, disabled)}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {renderMe(<h2>{title}</h2>)}
          {renderText(text)}
          {/* {text.map(function (t) { */}
          {/*    return <p>{t}</p> */}
          {/* })} */}
          {child}
          {incButton(button_text, id, disabled)}
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {cardContent(
            image_front,
            altText_front,
            title_front,
            text_front,
            button_front_text,
            button_front_disabled,
            id,
            children
          )}
        </div>
        <div className="flip-card-back">
          {cardContent(
            image_back,
            altText_back,
            title_back,
            text_back,
            button_back_text,
            button_back_disabled,
            id
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export const FlipCardButton = ({
                                 id,
                                 title_front,
                                 text_front,
                                 image_front,
                                 altText_front,
                                 title_back,
                                 text_back,
                                 image_back,
                                 altText_back,
                                 button_front_text,
                                 button_front_disabled,
                                 button_back_text,
                                 button_back_disabled,
                                 children
                               }) => {
  const newId = id + ` flip-card-button`;

  return (
    // <div className="flip-orig-card-button">
    <React.Fragment>
      <div className={newId}>
        <FlipCard
          id={id}
          title_front={title_front}
          text_front={text_front}
          title_back={title_back}
          text_back={text_back}
          image_front={image_front}
          altText_front={altText_front}
          image_back={image_back}
          altText_back={altText_back}
          button_front_text={button_front_text}
          button_back_text={button_back_text}
          button_front_disabled={button_front_disabled}
          button_back_disabled={button_back_disabled}
        >
          {children}
        </FlipCard>
      </div>
    </React.Fragment>
  );
};

export const FlipCardClick = ({
                                id,
                                title_front,
                                text_front,
                                image_front,
                                altText_front,
                                title_back,
                                text_back,
                                image_back,
                                altText_back,
                                children
                                // button_front_text, button_front_disabled,
                                // button_back_text, button_back_disabled
                              }) => {
  const newId = id + ` flip-card-click`;

  function handleClick() {
    const nId = "." + id;

    // document.querySelector('.flip-orig-card').addEventListener('click', function () {
    // document.querySelector('.flip-orig-card-click .flip-orig-card-inner').classList.toggle('flipped');
    document
      .querySelector(`${nId} .flip-card-inner`)
      .classList.toggle("flipped");
    // });
    // console.log(`You flipped me!`)
  }

  return (
    <React.Fragment>
      <div className={newId} onClick={handleClick}>
        <FlipCard
          id={id}
          title_front={title_front}
          text_front={text_front}
          title_back={title_back}
          text_back={text_back}
          image_front={image_front}
          altText_front={altText_front}
          image_back={image_back}
          altText_back={altText_back}
        >
          {children}
        </FlipCard>
      </div>
    </React.Fragment>
  );
};

export const FlipCardHover = ({
                                id,
                                title_front,
                                text_front,
                                image_front,
                                altText_front,
                                title_back,
                                text_back,
                                image_back,
                                altText_back,
                                children
                              }) => {
  return (
    <React.Fragment>
      <div className="flip-card-hover">
        <FlipCard
          id={id}
          title_front={title_front}
          text_front={text_front}
          title_back={title_back}
          text_back={text_back}
          image_front={image_front}
          altText_front={altText_front}
          image_back={image_back}
          altText_back={altText_back}
        >
          {children}
        </FlipCard>
      </div>
    </React.Fragment>
  );
};

export const Slider = ({ id, children }) => {
  // const newId = id + ` flip-orig-card-button`;

  return (
    <React.Fragment>
      <div className="mySlider" id={id}>
        {children}
      </div>
    </React.Fragment>
  );
};

