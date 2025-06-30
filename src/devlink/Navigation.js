"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav", "accent-primary-nav")}
      tag="div"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nav-container")}
        tag="div"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="400"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: true,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-left")}
          id={_utils.cx(
            _styles,
            "w-node-f008c958-594b-6ac7-52d5-0265a262727e-a262727c"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-logo")}
            id={_utils.cx(
              _styles,
              "w-node-f008c958-594b-6ac7-52d5-0265a262727f-a262727c"
            )}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-logo-icon")}
              tag="div"
            >
              <_Builtin.DOM
                tag="svg"
                width="100%"
                height="100%"
                viewBox="0 0 33 33"
                preserveAspectRatio="xMidYMid meet"
              >
                <_Builtin.DOM
                  tag="path"
                  d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"
                  fill="currentColor"
                />
              </_Builtin.DOM>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "paragraph-lg",
                "utility-margin-bottom-0"
              )}
              tag="div"
            >
              {"AstroNum"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu")}
            id={_utils.cx(
              _styles,
              "w-node-f008c958-594b-6ac7-52d5-0265a2627285-a262727c"
            )}
            tag="nav"
            role="navigation"
          >
            <_Builtin.List
              className={_utils.cx(_styles, "nav-menu-list")}
              tag="ul"
              role="list"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav-menu-dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "nav-link-on-accent-primary"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Features"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(
                      _styles,
                      "nav-mega-menu-dropdown-list"
                    )}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "mega-nav-dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "grid-layout",
                          "desktop-3-column",
                          "tablet-1-column",
                          "grid-gap-sm",
                          "utility-margin-bottom-0"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "w-node-f008c958-594b-6ac7-52d5-0265a2627290-a262727c"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_454d89d0-877e-ab01-352f-70c94d562d6a-4d562d54"
                          )}
                        >
                          <_Builtin.Grid
                            className={_utils.cx(
                              _styles,
                              "grid-layout",
                              "desktop-3-column",
                              "tablet-1-column",
                              "grid-gap-sm"
                            )}
                          >
                            <_Builtin.Block tag="div">
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Astro tools"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a2627296-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a262729b-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562d75-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Live chat"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Instant answers from your expert."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a26272a1-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a26272a6-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562d80-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Numerology"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Your numbers, decoded fast."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a26272ac-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a26272b1-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562d8b-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Compatibility"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Check your cosmic match now."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-f008c958-594b-6ac7-52d5-0265a26272b7-a262727c"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Quick picks"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a26272bb-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a26272c0-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562d9a-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Ask now"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Chat live with your guide."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a26272c6-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a26272cb-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562da5-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Top questions"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Browse trending topics."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a26272d1-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a26272d6-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562db0-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Year ahead"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"See your 12-month forecast."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-f008c958-594b-6ac7-52d5-0265a26272dc-a262727c"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"More to explore"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a26272e0-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a26272e5-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562dbf-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Career tips"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Find your work superpower."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a26272eb-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a26272f0-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562dca-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Love insight"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Unlock your relationship vibe."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-f008c958-594b-6ac7-52d5-0265a26272f6-a262727c"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-f008c958-594b-6ac7-52d5-0265a26272fb-a262727c"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_454d89d0-877e-ab01-352f-70c94d562dd5-4d562d54"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"My numbers"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Reveal your unique code."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "flex-horizontal",
                            "w-node-f008c958-594b-6ac7-52d5-0265a2627301-a262727c"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_454d89d0-877e-ab01-352f-70c94d562ddb-4d562d54"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "card-link",
                              "inverse-card-link",
                              "flex-child-expand"
                            )}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "card-body")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "h3-heading")}
                                tag="div"
                              >
                                {"Chat live with your astro guide"}
                              </_Builtin.Block>
                              <_Builtin.Paragraph
                                className={_utils.cx(
                                  _styles,
                                  "paragraph-sm",
                                  "utility-text-inverse-secondary"
                                )}
                              >
                                {"Get real-time, personal guidance"}
                                {"—"}
                                {"no bots, just wisdom."}
                              </_Builtin.Paragraph>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "utility-margin-top-auto"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "button-group")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-button",
                                      "secondary-text-button",
                                      "text-button-on-accent-primary"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Chat now"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "button-icon"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "nav-link",
                    "nav-link-on-accent-primary"
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"How it works"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "nav-link",
                    "nav-link-on-accent-primary"
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Blog"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav-menu-dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "nav-link-on-accent-primary"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Help"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav-menu-dropdown-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "nav-menu-dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "flex-vertical",
                          "utility-margin-bottom-0"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "utility-margin-bottom-0"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-label")}
                              tag="div"
                            >
                              {"FAQ"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "utility-margin-bottom-0"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-label")}
                              tag="div"
                            >
                              {"Contact"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-right")}
          id={_utils.cx(
            _styles,
            "w-node-f008c958-594b-6ac7-52d5-0265a262732b-a262727c"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "button-group",
              "utility-margin-top-0"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "button",
                "primary-button-on-accent-primary"
              )}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button-label")}
                tag="div"
              >
                {"Ask now"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "nav-mobile-menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "icon", "icon-on-accent-primary")}
            tag="div"
          >
            <_Builtin.DOM
              tag="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <_Builtin.DOM
                tag="g"
                class="nc-icon-wrapper"
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="1.5"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              >
                <_Builtin.DOM
                  tag="line"
                  x1="1"
                  y1="12"
                  x2="23"
                  y2="12"
                  stroke="currentColor"
                />
                <_Builtin.DOM tag="line" x1="1" y1="5" x2="23" y2="5" />
                <_Builtin.DOM tag="line" x1="1" y1="19" x2="23" y2="19" />
              </_Builtin.DOM>
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
