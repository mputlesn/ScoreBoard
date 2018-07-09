import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import teamNames from '../../app/teams';


/**
 * Generated class for the ScoreBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-board',
  templateUrl: 'score-board.html',
})
export class ScoreBoardPage {

  team = "";
  scoreHome = 0;
  scoreAway = 0;
  score = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreBoardPage');
  }

  hteam = teamNames[0]
  ateam = teamNames[1]

  names = teamNames;

  teamHome(){
    this.team = "home"
  }

  teamAway(){
    this.team = "away"
  }

  
  

  try(){
    if (this.team == "home") {
      var obj2 = new scoreDetails("home", 5);
      this.score.push(obj2);
      this.scoreHome += 5;
      console.log(this.score);
      
    } else {
      var obj2 = new scoreDetails("away", 5);
      this.score.push(obj2);
      this.scoreAway += 5;
      console.log(this.score);
    }
 }

 penalty(){
  if (this.team == "home") {
    var obj3 = new scoreDetails("home", 3);
    this.score.push(obj3);
    this.scoreHome += 3;
    console.log(this.score);
    
  } else {
    var obj3 = new scoreDetails("away", 3);
    this.score.push(obj3);
    this.scoreAway += 3;
    console.log(this.score);
  }
 }

 con(){
  if (this.team == "home") {
    var obj = new scoreDetails("home", 2);
      this.score.push(obj);
    this.scoreHome += 2;
    console.log(this.score);
  } else {
    var obj = new scoreDetails("away", 2);
    this.score.push(obj);
    this.scoreAway += 2;
    console.log(this.score);
  }

 }

 undoT(){
  var count = 0;
  if(this.team == "home"){
    for(let i = 0; i < this.score.length; i++){
      if (this.score[i].chosenTeam == "home" && this.score[i].chosenScore == 5) {
        //get the index
         count = i;
         //delete the object
         this.score.splice(count, 1);
         //so that it does not delete to negative infinity
         if(this.scoreHome >= 5){
          this.scoreHome -= 5;
         }
         //end the loop ones you have what you wanted cos you only need to delete one item/object
         break;
      } 
    }
    console.log(count);
  }else{
    for(let i = 0; i < this.score.length; i++){
      if (this.score[i].chosenTeam == "away" && this.score[i].chosenScore == 5) {
        count = i;
        this.score.splice(count, 1);
        if(this.scoreAway >= 5){
        this.scoreAway -= 5
        }
        break;
      }
    }
    console.log(count);
  }
 
 }

 undoP(){
  var count = 0;
  if(this.team == "home"){
    for(let i = 0; i < this.score.length; i++){
      if (this.score[i].chosenTeam == "home" && this.score[i].chosenScore == 3) {
        count = i;
        this.score.splice(count, 1);
        if(this.scoreHome >= 3){
        this.scoreHome -= 3;
        }
        break;
      }
    }
    console.log(count);
  }else{
    for(let i = 0; i < this.score.length; i++){
      if (this.score[i].chosenTeam == "away" && this.score[i].chosenScore == 3) {
        count = i;
        this.score.splice(count, 1);
        if(this.scoreAway >= 3){
        this.scoreAway -= 3;
        }
        break;
      }
    }
    console.log(count);
   
  }
 }

 undoC(){
  var count = 0;
  if(this.team == "home"){
     for(let i = 0; i < this.score.length; i++){
       if (this.score[i].chosenTeam == "home" && this.score[i].chosenScore == 2) {
        count= i;
        this.score.splice(count, 1);
        if(this.scoreHome >= 2){
        this.scoreHome -= 2;
        }
        break;
       }
     }
    console.log(count);
  }else{
    for(let i = 0; i < this.score.length; i++){
      if (this.score[i].chosenTeam == "away" && this.score[i].chosenScore == 2) {
        count = i;
        this.score.splice(count, 1);
        if(this.scoreAway >= 2){
        this.scoreAway -= 2
        }
        break;
      }
    }
    console.log(count);
  }
 }

  reset(){
    this.names = [];
    this.scoreHome = 0;
    this.scoreAway = 0;
    this.score = [];
    this.navCtrl.push(HomePage)
  }

}

export class scoreDetails{
  chosenTeam : string;
  chosenScore : number;

  constructor( chosenTeam : string, chosenScore : number){
    this.chosenTeam = chosenTeam;
    this.chosenScore = chosenScore;
  }
}
