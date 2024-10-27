import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // Create a new document in a collection
  createDocument(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  // Read all documents from a collection
  getCollection(collection: string): Observable<any[]> {
    return this.firestore.collection(collection).valueChanges();
  }

  // Get a specific document by ID
  getDocument(collection: string, id: string): Observable<any> {
    return this.firestore.collection(collection).doc(id).valueChanges();
  }

  // Update a document by ID
  updateDocument(collection: string, id: string, data: any) {
    return this.firestore.collection(collection).doc(id).update(data);
  }

  // Delete a document by ID
  deleteDocument(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).delete();
  }
}
