import orgBucket from './org-bucket';
import dealBucket from './deal-bucket';

class DataService {
  emulateBucketRequest(data) {
    console.log('[Emulation] Http request...')
    
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('[Emulation] Http request resolved...')
        resolve(data);
      }, 1500);
    });
  }

  getControllingOrg() {
    return this.emulateBucketRequest(orgBucket);
  }

  getDeal() {
    return this.emulateBucketRequest(dealBucket);
  }
}

export default new DataService();
