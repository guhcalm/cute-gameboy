import { StatusInterfaces } from ".."

export enum DirectionalPadEnum {
  LEFT,
  RIGHT,
  UP,
  DOWN
}

export interface DirectionalPadInterface {
  left: StatusInterfaces.StatusEnum
  right: StatusInterfaces.StatusEnum
  up: StatusInterfaces.StatusEnum
  down: StatusInterfaces.StatusEnum
}

export enum OperationalPadEnum {
  SELECT,
  START
}

export interface OperationalPadInterface {
  select: StatusInterfaces.StatusEnum
  start: StatusInterfaces.StatusEnum
}

export enum ActionPadEnum {
  E,
  Q
}

export interface ActionPadInterface {
  e: StatusInterfaces.StatusEnum
  q: StatusInterfaces.StatusEnum
}

export interface KeypadInterface {
  startupSwitcher: StatusInterfaces.StatusEnum
  directionalPad: DirectionalPadInterface
  operationalPad: OperationalPadInterface
  actionPad: ActionPadInterface
}
