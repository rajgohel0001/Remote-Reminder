import { Component } from '@angular/core';
import { FcmService } from '../fcm.service';
import { ToastController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fcm: FcmService, public toastCtrl: ToastController) { }

  inViewDidLoad() {
    this.fcm.getToken();
    this.fcm.listenToNotifications().pipe(
      tap(msg => {
        const toast = this.toastCtrl.create({
          // message: msg.body,
          duration: 3000
        });
        // toast.present();
      })
    )
    .subscribe();
  }

}
