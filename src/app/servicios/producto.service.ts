import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from 'src/app/modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    constructor(private firestore: AngularFirestore) {}

  //---[create]--------------------
  createProducto(producto: Producto) {
    return this.firestore.collection('productos').add(JSON.parse(JSON.stringify(producto)));
  }

  //---[read]--------------------
  getProductos() {
    return this.firestore.collection('productos').snapshotChanges();
  }

  getProducto(productoId: string) {
    return this.firestore.collection('productos', ref =>
      ref.where('id', '==', productoId)
    );
  }

  //---[update]--------------------
  updateProducto(producto: Producto) {
    this.firestore.doc(`productos/${producto.id}`).update(producto);
  }

  //---[delete]--------------------
  deleteProducto(productoId: string) {
    this.firestore.doc(`productos/${productoId}`).delete();
  }
}
