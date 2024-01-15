import React from "react";
import { FieldError } from "react-hook-form";

interface IllustrationCardProps {
  image: string;
  title: string;
  description: string;
}

export interface NoProductFoundProps {
  message: string;
  subTitle: string;
  isButton: boolean;
  element: React.ReactNode
}

export interface IModal {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;

  element: JSX.element;

  maxWidth?: string;
  overflow?: string;

  title: string;
  button?: React.ReactNode
}

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  type?: string;
  label: string;
  id: string;
}

export interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: FieldError | undefined;
  type?: string;
  label: string;
  id: string;
}

