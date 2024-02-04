//your JS code here. If required.
 document.getElementById('myForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const ageInput = document.getElementById('age');
      const nameInput = document.getElementById('name');

      if (!ageInput.value || !nameInput.value) {
        alert('Both age and name are required');
        return;
      }

      const age = parseInt(ageInput.value);

      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve(`Welcome, ${nameInput.value}. You can vote.`);
          } else {
            reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
          }
        }, 4000);
      });

      promise.then((message) => {
        alert(message);
      }).catch((message) => {
        alert(message);
      });
    });