import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  computerForm: Computer;
  marquesDispo:string[];
  typesDispo: string[];
  categoriesDispo: string[];
  constructor(public computerService: ComputerService,public router: Router) { }

  ngOnInit() {
    this.marquesDispo=this.computerService.marquesDispo;
    this.typesDispo=this.computerService.typesDispo;
    this.categoriesDispo=this.computerService.categoriesDispo;
    this.computerForm=new Computer();
  }
  onSubmit(){
    this.computerForm.dateEntreeStock=new Date();
    this.computerService.addComputer(this.computerForm).subscribe(
      then => {
        this.router.navigate(['/home'])
      }
    )
  }
}
