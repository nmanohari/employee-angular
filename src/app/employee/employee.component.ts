import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp: Emp[];

  constructor(private empService: EmpService) { }

  ngOnInit(): void {
  }
  getEmployees(): void {
    this.empService.getEmployees().subscribe(emp => this.emp = emp);
  }
}
