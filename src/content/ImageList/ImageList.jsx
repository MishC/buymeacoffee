import React, { useState } from "react";
import "./imageList.css";
import description from "./images_list/description.js";

//importing images from ./image_list
const imageNames = [];
const images = require.context("./images_list", false, /\.(png|jpe?g|svg)$/);
images.keys().forEach((imageName) => {
  imageNames.push(imageName.replace("./", ""));
});
console.log(imageNames);

const ImageList = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [filteredImages, setFilteredImages] = useState([]);
  const [imageText, setImageText] = useState([]);
  //console.log(description.creators[0]);
  const names = [
    { id: 1, name: "Video creators" },
    { id: 2, name: "Artists" },
    { id: 3, name: "Writers" },
    { id: 4, name: "Musicians" },
    { id: 5, name: "Developers" },
    { id: 6, name: "Gaming" },

    { id: 7, name: "Podcasters" },
    { id: 8, name: "Community" },
  ];

  const handleButtonClick = (id, imageNames) => {
    setSelectedId(id);
    setFilteredImages(
      imageNames.filter((image) =>
        image.includes("@" + String(selectedId) + ".jpg")
      )
    );
  };

  return (
    <div className="imageList">
      <div className="btn-row">
        {names.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => handleButtonClick(id, imageNames)}
            className={`${selectedId === id ? " active" : ""}`}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="photos">
        {filteredImages.length > 0
          ? filteredImages.map((imageName, index) => (
              <figure key={imageName}>
                <img
                  src={require(`./images_list/${imageName}`)}
                  alt={imageName}
                />
                <figcaption>
                  {description.creators[selectedId].text[index]}
                </figcaption>
              </figure>
            ))
          : imageNames
              .filter((imageName) => imageName.includes("@1.jpg"))
              .map((imageName, index) => (
                <figure key={imageName}>
                  <img
                    key={index}
                    src={require(`./images_list/${imageName}`)}
                    alt={imageName}
                  />

                  <figcaption>{description.creators[0].text[index]}</figcaption>
                </figure>
              ))}
      </div>
      <div></div>
    </div>
  );
};

export default ImageList;
