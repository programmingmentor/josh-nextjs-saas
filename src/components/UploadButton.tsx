"use client";

import { DialogContent } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Dialog
          open={isOpen}
          onOpenChange={(v) => {
            if (!v) {
              setIsOpen(v)
            }
          }}>
          <DialogTrigger
            onClick={() => setIsOpen(true)}
            asChild>
            <Button>Upload PDF</Button>
          </DialogTrigger>
    
          <DialogContent>
            dialog content
          </DialogContent>
        </Dialog>
      )
}

export default UploadButton;