import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor() { }
  name=""
  author=""
  langauge=""
  pubyear=""

  readValue=()=>{
    let data={
      "name":this.name,
      "author":this.author,
      "langauge":this.langauge,
      "pubyear":this.pubyear
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
