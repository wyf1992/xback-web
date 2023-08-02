import { useEffect } from 'react';
import { useSize } from 'ahooks';

export default function (min = 375, max = 1280) {
  const htmlSize = useSize(document.documentElement);
  useEffect(() => {
    if (htmlSize?.width) {
      let htmlFontSize = '1vw';
      htmlSize?.width >= max && (htmlFontSize = '12.8px');
      htmlSize?.width <= min && (htmlFontSize = '3.75px');
      document.documentElement.style.fontSize = htmlFontSize;
    }
  }, [htmlSize?.width]);
}
