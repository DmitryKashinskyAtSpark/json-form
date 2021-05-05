import orgBucket from './org-bucket';
import dealBucket from './deal-bucket';

class DataService {
  getControllingOrg() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(orgBucket), 1500);
    });
  }

  getDeal() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(dealBucket), 1500);
    });
  }
}

export default new DataService();
