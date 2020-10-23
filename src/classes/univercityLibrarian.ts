import { logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from './../interfaces';

// @sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
  name: string; // @format() 
  email: string;
  department: string;

  @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }

  @writable(true)
  assistFaculty() {
    console.log('Assisting faculty');
  }

  @writable(false)
  assistCommunity() {
    console.log('Assisting community');
  }
}

export { UniversityLibrarian };
