import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from '../_models/message';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private afs: AngularFirestore) { }

  // add message
  addMessage(message: Message) {
     message.id = this.afs.createId();
     return this.afs.collection('/Messages').add(message);
  }

  // get all messages
  getAllMessages(): Observable<Message[]> {
    return this.afs
        .collection('/Messages')
        .snapshotChanges()
        .pipe(
          map(actions =>
            actions.map(a => {
              const data = a.payload.doc.data() as Message;
              const id = a.payload.doc.id;
              return { id, ...data};
            }))
        )
  }

  deleteMessage(message: Message) {
     return this.afs.doc('/Messages/' + message.id).delete();
  }

  updateMessage(message: Message) {
    this.deleteMessage(message);
    this.addMessage(message);
  }

}
