import { Component, OnInit, OnDestroy} from '@angular/core';
import {productService} from "../../lib/service/product.service";
import {Principal} from "../../auth/principal.service";
import {Router} from "@angular/router";
import {LoginService} from "../../login/login.service";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-returnitemdetale',
    templateUrl: './returnitemdetale.component.html',
    styleUrls: ['./returnitemdetale.component.scss']
})
export class ReturnitemdetaleComponent implements OnInit, OnDestroy {

    id: number;

    public returnOrder: any = {};
    public  trackNumber: string;
    public fullName:string;
    public returnList:any[];
    public reason :string;
    constructor(private productService: productService,private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {

      this.returnOrder = this.route.params.subscribe(params => {
          this.id = +params['id'];
      })

      this.productService.getReturnList().subscribe((data)=>{
          this.returnList = data;
      });
  }

    ngOnDestroy() {
        this.returnOrder.unsubscribe();
    }

}
