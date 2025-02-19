import { CommonModule } from '@angular/common';
import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [CommonModule ],// for ngfor/ngstyle
  standalone: true,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit {
  buttonChangeColor: boolean=true;
  StoreIndex: any=[];
  resetStart: boolean=true;
  
  ngOnInit(): void {
    }
    ResetNotClicked:boolean=false

    //the buttons to be present on page that are given array buttons=[with few properties
    //like  count which is adding to the name of Button and 
    //status is if it is currently clicked  used fr color changing
    // alreadyClicked is disable clicking again
  public buttons=[ 
    { count: 1, status: true,alreadyClicked:false },
    { count: 2, status: true,alreadyClicked:false },
    { count: 3, status: true,alreadyClicked:false },
    { count: 4, status: true,alreadyClicked:false },
    { count: 5, status: true,alreadyClicked:false },
    { count: 6, status: true,alreadyClicked:false },
    { count: 7, status: true,alreadyClicked:false },
    { count: 8, status: true,alreadyClicked:false },
    { count: 9, status: true,alreadyClicked:false },
   






  ]
  StoredArrayOfclicked: any=[];// stores the  button clicked in which series
  statusMessage:string =''// pushed into the message on page in same series

  AlreadyClicked(btn:any)// to make a button disabled or not
  {if(btn.alreadyClicked==true)
return true;
else
return false;
  }
  handleClick(index: number): void {// if button is enabled
    this.resetStart=false;
    this.buttons[index].status=false// make it black
    this.buttons[index].alreadyClicked=true// make it disabled

    this.StoreIndex.push(index)                     //StoreIndex: not to look for all the 
                                                   //9 button only change the exact button status 
    this.ResetNotClicked=false                     // ResetNotClicked :will show te buttons pushed 
    // this.StoredArrayOfclicked.push("Button"+" "+(index+1))
    // this.statusMessage=`<b>${this.StoredArrayOfclicked}</b><br>`+","
    this.StoredArrayOfclicked.push(`Button <b style="color:blue;">${index + 1}</b><br>`);
this.statusMessage = this.StoredArrayOfclicked.join(", ") ;
  }
  getButtonStyle(btn:any) // setting up the styling of button on the basis of button property "status"
  { 
    return {
      'background-color': btn.status ? 'white' : 'black',  // white if status is true, black if false
      'color': btn.status ? 'black' : 'white',    
    }
  }
  getButtonResetStyle()
  { return {
    'background-color': this.resetStart ? 'grey' : 'red',  // white if status is true, black if false
    'color': this.resetStart ? 'black' : 'black',    


  }}
  // Function for the reset button
  reset(): void { debugger;
    this.resetStart=true;
    this.ResetNotClicked=true;// ResetNotClicked: to  disappear the statusmessage if reset button is clicked else
                            
    console.log('Reset button clicked');
  
    for(let i=0;i<this.StoreIndex.length;i++)  //StoreIndex:helps at resetting it back to enable
  
      {
       console.log('this.StoreIndex',this.StoreIndex,'status  :',this.buttons[this.StoreIndex[i]].status )
        
        setTimeout(() => {
        this.buttons[this.StoreIndex[i]].status = true;
        this.buttons[this.StoreIndex[i]].alreadyClicked = false;
        console.log('this.StoreIndex',this.StoreIndex,'status now:',this.buttons[this.StoreIndex[i]].status )
          if(i==this.StoreIndex.length-1)
            this.StoreIndex=[]

       }, 1000 * i); 
      
       
      }// boxes restting in same order in which they were clicked
       this.StoredArrayOfclicked=[]
  }
  
}

