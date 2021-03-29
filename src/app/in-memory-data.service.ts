import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from '../app/model/Post';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
 
  private baconIpsum = `Spicy jalapeno bacon ipsum dolor amet ham pastrami meatball pork belly, jerky filet mignon turkey.
  Turducken brisket ground round tenderloin, salami sausage tongue short loin shankle ham hock picanha.
  Turducken corned beef turkey burgdoggen leberkas. Flank bresaola doner, sirloin meatball cow jowl.
  Biltong filet mignon t-bone drumstick porchetta cupim, strip steak andouille shoulder capicola short loin flank sausage.`;
  
    createDb() {
      const posts : Post[] = [
        { id: 0, title: 'My First Post', body: this.baconIpsum },
        { id: 1, title: 'My Second Post', body: this.baconIpsum },
        { id: 2, title: 'My Third Post', body: this.baconIpsum },
      ];
  
      return { posts };
    }
  
}
