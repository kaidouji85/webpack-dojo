import {sudenona} from 'sudenona';

/**
 * 文字列反転処理結果を表示する
 *
 * @param {string} originText 反転対象の文字
 * @return {string} 反転結果
 */
export function createReverseResult(originText) {
  if (originText === '') {
    return '何も入力されていません。';
  }

  return `反転結果: ${sudenona(originText)}`;
}
