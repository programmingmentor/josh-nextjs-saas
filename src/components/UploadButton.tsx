"use client";

import { DialogContent } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Dialog open={isOpen}
            onOpenChange={(open) => { if (!open) setIsOpen(open) }}
        >
            <DialogTrigger asChild onClick={() => setIsOpen(true)}>
                <Button>Upload PDF</Button>
            </DialogTrigger>
            <DialogContent>
                dialog content
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton;