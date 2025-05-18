// Addition of input fields
let battAddButton = document.getElementById('battAddButton');
let battRemoveButton = document.getElementById('battRemoveButton');
let loadAddButton = document.getElementById('loadAddButton');
let loadRemoveButton = document.getElementById('loadRemoveButton');
var battConnection1 = document.getElementById('battConnection1');
var battConnection2;
let battVolt1 = document.getElementById('battVolt1');
let battAmps1 = document.getElementById('battAmps1');
let battQuantity1 = document.getElementById('battQuantity1');
let battVolt2;
let battAmps2;
let battQuantity2;
let battSubmit = document.getElementById('battSubmit');
let loadWatt1 = document.getElementById('loadWatt1');
let loadQuantity1 = document.getElementById('loadQuantity1');
let loadWatt2;
let loadQuantity2;
let loadWatt3;
let loadQuantity3;
let loadWatt4;
let loadQuantity4;
let loadWatt5;
let loadQuantity5;
let loadWatt6;
let loadQuantity6;
let loadWatt7;
let loadQuantity7;
let modal = $('.modal-content');

var battNumber = 2;
var loadNumber = 2;
let loadRating = 0;
let Volts;
let Amps;
let Watt;
let connectionType;
let Load;
var Qty;



battAddButton.addEventListener('click', (e) => {
   e.preventDefault();

   if (battNumber === 2) {

      const div2 = document.createElement('div');
      div2.id = 'div2';

      // Create the first child div
      battVolt2 = document.createElement('input');
      battVolt2.classList.add("col");
      battVolt2.classList.add("s3");
      battVolt2.type = 'number';
      battVolt2.name = 'battVolt2';
      battVolt2.placeholder = 'Battery Voltage';
      battVolt2.id = 'battVolt2';

      // Create the second child div
      battAmps2 = document.createElement('input');
      battAmps2.classList.add("col");
      battAmps2.classList.add("s4");
      battAmps2.classList.add("offset-s1");
      battAmps2.type = 'number';
      battAmps2.name = 'battAmps2';
      battAmps2.placeholder = 'Battery Amps';
      battAmps2.id = 'battAmps2';

      // Create the second child div
      battQuantity2 = document.createElement('input');
      battQuantity2.classList.add("col");
      battQuantity2.classList.add("s3");
      battQuantity2.classList.add("offset-s1");
      battQuantity2.type = 'number';
      battQuantity2.name = 'battQuantity2';
      battQuantity2.value = '1';
      battQuantity2.id = 'battQuantity2';

      // Create the second child div
      const span = document.createElement('span');
      span.classList.add("col");
      span.classList.add("s12");
      span.textContent = 'Connection';

      // Create the second child div
      const nestedDiv = document.createElement('div');
      nestedDiv.classList.add("container");
      nestedDiv.classList.add("col");
      nestedDiv.classList.add("s12");

      // Create the second child div
      battConnection2 = document.createElement('select');
      battConnection2.classList.add("col");
      battConnection2.classList.add("s6");
      battConnection2.classList.add("offset-s3");
      battConnection2.classList.add("browser-default");
      battConnection2.id = 'battConnection2';


      // Create the second child div
      const series2 = document.createElement('option');
      series2.classList.add("col");
      series2.classList.add("s12");
      series2.classList.add("offset-3");
      series2.value = '1'
      series2.id = 'series2';
      series2.textContent = 'Series'


      // Create the second child div
      const parallel2 = document.createElement('option');
      parallel2.classList.add("col");
      parallel2.classList.add("s12");
      parallel2.classList.add("offset-3");
      parallel2.value = '2'
      parallel2.id = 'parallel2';
      parallel2.textContent = 'Parallel'

      // Nest the child divs within the parent div
      div2.appendChild(battVolt2);
      div2.appendChild(battAmps2);
      div2.appendChild(battQuantity2);
      div2.appendChild(document.createElement('br'));
      div2.appendChild(document.createElement('br'));
      div2.appendChild(span);
      div2.appendChild(nestedDiv);
      div2.appendChild(document.createElement('br'));
      nestedDiv.appendChild(battConnection2);
      battConnection2.appendChild(series2);
      battConnection2.appendChild(parallel2);

      $("#battInput").append(div2);

      battNumber = battNumber + 1;

   }
});

battRemoveButton.addEventListener('click', e => {
   e.preventDefault();
   if (battNumber > 2) {
      battNumber = battNumber - 1;

      $("#div" + battNumber).remove();
   };
});



loadAddButton.addEventListener('click', (e) => {
   e.preventDefault();
   if (loadNumber === 2) {
      $("#loadInput").append('<div id=loadDiv' + loadNumber + '><h6 class= "col s3"> Load ' + loadNumber + ' </h6><input class=" col s5 offset-s1" type="number"  name=loadWatt' + loadNumber + ' placeholder="Load in Watts" id=loadWatt' + loadNumber + '><input class="col s2 offset-s1" type="number" name="loadQuantity" value="1" placeholder="Qty" id=loadQuantity' + loadNumber + ' ></div>');

      loadWatt2 = document.getElementById('loadWatt2');
      loadQuantity2 = document.getElementById('loadQuantity2');

      loadNumber = loadNumber + 1;
   } else if (loadNumber === 3) {
      $("#loadInput").append('<div id=loadDiv' + loadNumber + '><h6 class= "col s3"> Load ' + loadNumber + ' </h6><input class=" col s5 offset-s1" type="number"  name=loadWatt' + loadNumber + ' placeholder="Load in Watts" id=loadWatt' + loadNumber + '><input class="col s2 offset-s1" type="number" name="loadQuantity" value="1" placeholder="Qty" id=loadQuantity' + loadNumber + ' ></div>');

      loadWatt3 = document.getElementById('loadWatt3');
      loadQuantity3 = document.getElementById('loadQuantity3');

      loadNumber = loadNumber + 1;
   } else if (loadNumber === 4) {
      $("#loadInput").append('<div id=loadDiv' + loadNumber + '><h6 class= "col s3"> Load ' + loadNumber + ' </h6><input class=" col s5 offset-s1" type="number"  name=loadWatt' + loadNumber + ' placeholder="Load in Watts" id=loadWatt' + loadNumber + '><input class="col s2 offset-s1" type="number" name="loadQuantity" value="1" placeholder="Qty" id=loadQuantity' + loadNumber + ' ></div>');

      loadWatt4 = document.getElementById('loadWatt4');
      loadQuantity4 = document.getElementById('loadQuantity4');

      loadNumber = loadNumber + 1;
   } else if (loadNumber === 5) {
      $("#loadInput").append('<div id=loadDiv' + loadNumber + '><h6 class= "col s3"> Load ' + loadNumber + ' </h6><input class=" col s5 offset-s1" type="number"  name=loadWatt' + loadNumber + ' placeholder="Load in Watts" id=loadWatt' + loadNumber + '><input class="col s2 offset-s1" type="number" name="loadQuantity" value="1" placeholder="Qty" id=loadQuantity' + loadNumber + ' ></div>');

      loadWatt5 = document.getElementById('loadWatt5');
      loadQuantity5 = document.getElementById('loadQuantity5');

      loadNumber = loadNumber + 1;
   } else if (loadNumber === 6) {
      $("#loadInput").append('<div id=loadDiv' + loadNumber + '><h6 class= "col s3"> Load ' + loadNumber + ' </h6><input class=" col s5 offset-s1" type="number"  name=loadWatt' + loadNumber + ' placeholder="Load in Watts" id=loadWatt' + loadNumber + '><input class="col s2 offset-s1" type="number" name="loadQuantity" value="1" placeholder="Qty" id=loadQuantity' + loadNumber + ' ></div>');

      loadWatt6 = document.getElementById('loadWatt6');
      loadQuantity6 = document.getElementById('loadQuantity6');

      loadNumber = loadNumber + 1;
   } else if (loadNumber === 7) {
      $("#loadInput").append('<div id=loadDiv' + loadNumber + '><h6 class= "col s3"> Load ' + loadNumber + ' </h6><input class=" col s5 offset-s1" type="number"  name=loadWatt' + loadNumber + ' placeholder="Load in Watts" id=loadWatt' + loadNumber + '><input class="col s2 offset-s1" type="number" name="loadQuantity" value="1" placeholder="Qty" id=loadQuantity' + loadNumber + ' ></div>');

      loadWatt7 = document.getElementById('loadWatt7');
      loadQuantity7 = document.getElementById('loadQuantity7');

      loadNumber = loadNumber + 1;
   } else {

      $('#battModal').remove();
      $('#loadModal').remove();
      $('#warning').remove();
      $('#errorDisplay').remove();

      modal.append("<div id=errorDisplay class = red-text ><h6>More field can't be added!</h6></div>");
      document.getElementById('loadAddButton').classList.add("modal-trigger");
   };

});

loadRemoveButton.addEventListener('click', e => {
   e.preventDefault();
   if (loadNumber > 2) {
      loadNumber = loadNumber - 1;

      $("#loadDiv" + loadNumber).remove();
   };
});


function battModal() {
   $('#battModal').remove();
   $('#loadModal').remove();
   $('#warning').remove();
   $('#errorDisplay').remove();


   modal.append('<div id=battModal ><h4>Battery Summary</h4><h6 class="col s12 red-text">Connection Type: ' + connectionType + '</h6><p class="col s12">Total Voltage: </p><p class ="center-align" > ' + Volts + '</p><p class="col s12">Total Amps: </p><p class ="center-align" >' + Amps + '</p><p class="col s12">Total Wattage: </p><p class ="center-align" >' + Watt + '</p></div>');
}


// Calculations
function battCalculator() {

   if (battNumber === 2) {   //1 input level
      if (battQuantity1.value < 1) {
         $('#battModal').remove();
         $('#loadModal').remove();
         $('#warning').remove();
         $('#errorDisplay').remove();


         modal.append('<div id=warning class = red-text ><h4>Error!</h4><p>Invalid number of battries</p></div>');
      } else {// invalid number of batteries
         if (battConnection1.value == 1) {   //Series Connection
            Volts = battVolt1.value * battQuantity1.value;
            if (battAmps1.value) {
               Amps = battAmps1.value;
            } else {
               Amps = 0;
            };
            Watt = Volts * Amps;

            if (battQuantity1.value == 1) {
               connectionType = battQuantity1.value + " Battery in Series Connection";
            } else {
               connectionType = battQuantity1.value + " Batteries in Series Connection";
            }
            battModal();

         } else { //Parallel Connection
            if (battVolt1.value) {
               Volts = battVolt1.value;
            } else {
               Volts = 0;
            };
            Amps = battAmps1.value * battQuantity1.value;
            Watt = Volts * Amps;
            if (battQuantity1.value == 1) {
               connectionType = battQuantity1.value + " Battery in Parallel Connection";
            } else {
               connectionType = battQuantity1.value + " Batteries in Parallel Connection";
            }
            battModal();
         };
      };
   } else { // 2 input level
      if (battQuantity1.value < 1 || battQuantity2.value < 1) { // invalid number of batteries
         $('#battModal').remove();
         $('#loadModal').remove();
         $('#warning').remove();
         $('#errorDisplay').remove();

         modal.append('<div id=warning class = red-text ><h4>Error!</h4><p>Invalid number of battries</p></div>');
      } else {

         if (battVolt1.value == battVolt2.value && battAmps1.value == battAmps2.value) {
            if (battConnection1.value == 1 && battConnection2.value == 2) {  //Series and Parallel Connection (first level is series)
               let volt1 = battVolt1.value * battQuantity1.value;
               let amps1 = Number(battAmps1.value);
               let volt2 = battVolt2.value * battQuantity1.value;
               let amps2 = battAmps2.value;

               Volts = (volt1 + volt2) / 2;
               Amps = amps2 * battQuantity2.value;
               Watt = Volts * Amps;
               connectionType = battQuantity1.value + " Series connected in " + battQuantity2.value + " Set (" + Number(battQuantity1.value) * Number(battQuantity2.value) + " Batteries)";
               battModal();

            } else if (battConnection1.value == 2 && battConnection2.value == 1) {
               let volt1 = Number(battVolt1.value);
               let amps1 = battAmps1.value * battQuantity1.value;
               let volt2 = battVolt2.value;
               let amps2 = battAmps2.value * battQuantity1.value; 2

               Volts = volt2 * battQuantity2.value;
               Amps = (amps1 + amps2) / 2;
               Watt = Volts * Amps;
               connectionType = battQuantity1.value + " Parallel connected in " + battQuantity2.value + " Set (" + Number(battQuantity1.value) * Number(battQuantity2.value) + " Batteries)";
               battModal();
            } else {
               $('#battModal').remove();
               $('#loadModal').remove();
               $('#warning').remove();
               $('#errorDisplay').remove();

               modal.append('<div id=warning class = red-text ><h4>Error!</h4><p>Check the connection type</p></div>');
            };
         } else {
            // modal
            $('#battModal').remove();
            $('#loadModal').remove();
            $('#warning').remove();
            $('#errorDisplay').remove();

            modal.append('<div id=warning class = red-text ><h4>Error!</h4><p>The Voltages and Amps of the two fields must be the same</p></div>');
         };
      };
   };
};



battSubmit.addEventListener('click', (e) => {
   e.preventDefault();

   battCalculator();
});

function addLoadModal() {

   // Modal display here
   $('#battModal').remove();
   $('#loadModal').remove();
   $('#warning').remove();
   $('#errorDisplay').remove();

   modal.append('<div id=loadModal ><h4>Load Summary</h4><p>Total Load (watt)</p><p> ' + loadRating + '</p></div>');
};



function loadCalculation() {
   if (loadNumber == 2) {
      loadRating = (loadWatt1.value * loadQuantity1.value);
      addLoadModal();
   } else if (loadNumber === 3) {
      loadRating = (loadWatt1.value * loadQuantity1.value) + (loadWatt2.value * loadQuantity2.value);
      addLoadModal();
   } else if (loadNumber === 4) {
      loadRating = (loadWatt1.value * loadQuantity1.value) + (loadWatt2.value * loadQuantity2.value) + (loadWatt3.value * loadQuantity3.value);
      addLoadModal();
   } else if (loadNumber === 5) {
      loadRating = (loadWatt1.value * loadQuantity1.value) + (loadWatt2.value * loadQuantity2.value) + (loadWatt3.value * loadQuantity3.value) + (loadWatt4.value * loadQuantity4.value);
      addLoadModal();
   } else if (loadNumber === 6) {
      loadRating = (loadWatt1.value * loadQuantity1.value) + (loadWatt2.value * loadQuantity2.value) + (loadWatt3.value * loadQuantity3.value) + (loadWatt4.value * loadQuantity4.value) + (loadWatt5.value * loadQuantity5.value);
      addLoadModal();
   } else if (loadNumber === 7) {
      loadRating = (loadWatt1.value * loadQuantity1.value) + (loadWatt2.value * loadQuantity2.value) + (loadWatt3.value * loadQuantity3.value) + (loadWatt4.value * loadQuantity4.value) + (loadWatt5.value * loadQuantity5.value) + (loadWatt6.value * loadQuantity6.value);
      addLoadModal();
   } else {
      loadRating = (loadWatt1.value * loadQuantity1.value) + (loadWatt2.value * loadQuantity2.value) + (loadWatt3.value * loadQuantity3.value) + (loadWatt4.value * loadQuantity4.value) + (loadWatt5.value * loadQuantity5.value) + (loadWatt6.value * loadQuantity6.value) + (loadWatt7.value * loadQuantity7.value);
      addLoadModal();
   };
};

document.getElementById("submitLoad").addEventListener("click", (e) => {
   e.preventDefault();
   loadCalculation();
});


document.getElementById("totalSummary").addEventListener("click", (e) => {
   e.preventDefault();
   loadCalculation();
   battCalculator();

   modal.append('<div id=loadModal ><h4>Load Summary</h4><p>Total Load (watt)</p><p> ' + loadRating + '</p></div>');
});

