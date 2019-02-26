import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder,
FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  frmReg : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, public FB : FormBuilder) {
  
    this.frmReg = this.FB.group({
      nama : new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.maxLength(50)
      ])
      ),
      alamat : new FormControl('',Validators.required),
      telp : new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(12)
      ])),
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Registrasi(){
    let data = this.frmReg.value; // mengambil data frmReg ( Form Group )

    let headers 	: any		= new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let url       : any   = "http://localhost:8000/mobile/registrasi";
          

    this.http.post(url, JSON.stringify(data), headers)
    .subscribe((res : any) =>
    {
      if(res.type=="success"){
        this.navCtrl.setRoot(HomePage);
      } else {
        alert(res.mess);
      }
    },
    (error : any) =>
    {
      console.log(error);
      console.log('Something went wrong!');
    });    
  }

}
