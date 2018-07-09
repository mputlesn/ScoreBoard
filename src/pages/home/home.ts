import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {ScoreBoardPage} from '../score-board/score-board';
import teamNames from '../../app/teams';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showPrompt(hteam, ateam) {
  if(hteam != ateam){
    const prompt = this.alertCtrl.create({
      title: 'Confirmation',
      message: "Are these the correct team names"+"<br/>Home Team: "+hteam+"<br/>Away Team: "+ateam,
      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            teamNames[0] = hteam;
            teamNames[1] = ateam;
           this.navCtrl.push(ScoreBoardPage);
          }
        }
      ]
    });
    prompt.present();
  }else{
    const prompt = this.alertCtrl.create({
      title: 'Confirmation',
      message: "The team names are the same please change them.",
      buttons: [
        {
          text: 'Okay',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    prompt.present();
  }
    
  }

}
