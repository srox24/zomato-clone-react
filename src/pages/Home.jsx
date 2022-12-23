import React, { useState } from "react";
import Delivery from "../components/Delivery";
import DiningOut from "../components/DiningOut";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NightLife from "../components/NightLife";
import Tabs from "../components/Tabs";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {getScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery/>;

    case "Dining Out":
      return <DiningOut/>;

    case "Nightlife":
      return <NightLife/>
    default:
      return <Delivery/>
  }
};

export default Home;
