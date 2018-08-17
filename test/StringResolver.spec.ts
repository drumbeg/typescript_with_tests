import { StringResolver } from '../src/StringResolver';
import { expect } from 'chai';
import 'mocha';

describe('StringReceiver test', () => {

  it('should return the received string', () => {
    const obj = new StringResolver;
    const result = obj.resolve('something');
    expect(result).to.equal('something');
  });

});