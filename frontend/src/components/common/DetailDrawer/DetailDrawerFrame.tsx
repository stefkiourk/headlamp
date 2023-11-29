import React from 'react';

export interface DetailDrawerFrameProps {
  title?: string;
  source: string;
}

export default function DetailDrawerFrame({ title, source }: DetailDrawerFrameProps) {
  return (
    <>
      <iframe title={title} src={source}></iframe>
    </>
  );
}
