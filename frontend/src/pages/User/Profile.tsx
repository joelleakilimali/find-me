import React from "react";
import { Image } from "semantic-ui-react";
import { DocumentTitle, Postcomponent, Slidebar } from "../../components";

const Profile: React.FC = () => {
  DocumentTitle("Profile | FindMe", true);

  return <Postcomponent />;
};

export default Profile;
