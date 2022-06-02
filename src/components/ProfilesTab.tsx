import React from "react";
import { Flex } from "./styled";
import ProfileCard from "./ProfileCard";

function ProfilesTab() {
  return (
    <Flex gap="20px" justifyContent="space-around" flexWrap="wrap" my={4}>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </Flex>
  );
}

export default ProfilesTab;
