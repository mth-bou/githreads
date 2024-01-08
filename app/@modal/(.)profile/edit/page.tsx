import React from 'react';
import { getUserEdit } from "@/src/query/user.query";
import { editProfile } from "@/app/profile/edit/edit-profile.action";
import EditProfileModal from "@/app/@modal/(.)profile/edit/EditProfileModal";

const page = async () => {

    const user = await getUserEdit();

    return (
        <EditProfileModal user={user} editProfile={editProfile} />
    );
};

export default page;
