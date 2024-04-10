import React from 'react';

export interface Category {
  _id?: string;
  color?: string;
  title?: string;
  key?: string;
  label: string;
  icon?: React.JSX.Element;
}
