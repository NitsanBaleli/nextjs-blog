import { assign, createMachine } from "xstate";

export interface ConfirmationDialogMachineContext {
  action?: () => Promise<void>;
  errorMessage?: string;
}

type ConfirmationDialogMachineEvent =
  | {
      type: "toggle";
    }
  | {
      type: "light off";
    };

const confirmationDialogMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBsCWUAWAXAQgV2QCMA6VCZMAYiwHsooKBtABgF1FQAHG2VLVGgDsOIAB6IAtABYAbAFZiUgIwB2AJwyAHCrkAaEAE9EzYkpnqtOgL5X9aTLgIl72AARDqdBmBbskIbl5+IRFxBGk5BQAmDW09Q0klKIBmYhlVJTibWxBBGgg4ERdHIlJyMBFAvgFhfzCJOSkpYhjLeKNwpVUWzWTNRrMZIaGVGzt0bHxS4vdarh5qkLrJZOS1NLj9Doku5pVe-uVh4dGc4qnCSoXgubFJOTUoltidLckopLSMrOygA */
  createMachine<
    ConfirmationDialogMachineContext,
    ConfirmationDialogMachineEvent
  >({
    id: "lightBulb",
    initial: "idle",
    states: {
      idle: {
        on: {
          toggle: {
            target: "light on",
          },
        },
      },
      "light on": {
        on: {
          toggle: {
            target: "idle",
          },
        },
      },
    },
  });

export default confirmationDialogMachine;
