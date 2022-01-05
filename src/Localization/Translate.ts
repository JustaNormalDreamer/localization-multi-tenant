/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { config } from '../config/config';

export const __trans = async (code: string) => {
  const file = await import(`../Localization/${config.locale}`);

  if (!file.locale[code]) {
    const defaultFile = await import(`../Localization/${config.defaultLocale}`);
    return defaultFile.locale[code];
  }

  return file.locale[code];
};
