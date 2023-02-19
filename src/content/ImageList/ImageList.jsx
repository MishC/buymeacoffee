import React, { useState } from "react";
import "./imageList.css";

//importing images from ./image_list
const imageNames = [];
const images = require.context("./images_list", false, /\.(png|jpe?g|svg)$/);

images.keys().forEach((imageName) => {
  imageNames.push(imageName.replace("./", ""));
});
console.log(imageNames);

const ImageList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  console.log(filteredImages.length);
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

  const handleButtonClick = (id) => {
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
          <button key={id} onClick={() => handleButtonClick(id)}>
            {name}
          </button>
        ))}
      </div>
      <div className="photos">
        {filteredImages.length > 0
          ? filteredImages.map((imageName) => (
              <img
                key={imageName}
                src={require(`./images_list/${imageName}`)}
                alt={imageName}
              />
            ))
          : imageNames
              .filter((imageName) => imageName.includes("@1.jpg"))
              .map((imageName) => (
                <img
                  key={imageName}
                  src={require(`./images_list/${imageName}`)}
                  alt={imageName}
                />
              ))}
      </div>
      <div></div>
    </div>
  );
};

export default ImageList;
