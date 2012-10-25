// Author: Elizabeth Adcock
// Created for: SDI Online Course (SDI 1211) : Project 1 / Deliverable 1
// Created on: 10/24/2012


var raceDay = "Let\'s get ready to race.",
	badRacingDay = "The race will be cancelled due to bad weather today. Sorry folks.",
	toManyRacers = "To many racer\'s",
	racersInPosition = 50,
	runnersOnTheLine = 42,  //number of runners in position to start the race.  This cannot be larger then racersInPostion.
	racerPercent = 0,
	startRace = true,
	readySetGo = true		//in position 1 or 2 = True, else false.
	;

// Output each variable above in console.log
console.log ("(raceDay) This will display if the race is still going on = ", raceDay);
console.log ("(badRacingDay) This will display if the race is not going on because of weather = ", badRacingDay);
console.log ("(toManyRacers) If there are to many racer's attempting to run the race this will output = ", toManyRacers);
console.log ("(racersInPosition) Checks to see how many racer's are ready to run.  If more then 50 then start the race = ", racersInPosition);
console.log ("(runnersOnTheLine) Checks to see how many runners are in position to start the race = ", runnersOnTheLine);
console.log ("(runnerPercent) Percent of runners (who are in position) already running the race = ", runnerPercent);
console.log ("(startRace) This is to decide if the wave of runners are ready to start or not (if True then proceed to start the for wave of runners in the race) = ", startRace);
console.log ("(readySetGo) It is time to start the race = ", readySetGo);

//A very simplistic situation with "catching a wave, surfing"
if (startRace && readySetGo) {
	if (racersInPosition <= 50) {
		console.log (raceDay);
		racerPercent = racerInPosition / runnersOnTheLine;
		console.log ("Percent of runners (who are in position) ready to start the race = ", racerPercent);
		runnersOnTheLine = runnersOnTheLine - 42;
		console.log ("Number of racers now in position to start the race: " + runnersOnTheLine);

	}else {
		console.log (toManyRacers);
		console.log (badRacingDay);
	};

}else {
	if (toManyRacers === "To many racers\'s"){
		console.log (badRacingDay);
	}else {
		var comment = toManyRacers + " " + badRacingDay; 
		console.log (comment);
	};
};		