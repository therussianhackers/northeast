const Nightmare = require('nightmare');

let schedule = require('node-schedule');


function checkin() {
  let nightmare = Nightmare({show: true});

  nightmare
  .goto('https://www.southwest.com/air/check-in/index.html')
  .type('#confirmationNumber', 'MAYE5Q')
  .type('#passengerFirstName', 'Abigail')
  .type('#passengerLastName', 'Tsui')
  .click('#form-mixin--submit-button')
  .wait('button.actionable.actionable_button.actionable_large-button.actionable_no-outline.actionable_primary.button.submit-button.air-check-in-review-results--check-in-button')
  .click('button.actionable.actionable_button.actionable_large-button.actionable_no-outline.actionable_primary.button.submit-button.air-check-in-review-results--check-in-button')
  .end()
  .catch(error => {
    console.error('err');
  });

}


// checkin();

let target = new Date(2018, 11, 31, 19, 0, 5);

let a = schedule.scheduleJob(target, function() {
  checkin();
});

target = new Date(2018, 11, 31, 19, 1, 5);

let b = schedule.scheduleJob(target, function() {
  checkin();
});

target = new Date(2018, 11, 31, 19, 2, 5);

let c = schedule.scheduleJob(target, function() {
  checkin();
});
