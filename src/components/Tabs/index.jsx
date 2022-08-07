import { mounted } from '../../utils/mounted';
import PropTypes from 'prop-types';
import { Tab } from '../Tab';
import React from 'react';
import './index.css';

export const Tabs = (props) => {
  // let currentTabIndex = 0;
  // useState(() => {
  //   const contentTabs = document.querySelectorAll('.tab-nav-item');

  //   contentTabs.forEach((tab, index) => {
  //     tab.addEventListener('click', () => {
  //       currentTabIndex = index;
  //       props.onChange(index);
  //     });
  //   });
  // });

  return (
    <div className="content-tabs">
      <ul className={'tabs ' + props.className}>
        {props.tabs.map((tab, i) => (
          <Tab key={i} {...tab} />
        ))}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  onChange: PropTypes.func,
};
