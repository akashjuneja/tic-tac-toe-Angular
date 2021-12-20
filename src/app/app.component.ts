import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticTacToe-game';
  isCross:Boolean=false
  itemArray:string[]=new Array(9).fill('empty')
  winMessage:string=''

  constructor(private toastr: ToastrService) {}

   //logic for reload game
  reloadgame(){
     this.winMessage=''
     this.isCross=false
     this.itemArray=new Array(9).fill('empty')
  }


  handleClick(num:number){
    if(this.winMessage){
      this.toastr.success(this.winMessage);
  }
    if(this.itemArray[num]==='empty'){
      this.itemArray[num]=this.isCross?'cross':'circle'
      this.isCross=!this.isCross
    }else{
       this.toastr.info('Already Filled');
  }
  this.isWinner()
    }



  //logic for winner
  isWinner(){
   if(this.itemArray[0]===this.itemArray[1] &&
    this.itemArray[0]===this.itemArray[2] &&
    this.itemArray[0]!=='empty'){
      this.winMessage=`${this.itemArray[0]} Won the game`
    }
    else if(
    this.itemArray[3]===this.itemArray[4] &&
    this.itemArray[3]===this.itemArray[5] &&
    this.itemArray[3]!=='empty'
    ){
     this.winMessage=`${this.itemArray[3]} Won the game`
    }
    else if(
    this.itemArray[6]===this.itemArray[7] &&
    this.itemArray[6]===this.itemArray[8] &&
    this.itemArray[6]!=='empty'
    ){
      this.winMessage=`${this.itemArray[6]} Won the game`
    }
    else if(
    this.itemArray[0]===this.itemArray[3] &&
    this.itemArray[0]===this.itemArray[6] &&
    this.itemArray[0]!=='empty'
    ){
      this.winMessage=`${this.itemArray[0]} Won the game`
    }
    else if(
    this.itemArray[1]===this.itemArray[4] &&
    this.itemArray[1]===this.itemArray[7] &&
    this.itemArray[1]!=='empty'
    ){
      this.winMessage=`${this.itemArray[1]} Won the game`
    }
    else if(
    this.itemArray[2]===this.itemArray[5] &&
    this.itemArray[2]===this.itemArray[8] &&
    this.itemArray[2]!=='empty'
    ){
      this.winMessage=`${this.itemArray[2]} Won the game`
    }
    else if(
    this.itemArray[2]===this.itemArray[4] &&
    this.itemArray[2]===this.itemArray[6] &&
    this.itemArray[2]!=='empty'
    ){
      this.winMessage=`${this.itemArray[2]} Won the game`
    }
    else if(
    this.itemArray[0]===this.itemArray[4] &&
    this.itemArray[0]===this.itemArray[8] &&
    this.itemArray[0]!=='empty'
    ){
      this.winMessage=`${this.itemArray[0]} Won the game`
    }
  }
}
