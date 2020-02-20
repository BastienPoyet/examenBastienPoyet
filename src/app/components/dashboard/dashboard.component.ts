import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/computer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  computers: Computer[];
  isLoading: boolean;
  faSpinner=faSpinner;
  faTrash=faTrash;
  faEdit=faEdit;
  faEye=faEye;
  nbreStock: number;
  constructor(public computerService: ComputerService) { }
  ngOnInit() {
    this.isLoading=true;
    return this.computerService.getAllComputers().subscribe(
      (data:Computer[]) => {
        this.computers=data;
        this.isLoading=false;
        this.nbreStock=this.computers.length;
      }
    )
  }
  deleteComputer(id: number){
    this.isLoading=true;
    this.computerService.deleteComputer(id).subscribe(
      then => {
        return this.computerService.getAllComputers().subscribe(
          (data:Computer[]) => {
            this.isLoading=false;
            this.computers=data;
            this.nbreStock=this.computers.length;
          }
        )
      }
    )
  }

}
