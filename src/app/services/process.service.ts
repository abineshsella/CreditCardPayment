import {Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
@Injectable()
export class ProcessService{
    private messageSource=new BehaviorSubject<number>(1);
    currentMessage=this.messageSource.asObservable();
    update(changes){
        this.messageSource.next(changes);
    }
    
}