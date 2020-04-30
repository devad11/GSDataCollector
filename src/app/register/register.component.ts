import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDataService } from '../service/data/api-data.service';

export class RegisterInfo {
  constructor(
    public name: string,
    public username: string,
    public password: string,
    public reason: string, 
    public email: string,
    public accepted: boolean,
  )
  {}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerInfo: RegisterInfo;
  message: string;

  constructor(    
    private apiDataService: ApiDataService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.registerInfo = new RegisterInfo("","","","","", false);
  }

  sendRegisterInfo() {
    console.log(this.registerInfo)
    this.apiDataService.sendRegister(this.registerInfo).subscribe(
      data => {
        console.log(data)
      });
      this.message = "Your request been sent. You will receive confirmation from admin when your request been approved";
    }

}
