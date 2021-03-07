import React, { Fragment, useState } from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import { NavLink as RRNavLink, useLocation } from "react-router-dom"

interface Item {
   label: string
   path: string
   icon: string
   children?: Item[]
}

// TODO: Remove sample component routes
const items: Item[] = [
   {
      label: "Overview",
      path: "/",
      icon: "fa-tachometer-alt",
   },
   {
      label: "Web",
      path: "/products",
      icon: "fa-globe",
   },
   {
      label: "Events",
      path: "/events",
      icon: "fa-calendar",
      children: [
         {
            label: "Events list",
            path: "/events/list",
            icon: "fa-list",
         },
         {
            label: "Attendees",
            path: "/events/attendees",
            icon: "fa-users",
         },
         {
            label: "Sessions",
            path: "/events/sessions",
            icon: "fa-clock",
         },
         {
            label: "Presenters",
            path: "/events/presenters",
            icon: "fa-comment",
         },
      ],
   },

   {
      label: "Admin",
      path: "/admin",
      icon: "fa-users",
      children: [
         {
            label: "Products",
            path: "/admin/products",
            icon: "fa-shopping-cart",
         },
         {
            label: "Warehouse",
            path: "/admin/orders",
            icon: "fa-archive",
         },
      ],
   },
   {
      label: "Data Packs",
      path: "/data-packs",
      icon: "fa-database",
      children: [
         {
            label: "Data Insights",
            path: "/data-packs/data-insights",
            icon: "fa-eye",
         },
         {
            label: "Market Overview",
            path: "/data-packs/market-overview",
            icon: "fa-filter",
         },
         {
            label: "Compliance & Governance",
            path: "/data-packs/compliance",
            icon: "fa-building",
         },
      ],
   },
]

const LeftMenu: React.FC = () => {
   let [leftMenuVisibility, setLeftMenuVisibility] = useState(false)

   function changeLeftMenuVisibility() {
      setLeftMenuVisibility(!leftMenuVisibility)
   }

   function getCollapseClass() {
      return leftMenuVisibility ? "" : "collapsed"
   }
   const location = useLocation()
   return (
      <Fragment>
         <div className="toggle-area">
            <button
               className="btn btn-primary toggle-button"
               onClick={() => changeLeftMenuVisibility()}
            >
               <i className="fas fa-bolt"></i>
            </button>
         </div>
         <Nav
            className={`navbar-nav theme-color-secondary sidebar accordion ${getCollapseClass()}`}
            id="collapseMenu"
            vertical
         >
            <a
               className="sidebar-brand d-flex align-items-center justify-content-center"
               href="index.html"
            >
               <div className="sidebar-brand-icon icon-green rotate-n-15">
                  <i className="fas fa-bolt"></i>
               </div>
               <div className="sidebar-brand-text mx-3">
                  <img src="./assets/img/logo.png" alt="" />
               </div>
            </a>
            {items.map((item, index) => (
               <NavItem
                  key={index}
                  className={
                     item.children && location.pathname.startsWith(item.path)
                        ? "open"
                        : void 0
                  }
               >
                  <NavLink
                     tag={RRNavLink}
                     className="align-items-center"
                     to={item.path}
                     exact
                  >
                     {item.icon ? (
                        <i className={"fas fa fab " + item.icon}></i>
                     ) : null}
                     <span className="text-uppercase">{item.label}</span>
                  </NavLink>
                  {item.children && location.pathname.startsWith(item.path) && (
                     <Nav vertical className="theme-color-primary">
                        {item.children.map((item, index) => (
                           <NavItem key={index}>
                              <NavLink
                                 tag={RRNavLink}
                                 className="align-items-center"
                                 to={item.path}
                                 exact
                              >
                                 {item.icon ? (
                                    <i
                                       className={"fas fa fab " + item.icon}
                                    ></i>
                                 ) : null}
                                 <span className="text-uppercase">
                                    {item.label}
                                 </span>
                              </NavLink>
                           </NavItem>
                        ))}
                     </Nav>
                  )}
               </NavItem>
            ))}
         </Nav>
      </Fragment>
   )
}

export default LeftMenu
