import React from "react";
import { Head } from "./styles";
import { Tabs, TabList, Tab, Divider } from "@chakra-ui/core";
function Header() {
  return (
    <>
      <Head>
        <img src="/myanimelist.png" alt="logo" />
        <Tabs variant="soft-rounded" defaultIndex={0}>
          <TabList>
            <Tab
              _selected={{ color: "white", bg: "green.500" }}
              mr={"1em"}
              _hover={{ color: "#e1e1e6" }}
            >
              Current Watching
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.500" }}
              mr={"1em"}
              _hover={{ color: "#e1e1e6" }}
            >
              Completed
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "yellow.500" }}
              mr={"1em"}
              _hover={{ color: "#e1e1e6" }}
            >
              On-Load
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "red.500" }}
              _hover={{ color: "#e1e1e6" }}
            >
              Dropped
            </Tab>
          </TabList>
        </Tabs>
      </Head>

      <Divider
        orientation="horizontal"
        style={{ marginTop: 30, marginBottom: 75 }}
      />
    </>
  );
}

export default Header;
