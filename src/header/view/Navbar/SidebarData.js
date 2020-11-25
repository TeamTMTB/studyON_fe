import React from "react";
import * as AiIcons from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";

export const SidebarData = [
  {
    title: "HOME",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "ON SHOP",
    path: "/shop",
    icon: <AiIcons.AiFillShop />,
    cName: "nav-text",
  },
  {
    title: "USER GUIDE",
    path: "/about",
    icon: <AiIcons.AiFillBook />,
    cName: "nav-text",
  },
  {
    title: "SERVICE",
    // path: "/About",
    icon: <RiCustomerService2Fill />,
    cName: "nav-text",
  },
];

export const MenuData = [
  {
    name: "ROOM",
    icon1: <BsFillPeopleFill />,
    cName1: "nav-text1",
  },
];
