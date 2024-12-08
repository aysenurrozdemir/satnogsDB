import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardServise {

  constructor(private http: HttpClient) {
  }

  getNewSatellitesData() {
    return [
      {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'https://freepngclipart.com/download/italian/10363-italian-flag-free-download-png.png',
        image: 'https://db.satnogs.org/static/img/sat_purple.png',
      },
      {
        id: '2',
        name: 'YAOGAN 21',
        satelliteId: 'BKKD-5439-2128-1382-0085',
        transmittersNo: '1',
        dataFrames: 1,
        latestDataTimeStamp: '2024-02-03 19:24:37',
        latestDataSubmitter: 'SA2KNG S-Band',
        flag: 'https://img.theculturetrip.com/wp-content/uploads/2017/12/ottoman_flag_alternative-svg_.png',
        image: 'https://db-satnogs.freetls.fastly.net/media/satellites/CartoSat2_AutoB.jpeg',
      },
      {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'https://pixy.org/src/31/318328.png',
        image: 'https://db-satnogs.freetls.fastly.net/media/satellites/EZGDrJzwQDioIuD0YSbX_Lume-1.jpeg',
      },
      {
        id: '2',
        name: 'YAOGAN 21',
        satelliteId: 'BKKD-5439-2128-1382-0085',
        transmittersNo: '1',
        dataFrames: 1,
        latestDataTimeStamp: '2024-02-03 19:24:37',
        latestDataSubmitter: 'SA2KNG S-Band',
        flag: 'https://freepngclipart.com/download/italian/10363-italian-flag-free-download-png.png',
        image: 'https://db-satnogs.freetls.fastly.net/media/satellites/CIRBE_mission_logo.png',
      }, {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'https://img.theculturetrip.com/wp-content/uploads/2017/12/ottoman_flag_alternative-svg_.png',
        image: 'https://db.satnogs.org/static/img/sat_purple.png',
      },
      {
        id: '2',
        name: 'YAOGAN 21',
        satelliteId: 'BKKD-5439-2128-1382-0085',
        transmittersNo: '1',
        dataFrames: 1,
        latestDataTimeStamp: '2024-02-03 19:24:37',
        latestDataSubmitter: 'SA2KNG S-Band',
        flag: 'https://pixy.org/src/31/318328.png',
        image: 'https://db-satnogs.freetls.fastly.net/media/satellites/CartoSat2_AutoB.jpeg',
      }, {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'https://freepngclipart.com/download/italian/10363-italian-flag-free-download-png.png',
        image: 'https://db-satnogs.freetls.fastly.net/media/satellites/CartoSat2_AutoB.jpeg',
      },
      {
        id: '2',
        name: 'YAOGAN 21',
        satelliteId: 'BKKD-5439-2128-1382-0085',
        transmittersNo: '1',
        dataFrames: 1,
        latestDataTimeStamp: '2024-02-03 19:24:37',
        latestDataSubmitter: 'SA2KNG S-Band',
        flag: 'https://img.theculturetrip.com/wp-content/uploads/2017/12/ottoman_flag_alternative-svg_.png',
        image: 'https://db-satnogs.freetls.fastly.net/media/satellites/CIRBE_mission_logo.png',
      }, {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'https://pixy.org/src/31/318328.png',
        image: 'https://db.satnogs.org/static/img/sat_purple.png',
      },
      {
        id: '2',
        name: 'YAOGAN 21',
        satelliteId: 'BKKD-5439-2128-1382-0085',
        transmittersNo: '1',
        dataFrames: 1,
        latestDataTimeStamp: '2024-02-03 19:24:37',
        latestDataSubmitter: 'SA2KNG S-Band',
        flag: 'https://freepngclipart.com/download/italian/10363-italian-flag-free-download-png.png',
        image: 'https://db-satnogs.freetls.fastly.net/media/satellites/CartoSat2_AutoB.jpeg',
      }, {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'https://img.theculturetrip.com/wp-content/uploads/2017/12/ottoman_flag_alternative-svg_.png',
        image: 'https://db-satnogs.freetls.fastly.net/media/satellites/CIRBE_mission_logo.png',
      },
      {
        id: '2',
        name: 'YAOGAN 21',
        satelliteId: 'BKKD-5439-2128-1382-0085',
        transmittersNo: '1',
        dataFrames: 1,
        latestDataTimeStamp: '2024-02-03 19:24:37',
        latestDataSubmitter: 'SA2KNG S-Band',
        flag: 'https://pixy.org/src/31/318328.png',
        image: 'bamboo-watch.jpg',
      }, {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'bamboo-watch.jpg',
        image: 'bamboo-watch.jpg',
      },
      {
        id: '2',
        name: 'YAOGAN 21',
        satelliteId: 'BKKD-5439-2128-1382-0085',
        transmittersNo: '1',
        dataFrames: 1,
        latestDataTimeStamp: '2024-02-03 19:24:37',
        latestDataSubmitter: 'SA2KNG S-Band',
        flag: 'bamboo-watch.jpg',
        image: 'bamboo-watch.jpg',
      }, {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'bamboo-watch.jpg',
        image: 'bamboo-watch.jpg',
      },
      {
        id: '2',
        name: 'YAOGAN 21',
        satelliteId: 'BKKD-5439-2128-1382-0085',
        transmittersNo: '1',
        dataFrames: 1,
        latestDataTimeStamp: '2024-02-03 19:24:37',
        latestDataSubmitter: 'SA2KNG S-Band',
        flag: 'bamboo-watch.jpg',
        image: 'bamboo-watch.jpg',
      },
      {
        id: '1',
        name: 'OSIRIS-REX',
        satelliteId: 'NHAY-0435-9418-4638-8332',
        transmittersNo: '0',
        dataFrames: 0,
        latestDataTimeStamp: '',
        latestDataSubmitter: '',
        flag: 'bamboo-watch.jpg',
        image: 'bamboo-watch.jpg',
      }
    ];
  }

  getNewSatellitesSmall() {
    return Promise.resolve(this.getNewSatellitesData().slice(0, 10));
  }


  getContributerDatas() {
    return [
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      }, {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
      {
        id: '1',
        contributorName: 'Yaogan 4',
        framesNo: 5,
      },
    ];
  }

  getContributerDatasSmall() {
    return Promise.resolve(this.getContributerDatas().slice(0, 10));
  }
}

