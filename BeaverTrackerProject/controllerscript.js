// Dummy controller script based on controller prompt

var beaverEvents = {
    displayBeavers: function(){
        //code here
        var arr = beaverApp.getAll();
        beaverViewer.displayBeavers(arr);
    },
    addBeaver: function(name, age, sex, location){
<<<<<<< HEAD
        var beaver = {
            name: name,
            age: age,
            sex: sex,
            location: [].push(location),
            track: true 
        }

        //code here
        // do beaver check
        beaverApp.addNew(beaver);
        this.displayBeavers();
=======
        beaverObj = {
            name: "Beaverly",
            age: 3,
            sex: "female",
            location: "Boston",
            track: true
        };

        //code here
        beaverApp.addNew(beaverObj);
>>>>>>> model
    },
    addLocation: function(beaverObj, location){
        //code here
        console.log(beaverApp.addLocation(beaverObj, location));

    },
    toggleTracking: function(beaverObj){
        //code here
        console.log(beaverApp.tracking(beaverObj));
    },
    untrackAll: function(){
        //code here
        console.log("All untracked");
    },
    trackAll: function(){
        //code here
        console.log("Tracking");
    }
}