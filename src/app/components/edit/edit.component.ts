import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/computer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  computerForm: Computer;
  isLoading:boolean;
  faSpinner=faSpinner;
  marquesDispo: string[];
  typesDispo: string[];
  categoriesDispo: string[];
  constructor(public computerService: ComputerService,private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.isLoading=true;
    this.marquesDispo=this.computerService.marquesDispo;
    this.typesDispo=this.computerService.typesDispo;
    this.categoriesDispo=this.computerService.categoriesDispo;
    return this.computerService.getOneComputer(+this.route.snapshot.paramMap.get('id')).subscribe(
      (data:Computer) => {
        this.computerForm=data;
        this.isLoading=false;
      }
    )
  }
  onSubmit(){
    return this.computerService.editComputer(this.computerForm).subscribe(
      then => {
        this.router.navigate(['/home'])
      }
    )
  }

}
