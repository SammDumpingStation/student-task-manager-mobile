import { View, Text } from 'react-native'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function ConfirmationDialog({dialogOpen, setDialogOpen, setChecked}: {dialogOpen: boolean, setDialogOpen: (open: boolean) => void, setChecked: (checked: boolean) => void}) {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Task as Complete?</DialogTitle>
          <DialogDescription>
            Are you sure you want to mark this task as complete?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row justify-end items-center">
          <Button
            variant="outline"
            onPress={() => {
              setDialogOpen(false);
              setChecked(false);
            }}
          >
            <Text className="text-foreground">Cancel</Text>
          </Button>
          <Button
            onPress={() => {
              setDialogOpen(false);
              setChecked(true);
            }}
          >
            <Text className="text-background">Confirm</Text>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}