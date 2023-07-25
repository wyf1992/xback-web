import React from 'react';
import Product from './product/index';
import Download from './download';
import About from './about';
import Introduce from './introduce';

export default function Home() {
  return (
    <div>
      <Product />
      <Download />
      <About />
      <Introduce />
    </div>
  );
}
