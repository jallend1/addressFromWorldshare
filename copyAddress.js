javascript: (function () {
  let attentionField = document.querySelectorAll(
  '[data="returning.address.attention"]'
)[0].value;
let addressLineOne = document.querySelectorAll(
  '[data="returning.address.line1"]'
)[0].value;
let addressLineTwo = document.querySelectorAll(
  '[data="returning.address.line2"]'
)[0].value;
let city = document.querySelectorAll('[data="returning.address.locality"]')[0]
  .value;
let state = document
  .querySelectorAll('[data="returning.address.region"]')[0]
  .value.split('_')[1];
let zip = document.querySelectorAll('[data="returning.address.postal"]')[0]
  .value;

navigator.clipboard.writeText(
  attentionField +
    '\n' +
    addressLineOne +
    '\n' +
    addressLineTwo +
    '\n' +
    city +
    ', ' +
    state +
    ' ' +
    zip
);
}
)();