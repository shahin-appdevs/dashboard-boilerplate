"use client";
import React from "react";
import Stats from "../_components/homepage/Stats";
import AdSliders from "../_components/homepage/AdSliders/AdSliders";
import TransactionTable from "../_components/homepage/TransactionTable/TransactionTable";
import VirtualCardSlider from "../_components/homepage/VirtualCardSlider/VirtualCardSlider";

const DashboardHome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 lg:grid-6">
        <div className="col-span-1 2xl:col-span-2">
          <Stats />
          <TransactionTable />
        </div>
        <div className="2xl:col-span-1 hidden 2xl:block">
          <div className="h-screen">
            <AdSliders />
            <VirtualCardSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
