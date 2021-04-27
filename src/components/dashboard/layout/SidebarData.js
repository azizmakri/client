import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import PermMediaIcon from "@material-ui/icons/PermMedia";
export const SidebarData = [
  {
    title: "Liste Metiers",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Ajout Metiers",
    icon: <MailIcon />,
    link: "/ajoutmet",
  },
  {
    title: "Liste Spesialite",
    icon: <AssessmentIcon />,
    link: "/listspe",
  },
  {
    title: "Ajout Spesialite",
    icon: <DashboardIcon />,
    link: "/ajoutspe",
  },
  {
    title: "Liste Facultés",
    icon: <GroupIcon />,
    link: "/list",
  },
  {
    title: "Ajout Faculté",
    icon: <PermMediaIcon />,
    link: "/ajoutfac",
  },
];
