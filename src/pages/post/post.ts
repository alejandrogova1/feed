import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

class Post {
	title: string
	body: string
	id: string

	constructor() {}
}

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: Post = new Post()
  constructor(public navCtrl: NavController, public af: AngularFire) {
  }

  submit(){
    this.af.database.list('/posts').push(this.post)
    this.post = new Post()
  	this.navCtrl.parent.select(0)
  }

}
