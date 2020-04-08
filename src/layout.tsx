import React from 'react';

import Header from './components/Header'; 
export default function Layout({ children }: { children: React.ReactNode }) {
  return(
  <main className="container-fluid">
    <Header/>
    {children}
  </main>) 
  ;
}