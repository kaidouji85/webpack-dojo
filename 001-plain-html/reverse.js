/**
 * 文字列反転処理結果を表示する
 *
 * @param {string} originText 反転対象の文字
 * @return {string} 反転結果
 */
function createReverseResult(originText) {
  if (originText === '') {
    return '何も入力されていません。';
  }

  return `反転結果: ${reverseString(originText)}`;
}

/**
 * 文字列を反転する
 *
 * @param {string} value 変換元
 * @return {string} 変換結果
 */
function reverseString(value) {
  return value.split('')
    .reverse()
    .join('');
}