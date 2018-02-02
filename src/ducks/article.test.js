import reducer, { articleCreating, articleSuccess, articleError,} from './article';

describe('acticle', () => {
  it('리듀서 테스트', () => {
    const state = reducer(undefined, articleCreating());
    expect(state).toEqual({
      creating: true,
      success: false,
      errorMessage: '',
    });
  });
});
