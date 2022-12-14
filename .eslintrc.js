module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'no-unused-vars': ['off'],
    // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    'no-console': ['off'],
    // 콘솔을 쓰면 에러가 나던 규칙 해제
    'import/prefer-default-export': ['off'],
    // export const 문을 쓸때 에러를 내는 규칙 해제
    'react-hooks/exhaustive-deps': ['warn'],
    // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    'react/jsx-props-no-spreading': ['warn'],
    // props spreading을 허용하지 않는 규칙 해제
    'react/prop-types': ['off'],
    // props의 타입체크를 처리하려면 prop-types보단 차라리 typescript를 사용하는게 낫다.
    'no-underscore-dangle': ['off'],
    // camelCase를 따르는게 좋긴 하지만 `_`를 어쩔수 없이 써야하는 상황을 위해(가령 백엔드가 mongoDB)
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
