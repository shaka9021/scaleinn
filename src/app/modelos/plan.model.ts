import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
import { plan } from 'src/app/modelos/plan.model';
 
 
@Injectable({
  providedIn: 'root'
})
export class PlanService {
 
  constructor(private firestore: AngularFirestore) { }
  
  //---[create]--------------------
  createPlan(producto: plan){
    return this.firestore.collection('planes').add(plan);
  }
 
  //---[read]--------------------
  getPlan(){
    return this.firestore.collection('planes').snapshotChanges();
  }
  getProducto(planId: string){
    return this.firestore.collection
          ('planes', ref =>ref.where('id','==',planId))
  }
  //---[update]--------------------
  updatePlan(plan: Plan){
    delete plan.id;
    this.firestore.doc('planes/'+plan.id).update(plan);
  }
 
  //---[delete]--------------------
  deletePlan(planId: string){
    this.firestore.doc('planes/'+planId).delete();
  }
}
