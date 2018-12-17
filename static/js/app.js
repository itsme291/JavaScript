// from data.js
var tableData = data;

var tbody = d3.select('tbody');

// Function to create a table from an array of objects
function createTable(rows){
    rows.forEach(function(element) {
        var row = tbody.append('tr');
        Object.entries(element).forEach(function([key, value]) {
            row.append('td').text(value);
        });
    });
}

// Create the full table
createTable(tableData);

// Select button and create function to be called on a click
var button = d3.select("#filter-btn");
button.on('click', function() {
    d3.event.preventDefault();
    var filteredRows = tableData;

    // Select all the form fields
    d3.selectAll(".form-control").each(function(d,i) { 
        //console.log(this.id);

        var form = d3.select("#" + this.id);
        var inputValue = form.property("value");
        
        // Modify the table only if the field has a value
        if (inputValue != ""){
            tbody.text("");
            filteredRows = filteredRows.filter(row => row[this.id] == inputValue);
            createTable(filteredRows);
        };
    });

});




// button.on('click', function() {
//     d3.event.preventDefault();
//     var filteredRows = tableData;

//     var dateForm = d3.select("#datetime");
//     var inputDate = dateForm.property("value");
//     console.log("Input Date: ", inputDate);
//     if (inputDate != ""){
//         tbody.text("");
//         filteredRows = filteredRows.filter(row => row.datetime == inputDate);
//         createTable(filteredRows);
//     };

//     var cityForm = d3.select("#city");
//     var inputCity = cityForm.property("value");
//     console.log("Input City: ", inputCity);
//     if (inputCity != ""){
//         tbody.text("");
//         filteredRows = filteredRows.filter(row => row.city == inputCity);
//         createTable(filteredRows);
//     };

// });

