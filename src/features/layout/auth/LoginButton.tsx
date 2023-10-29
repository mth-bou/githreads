"use client";

import React, {useTransition} from 'react';
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { Loader } from "@/components/ui/loader";
import {Button} from "@/components/ui/button";

const LoginButton = () => {

    const [isPending, startTransition] = useTransition();

    return (
        <Button onClick={() => {
            startTransition(() => signIn());
        }}>
            {isPending ? (
                <Loader className="mr-2 h-4 w-4" />
            ) : (
                <LogIn className="mr-2 h-4 w-4" />
            )}
            Login
        </Button>
    );
};

export default LoginButton;

