import React from "react";
import { useParams } from "react-router-dom";

function MemberDetail() {
  const { memberId } = useParams();

  //   const params = useParams();
  //   const memberId = params.memberId;

  return <div>MembersDetail {memberId}</div>;
}

export default MemberDetail;
