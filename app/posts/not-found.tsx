import React from 'react';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertTriangle} from "lucide-react";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

const NotFound = () => {
    return (
        <div>
            <Alert className="my-8">
                <AlertTriangle />
                <AlertTitle className="ml-4">Not found</AlertTitle>
                <AlertDescription className="ml-4">
                    Post not found.
                </AlertDescription>
                <Link className={buttonVariants({variant: "link"})} href="/">
                    Home
                </Link>
            </Alert>
        </div>
    );
};

export default NotFound;
