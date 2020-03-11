/**
 * Generic GHButton component.
 */
import React, { useState, useEffect } from 'react';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import ButtonLink from '../ButtonLink';

// 10 mins
const timeout = 10 * 60 * 1000;

const GHButton = ({ apiUrl, attr, href, title, icon, iconSize, text }) => {
  const [loading, setLoading] = useState(false);
  const [attrCount, setAttrCount] = useLocalStorageState(attr, null);
  const [lastCheck, setLastCheck] = useLocalStorageState(
    `${attr}_last_check`,
    0,
  );

  useEffect(() => {
    if (attrCount === null || Date.now() > lastCheck + timeout) {
      fetchApi();
    }
  }, [lastCheck]);

  const fetchApi = async () => {
    const response = await fetch(apiUrl);
    const json = await response.json();

    if (json[attr] >= 0) {
      setAttrCount(json[attr]);
    }

    setLastCheck(Date.now());
    setLoading(false);
  };

  return (
    <ButtonLink
      href={href}
      title={title}
      icon={icon}
      iconSize={iconSize}
      text={text}
      showCount={!loading && attrCount !== null}
      count={attrCount}
    />
  );
};

export default GHButton;
