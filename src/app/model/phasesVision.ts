export class PhasesVision {
  fase:number;
  constructor() {
      this.fase = 1;
  }
  goForward(){
    this.fase +=1;
  }
  goBack() {
      if (this.fase > 1) {
        this.fase -=1;
      }  
  }
}