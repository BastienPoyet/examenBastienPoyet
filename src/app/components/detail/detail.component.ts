import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  computer: Computer;
  isLoading: boolean;
  faSpinner=faSpinner;
  constructor(public computerService: ComputerService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading=true;
    return this.computerService.getOneComputer(+this.route.snapshot.paramMap.get('id')).subscribe(
      (data:Computer) => {
        this.computer=data;
        this.isLoading=false;
      }
    )
  }

}
