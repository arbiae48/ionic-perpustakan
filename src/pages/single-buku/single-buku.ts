import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SingleBukuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-buku',
  templateUrl: 'single-buku.html',
})
export class SingleBukuPage {

  public buku: any;
  public koleksi: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.buku = this.navParams.get("buku");
    this.loadKoleksi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleBukuPage');
  }
  loadKoleksi(){
    let data : Observable<any>;
    data = this.http.get("http://localhost:8000/mobile/get_koleksi/"+this.buku.kd_buku);
    data.subscribe(res => {
      this.koleksi = res;
      console.log(res);
     }); 
    }  

}
