import { sendGTMEvent } from '@next/third-parties/google';

import { GtmEventParametersObject } from '@/types/gtmEventParameters';

export const gtmEventViewArticle = (rest: GtmEventParametersObject) => {
  const parameter_object = {
    event: 'view_article',
    ...rest,
  };
  sendGTMEvent(parameter_object);
};

export const gtmEventViewPage = (rest: GtmEventParametersObject) => {
  const parameter_object = {
    event: 'view_page',
    ...rest,
  };
  sendGTMEvent(parameter_object);
};

export const gtmEventViewAuthor = (rest: GtmEventParametersObject) => {
  const parameter_object = {
    event: 'view_author',
    ...rest,
  };
  sendGTMEvent(parameter_object);
};

export const gtmEventViewMain = (rest: GtmEventParametersObject) => {
  const parameter_object = {
    event: 'view_main',
    ...rest,
  };
  sendGTMEvent(parameter_object);
};
