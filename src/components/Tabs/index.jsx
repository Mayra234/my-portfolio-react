import PropTypes from 'prop-types';
import { Tab } from '../Tab';
import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';

export const Tabs = ({ className = '', tabs = [], onChange = () => {} }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const onClickTab = (index) => {
    setCurrentTab(index);
  };

  useEffect(() => {
    onChange(currentTab);
  }, [currentTab]);

  return (
    <div className="content-tabs">
      <ul className={'tabs ' + className}>
        {tabs.map((tab, index) => (
          <Tab key={index} {...tab} onClick={() => onClickTab(index)} />
        ))}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  onChange: PropTypes.func,
};
