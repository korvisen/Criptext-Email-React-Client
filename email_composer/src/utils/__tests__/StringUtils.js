/* eslint-env node, jest */

import * as utils from '../StringUtils.js';
import { appDomain } from '../const';

describe('string utils:', () => {
  it('remove criptext domain to criptext email', () => {
    const email = `erika@${appDomain}`;
    const state = utils.removeAppDomain(email);
    expect(state).toEqual('erika');
  });

  it('remove criptext domain to any email', () => {
    const email = 'erika@signal.com';
    const state = utils.removeAppDomain(email);
    expect(state).toEqual(email);
  });

  it('remove HTML tags', () => {
    const text =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    const numbers = '1, 2, 4';
    const test = `<p><span>${text}</span><a>${numbers}</a></p>`;
    const state = utils.removeHTMLTags(test);
    expect(state).toEqual(text + numbers);
  });

  it('Parse email by separators', () => {
    const emailAndSeparators =
      'julian_adams@signal.com,erika@criptext.com;gianni-carlo@signal.com(daniel_tigse@signal.com)pedro_iniguez@criptext.com*gabriel@signal.com/allison@signal.com:natasha@criptext.com?julian@signal.com\njuan_piguave@signal.com\rerick@criptext.com';

    const parsedEmails = utils.pasteSplit(emailAndSeparators);
    expect(parsedEmails).toMatchSnapshot();
  });
});
