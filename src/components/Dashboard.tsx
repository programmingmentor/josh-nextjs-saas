"use client";

import { trpc } from "@/app/api/_trpc/client";
import UploadButton from "./UploadButton";
import ShouldRender from "./ShouldRender";
import { Ghost } from "lucide-react";

const Dashboard = () => {
    const { data: files, isLoading } = trpc.getUserFiles.useQuery();

    return (
        <main className='mx-auto max-w-7xl md:p-10'>
            <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
                <h1 className='mb-3 font-bold text-5xl text-gray-900'>
                    My Files
                </h1>
                <UploadButton />
            </div>
            <ShouldRender if={files && files.length > 0}>
                <div></div>
            </ShouldRender>
            <ShouldRender if={isLoading}>
                <div></div>
            </ShouldRender>
            <ShouldRender if={!files || files?.length === 0}>
                <div className="mt-16 flex flex-col items-center gap-2">
                    <Ghost className="h-8 w-8 text-zinc-800" />
                    <h3 className="font-semibold text-xl">Pretty empty around here</h3>
                    <p>Let&apos;s upload your PDF</p>
                </div>
            </ShouldRender>
        </main>
    );
}

export default Dashboard;