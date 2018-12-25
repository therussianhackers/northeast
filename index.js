const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

let schedule = require('node-schedule');


function checkin() {

  nightmare
  .goto('https://www.southwest.com/air/check-in/index.html')
  .type('#confirmationNumber', 'QRXVQ9')
  .type('#passengerFirstName', 'Aaron')
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

let target = new Date(2018, 11, 25, 7, 10, 5);

let a = schedule.scheduleJob(target, function() {
  checkin();
});
