import React from 'react';
import SeferItem from './SeferItem.jsx';

const SeferList = (props) => {
  const { parashot, track, click, selected, className } = props;
  const mapped = parashot.map((par, i) => {
    const { section: sefer, unit_title: title, unit: parasha, series_title: series } = par;
    return (
      <SeferItem
        parasha={title}
        title={title}
        series={series}
        index={i}
        click={click}
        selected={selected}
        key={`${track}-sefer-${sefer}-parasha-${parasha}-series-${series}-listitem`}
      />
    );
  });
  return (
    <ul className={className}>
      {mapped}
    </ul>
  );
};

export default SeferList;
