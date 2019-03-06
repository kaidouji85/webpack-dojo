window.onload = () => {
  const originText = document.querySelector('.origin-text') || new HTMLElement();
  const reverseButton = document.querySelector('.reverse-button') || new HTMLElement();
  const reverseResult = document.querySelector('.reverse-result') || new HTMLElement();

  reverseButton.addEventListener('click', () => {
    const result = createReverseResult(originText.value);
    reverseResult.innerText = result;
  });
};