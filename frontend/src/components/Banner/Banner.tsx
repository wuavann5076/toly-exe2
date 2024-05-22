import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import TerrainIcon from "@mui/icons-material/Terrain";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import WaterIcon from "@mui/icons-material/Water";

const categories = [
  {
    name: "Beach",
    icon: (
      <span className="icon-category">
        <WaterIcon />
      </span>
    ),
  },
  {
    name: "Mountain",
    icon: (
      <span className="icon-category">
        <TerrainIcon />
      </span>
    ),
  },
  {
    name: "Food",
    icon: (
      <span className="icon-category">
        <FastfoodIcon />
      </span>
    ),
  },
  {
    name: "Bar",
    icon: (
      <span className="icon-category">
        <LocalBarIcon />
      </span>
    ),
  },
  {
    name: "Camping",
    icon: (
      <span className="icon-category">
        <BeachAccessIcon />
      </span>
    ),
  },
];

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <h1 className="banner-heading">Unleash your journey's potential.</h1>
      <div className="search-bar">
        <Input
          size="large"
          placeholder="Search destinations, hotels"
          prefix={<SearchOutlined />}
        />
        <Button size="large">Search</Button>
      </div>
      <h1 className="top-categories-heading">Top categories</h1>

      <div className="top-categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            {category.icon}
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
