import React, { useEffect, useState } from "react";
import { DocumentTitle } from "../../components";

const Profile: React.FC = () => {
  DocumentTitle("Profile | FindMe", true);

  return <div className="mt-10">Profile</div>;
};

export default Profile;
