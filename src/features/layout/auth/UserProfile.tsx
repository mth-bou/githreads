import React from 'react';
import {getAuthSession} from "@/lib/auth";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {User2} from "lucide-react";
import LogoutButton from "@/src/features/layout/auth/LogoutButton";
import DropdownMenuItemLogout from "@/src/features/layout/auth/LogoutButton";

const UserProfile = async () => {
    const session = await getAuthSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                    {session?.user.name ?? ""}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/profile">
                        <User2 className="mr-2 h-4 w-4" />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItemLogout />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserProfile;
