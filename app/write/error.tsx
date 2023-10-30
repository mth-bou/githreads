'use client';

import { useEffect } from "react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertTriangle} from "lucide-react";

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.log(error)
    }, [error]);

    return (
        <Alert className="my-8">
            <AlertTriangle />
            <AlertTitle className="ml-4">Not logged</AlertTitle>
            <AlertDescription className="ml-4">You must be logged in to access this page.</AlertDescription>
        </Alert>
    )
}