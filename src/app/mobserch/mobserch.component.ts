import { Component, OnInit } from '@angular/core';
import { productService } from '../lib/service/product.service';
import { CookieService } from '../lib/service/cookie.service';
import {Router} from '@angular/router';
import {MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-mobserch',
    templateUrl: './mobserch.component.html',
    styleUrls: ['./mobserch.component.scss']
})
export class MobserchComponent implements OnInit {

    public searchText: string ="";

  constructor(
      private productService: productService,
      private cookie: CookieService,
      private router: Router,
      public thisDialogRef: MatDialogRef<MobserchComponent>
  ) { }

  ngOnInit() {
  }

    onClickClose(){

        this.thisDialogRef.close('close');
    }

    search($event){
        this.router.navigateByUrl("/catalog");
        this.productService.onSearch($event);
    }
}
