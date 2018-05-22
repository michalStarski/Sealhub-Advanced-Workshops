import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from "../test.service";
import { Subscription } from "rxjs/index";

@Component({
  selector: 'app-testowy',
  templateUrl: './testowy.component.html',
  styleUrls: ['./testowy.component.css']
})
export class TestowyComponent implements OnInit, OnDestroy {

  private form: Object = {
    name: '',
    species: '',
    gender: '',
    homeworld: ''
  };

  private species: Array<String> = [];
  private characters: Array<Object> = [];
  private subscribtions: Array<Subscription> = [];

  constructor(private testService: TestService) {
    this.testService= testService;
  }

  ngOnInit() {
    this.getData();
    this.getSpecies();
  }

  ngOnDestroy(){
    for(let i = 0; i< this.subscribtions.length; i++)
      this.subscribtions[i].unsubscribe();
  }

  getData(): void{
    this.subscribtions.push(
      this.testService.getData().subscribe(
        data => { this.characters = data; },
        error => { alert('Something went wrong!'); }
      )
    );
  }

  getSpecies(): void{
    this.subscribtions.push(
      this.testService.getSpecies().subscribe(
        data => { this.species = data; },
        error => { alert('Something went wrong!'); }
      )
    );
  }

  sendData(form: Object): void{
    this.subscribtions.push(
      this.testService.postData(form).subscribe(
        data => { this.getData() },
        error => { alert('Something went wrong!'); }
      )
    )
  }

}
