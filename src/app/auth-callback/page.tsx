"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../api/_trpc/client";
import { Loader2 } from "lucide-react";

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get("origin");
    trpc.authCallBack.useQuery(undefined, {
        onSuccess: ({ success }) => {
            console.log({success});
            if (success) {
                router.push(origin ? `/${origin}` : '/dashboard');
            }
        },
        onError: (err) => {
            console.log({err});
            if (err.data?.code === "UNAUTHORIZED") {
                router.push("/sign-in");
            }
        },
        retry: true,
        retryDelay: 500,
    });
    return (
        <div className="w-full flex mt-24 justify-center ">
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
                <h3 className="font-semibold text-xl">Setting up your account...</h3>
            </div>
        </div>
    );
}

export default Page;
