import React from "react";
import { Link } from "react-router-dom";

const Images = () => {
  const array = [
    {
      image: `https://i.pinimg.com/originals/7a/da/5d/7ada5ddd0d9b2e247a7a41382d4e7a05.png`,
      title: `HTML`,
      date: {
        createdAt: `20/10/2021`,
        id: "jkwfiowej",
      },
    },
    {
      image: `https://im0-tub-com.yandex.net/i?id=33c413e451627d30c268003771d59a04&n=13`,
      title: `React`,
      date: {
        createdAt: `20/10/2021`,
        id: "jkwfiowej",
      },
    },
    {
      image: `https://e7.pngegg.com/pngimages/606/516/png-clipart-cascading-style-sheets-computer-icons-css3-world-wide-web-text-logo.png`,
      title: `CSS`,
      date: {
        createdAt: `20/10/2021`,
        id: "jkwfiowej",
      },
    },
    {
      image: `https://im0-tub-com.yandex.net/i?id=9b126164183505bad8f20e7602a281f0&n=13`,
      title: `Javascript`,
      date: {
        createdAt: `20/10/2021`,
        id: "jkwfiowej",
      },
    },
    {
      image: `https://im0-tub-com.yandex.net/i?id=5f2540df585a2d3ad5d726c6485c32dc&n=13`,
      title: `Jquery`,
      date: {
        createdAt: `20/10/2021`,
        id: "jkwfiowej",
      },
    },
  ];

  return (
    <div>
      {array.map((item) => (
        <Link to={{ pathname: "/info", state: item }}>
          <img
            src={item.image}
            alt=""
            width={100}
            height={100}
            style={{ marginRight: 50 }}
          />
        </Link>
      ))}
    </div>
  );
};

export default Images;
