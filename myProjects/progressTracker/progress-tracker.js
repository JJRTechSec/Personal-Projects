let progressOutput = document.getElementById('progressOutput');
let currentProgress = 0;

let progressInput = document.getElementById('progressInput');
let target = document.getElementById('target');

let calculateButton = document.querySelector('button');

progressInput.focus();

calculateButton.addEventListener('click', function () {
  currentProgress = progressInput.value / target.value * 100;
  let roundedProgress = currentProgress.toFixed(2);
  progressOutput.textContent = `${roundedProgress}`;
  console.log(progressOutput);
  progressInput.value = '';
  target.value = '';
  progressInput.focus();
});