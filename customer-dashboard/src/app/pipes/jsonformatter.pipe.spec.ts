import { JsonformatterPipe } from './jsonformatter.pipe';

describe('JsonformatterPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonformatterPipe();
    expect(pipe).toBeTruthy();
  });
});
