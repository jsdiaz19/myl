import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserIdleService } from 'angular-user-idle';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='http://localhost/php/';
  constructor( private http: HttpClient, private userIdle: UserIdleService) { }

  verifyUser(user){
    return this.http.post('/php/Login.php',{user:JSON.stringify(user)} );
  }

  Inactivity(){
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count=>{});
    this.userIdle.onTimeout().subscribe(() => {
      if(window.confirm('Tiempo de inactividad superado')){
        this.userIdle.stopWatching();
        this.userIdle.resetTimer();
        location.href="http://192.168.0.99/dist";
      }
      else{
        this.userIdle.stopWatching();
        this.userIdle.resetTimer();
        location.href="http://192.168.0.99/dist";
      }
    })
  }
}
