export const routes = [
  {
    routeName: "Home",
    routeLink: "/home",
    component: Home,
    subRoutes: [],
    type: RouteTypes.Route,
    showInSideNav: true,
  },
  {
    routeName: "Stock Transfer Request",
    routeLink: "/stockTransferRequest",
    component: StockTransferRequest,
    subRoutes: [],
    type: RouteTypes.Route,
    showInSideNav: true,
  },
  {
    routeName: "Create Consignment",
    routeLink: "/createConsignment",
    component: CreateRoute,
    subRoutes: [],
    type: RouteTypes.Route,
    showInSideNav: true,
  },
  {
    routeName: "View All Consignment",
    routeLink: "/viewAllConsignments",
    component: ViewAllConsignment,
    subRoutes: [],
    type: RouteTypes.Route,
    showInSideNav: true,
  },
  {
    routeName: "Product Type",
    routeLink: "",
    component: <></>,
    subRoutes: [
      {
        routeName: "All Product Types",
        routeLink: "/viewAllConsignments",
        component: ViewAllConsignment,
        subRoutes: [],
        type: RouteTypes.Route,
        showInSideNav: true,
      },
      {
        routeName: "New Product Type",
        routeLink: "/viewAllConsignments",
        component: ViewAllConsignment,
        subRoutes: [],
        type: RouteTypes.Route,
        showInSideNav: true,
      },
    ],
    type: RouteTypes.SubRoute,
    showInSideNav: true,
  },
];

import StockTransferRequest from "./Container/StockTansferRequest";
import ViewInwardRequest from "./Container/ViewInwardRequest";
import ViewAllConsignment from "./Container/ViewAllConsignments";
import ViewDispatchRequest from "./Container/ViewDispatchRequest";
import CapacityManagement from "./Container/CapacityManagement";
import CreateRoute from "./Container/CreateRoute/createRoute";
import SelectSTR from "./Container/SelectSTR";
import ViewAllTrip from "./Container/ViewAllTrips";
import Upload from "./Container/Upload/uploadDocument";
// import Document from "./Container/Documents";
import RoutePlan from "./Container/RoutePlan";
import Home from "./Container/Home/home";

export const routes = [
  {
    routeLink: "/home",
    component: Home,
    routeName: "Home",
    showInSideNav: true,
  },
  {
    routeLink: "/stockTransferRequest",
    component: StockTransferRequest,
    routeName: "Stock Transfer Request",
    showInSideNav: true,
  },
  {
    routeLink: "/createConsignment",
    component: CreateRoute,
    routeName: "Create Consignment",
    showInSideNav: true,
  },
  {
    routeLink: "/viewAllConsignments",
    component: ViewAllConsignment,
    routeName: "View All Consignment",
    showInSideNav: true,
  },
  {
    routeLink: "/viewAllTrips",
    component: ViewAllTrip,
    routeName: "View All Trips",
    showInSideNav: true,
  },
  {
    routeLink: "/viewDispatchRequest",
    component: ViewDispatchRequest,
    routeName: "View Dispatch Request",
    showInSideNav: true,
  },
  {
    routeLink: "/viewInwardRequest",
    component: ViewInwardRequest,
    routeName: "View Inward Requests",
    showInSideNav: true,
  },
  // {
  //   routeLink: "/documents",
  //   component: Document,
  //   routeName: "Documents",
  //   showInSideNav: true,
  // },
  {
    routeLink: "/capacityManagement",
    component: CapacityManagement,
    routeName: "Capacity Management",
    showInSideNav: true,
  },
  {
    routeLink: "/stockTransferRequest/upload/:id",
    component: Upload,
    showInSideNav: false,
  },
  {
    routeLink: "/createConsignment/selectSTR/routePlan",
    component: RoutePlan,
    showInSideNav: false,
  },
  {
    routeLink: "/createConsignment/selectSTR",
    component: SelectSTR,
    showInSideNav: false,
  },
];

// app.js content of LMS UI

import React, { useState } from "react";
import "./App.scss";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import AppContainer from "./AppContainer";
import { Layout, Menu, Breadcrumb } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
// import { routeLabels } from "./util";

import { setAuthToken, setBaseUrl, setNamespaceHeader } from "./axios.config";
import { routes } from "./routes";

const { Header, Content, Footer, Sider } = Layout;

const App = function (props) {
  setAuthToken(props?.value?.token);
  setBaseUrl(props?.value?.env);
  setNamespaceHeader(props?.value?.namespace);

  const location = useLocation();
  const deafultselectedLink = location.pathname.slice(1);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapse) => {
    setCollapsed(collapse);
  };
  // if (!props?.value?.underShell) {
  //   return (
  //     <Layout style={{ minHeight: "100vh" }}>
  //       <Sider
  //         collapsible
  //         collapsed={collapsed}
  //         onCollapse={onCollapse}
  //         style={{
  //           borderRight: 0,
  //           backgroundColor: "#f5f7f9",
  //           color: "rgba(0,0,0,.45)",
  //           boxShadow: "0px 6px 30px rgb(0 0 0 / 16%)",
  //         }}
  //       >
  //         <div className="logo">
  //           <img
  //             className="logo-img"
  //             alt="logo"
  //             width={collapsed ? 70 : 138}
  //             src="https://www.captainfresh.in/assets/images/captainfresh-logo-red.svg"
  //           />
  //         </div>
  //         <Menu
  //           // theme="dark"
  //           defaultSelectedKeys={[deafultselectedLink]}
  //           mode="inline"
  //         >
  //           {routes.map((route) => {
  //             if (route.routeName) {
  //               return (
  //                 <Menu.Item key={route.routeLink} icon={<WalletOutlined />}>
  //                   <Link key={route.routeLink} to={route.routeLink}>
  //                     {route.routeName}
  //                   </Link>
  //                 </Menu.Item>
  //               );
  //             }
  //             // if (route.routeName === "Product Type") {
  //             //   return <h1>sub routes</h1>;
  //             // }
  //           })}
  //         </Menu>
  //       </Sider>
  //       <Layout className="site-layout">
  //         <Header
  //           className="site-layout-background"
  //           style={{ padding: 0, textAlign: "center" }}
  //         >
  //           {/* <h1>{routeLabels[location.pathname]}</h1> */}
  //         </Header>
  //         <Content style={{ margin: "0 16px" }}>
  //           <Breadcrumb style={{ margin: "16px 0" }}>
  //             <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
  //           </Breadcrumb>
  //           <div
  //             className="site-layout-background"
  //             style={{ padding: 24, minHeight: 360 }}
  //           >
  //             <Routes>
  //               <Route path="/" element={<Navigate replace to="/home" />} />
  //               {routes.map((route) => {
  //                 return (
  //                   <Route
  //                     key={route.routeLink}
  //                     path={route.routeLink}
  //                     element={<route.component />}
  //                   />
  //                 );
  //               })}
  //             </Routes>
  //           </div>
  //         </Content>
  //         <Footer style={{ textAlign: "center" }}>Captain Fresh ©2021</Footer>
  //       </Layout>
  //     </Layout>
  //   );
  // } else {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<Navigate replace to="/home" />} />
  //       {routes.map((route) => {
  //         return (
  //           <Route
  //             key={route.routeLink}
  //             path={route.routeLink}
  //             element={<route.component />}
  //           />
  //         );
  //       })}
  //     </Routes>
  //   );
  // }
  return <AppContainer {...props} />;
};

export default App;
