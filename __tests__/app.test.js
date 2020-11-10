require('dotenv').config();

const { mungedLocation, mungedWeather, mungedTrail, mungedYelp } = require('../utils.js');

const rawTrails = require('../data/trails');
const rawYelp = require('../data/yelp');

describe('app routes', () => {
  describe('routes', () => {

    test('returns munged location', async() => {

      const oldLocation = [
        {
          'place_id': '282983083',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'relation',
          'osm_id': '186579',
          'boundingbox': [
            '45.432536',
            '45.6528812',
            '-122.8367489',
            '-122.4720252'
          ],
          'lat': '45.5202471',
          'lon': '-122.6741949',
          'display_name': 'Portland, Multnomah County, Oregon, USA',
          'class': 'place',
          'type': 'city',
          'importance': 0.75356571743377,
          'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
        }
      ];

      const expectation = {
        formatted_query: 'Portland, Multnomah County, Oregon, USA',
        latitude: '45.5202471',
        longitude: '-122.6741949'
      };

      const result = mungedLocation(oldLocation);
      expect(result).toEqual(expectation);
    });

    test('returns munged weather', async() => {

      const rawWeather = {
        'data': [
          {
            'moonrise_ts': 1588728093,
            'wind_cdir': 'SW',
            'rh': 75,
            'pres': 899.112,
            'high_temp': 15.6,
            'sunset_ts': 1588735301,
            'ozone': 336.647,
            'moon_phase': 0.986614,
            'wind_gust_spd': 9.6,
            'snow_depth': 0,
            'clouds': 27,
            'ts': 1588662060,
            'sunrise_ts': 1588683144,
            'app_min_temp': 3.4,
            'wind_spd': 2.52495,
            'pop': 65,
            'wind_cdir_full': 'southwest',
            'slp': 1018.93,
            'moon_phase_lunation': 0.44,
            'valid_date': '2020-05-05',
            'app_max_temp': 15.6,
            'vis': 23.2905,
            'dewpt': 6.5,
            'snow': 0,
            'uv': 7.86581,
            'weather': {
              'icon': 'c02d',
              'code': 802,
              'description': 'Scattered clouds'
            },
            'wind_dir': 218,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 2.0625,
            'low_temp': 1.2,
            'max_temp': 15.7,
            'moonset_ts': 1588682768,
            'datetime': '2020-05-05',
            'temp': 11,
            'min_temp': 6.7,
            'clouds_mid': 4,
            'clouds_low': 27
          },
          {
            'moonrise_ts': 1588814493,
            'wind_cdir': 'WNW',
            'rh': 81,
            'pres': 905.797,
            'high_temp': 7.8,
            'sunset_ts': 1588821774,
            'ozone': 356.906,
            'moon_phase': 0.998965,
            'wind_gust_spd': 11,
            'snow_depth': 1.2,
            'clouds': 42,
            'ts': 1588748460,
            'sunrise_ts': 1588769462,
            'app_min_temp': -3.6,
            'wind_spd': 3.86452,
            'pop': 30,
            'wind_cdir_full': 'west-northwest',
            'slp': 1029.46,
            'moon_phase_lunation': 0.47,
            'valid_date': '2020-05-06',
            'app_max_temp': 7.8,
            'vis': 22.125,
            'dewpt': 1,
            'snow': 1.5,
            'uv': 7.24427,
            'weather': {
              'icon': 's01d',
              'code': 600,
              'description': 'Light snow'
            },
            'wind_dir': 282,
            'max_dhi': null,
            'clouds_hi': 2,
            'precip': 0.125,
            'low_temp': 1,
            'max_temp': 7.9,
            'moonset_ts': 1588771019,
            'datetime': '2020-05-06',
            'temp': 4.2,
            'min_temp': 0.9,
            'clouds_mid': 18,
            'clouds_low': 32
          },
          {
            'moonrise_ts': 1588905717,
            'wind_cdir': 'ESE',
            'rh': 54,
            'pres': 905.53,
            'high_temp': 16.5,
            'sunset_ts': 1588908247,
            'ozone': 335.679,
            'moon_phase': 0.98093,
            'wind_gust_spd': 6.10728,
            'snow_depth': 1.2,
            'clouds': 3,
            'ts': 1588834860,
            'sunrise_ts': 1588855781,
            'app_min_temp': -7.4,
            'wind_spd': 1.97043,
            'pop': 0,
            'wind_cdir_full': 'east-southeast',
            'slp': 1024.78,
            'moon_phase_lunation': 0.51,
            'valid_date': '2020-05-07',
            'app_max_temp': 16.5,
            'vis': 24.135,
            'dewpt': -3.9,
            'snow': 0,
            'uv': 8.66809,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 104,
            'max_dhi': null,
            'clouds_hi': 3,
            'precip': 0,
            'low_temp': 1.6,
            'max_temp': 16.6,
            'moonset_ts': 1588859550,
            'datetime': '2020-05-07',
            'temp': 7.3,
            'min_temp': -2.1,
            'clouds_mid': 0,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1588996923,
            'wind_cdir': 'E',
            'rh': 63,
            'pres': 903.49,
            'high_temp': 17.4,
            'sunset_ts': 1588994719,
            'ozone': 327.227,
            'moon_phase': 0.935061,
            'wind_gust_spd': 7.00695,
            'snow_depth': 0.5,
            'clouds': 5,
            'ts': 1588921260,
            'sunrise_ts': 1588942103,
            'app_min_temp': -0.9,
            'wind_spd': 3.21812,
            'pop': 0,
            'wind_cdir_full': 'east',
            'slp': 1020.31,
            'moon_phase_lunation': 0.54,
            'valid_date': '2020-05-08',
            'app_max_temp': 17.4,
            'vis': 24.135,
            'dewpt': 2.6,
            'snow': 0,
            'uv': 8.72345,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 96,
            'max_dhi': null,
            'clouds_hi': 5,
            'precip': 0,
            'low_temp': 5.5,
            'max_temp': 17.4,
            'moonset_ts': 1588948469,
            'datetime': '2020-05-08',
            'temp': 10,
            'min_temp': 3.1,
            'clouds_mid': 0,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1589087965,
            'wind_cdir': 'E',
            'rh': 65,
            'pres': 901.822,
            'high_temp': 19.8,
            'sunset_ts': 1589081190,
            'ozone': 326.126,
            'moon_phase': 0.866098,
            'wind_gust_spd': 5.82249,
            'snow_depth': 0,
            'clouds': 65,
            'ts': 1589007660,
            'sunrise_ts': 1589028425,
            'app_min_temp': 2.1,
            'wind_spd': 3.11737,
            'pop': 0,
            'wind_cdir_full': 'east',
            'slp': 1017.94,
            'moon_phase_lunation': 0.57,
            'valid_date': '2020-05-09',
            'app_max_temp': 19,
            'vis': 24.135,
            'dewpt': 5.1,
            'snow': 0,
            'uv': 6.59537,
            'weather': {
              'icon': 'c03d',
              'code': 803,
              'description': 'Broken clouds'
            },
            'wind_dir': 93,
            'max_dhi': null,
            'clouds_hi': 65,
            'precip': 0,
            'low_temp': 7.8,
            'max_temp': 19.9,
            'moonset_ts': 1589037842,
            'datetime': '2020-05-09',
            'temp': 12.2,
            'min_temp': 5.5,
            'clouds_mid': 0,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1589178640,
            'wind_cdir': 'E',
            'rh': 59,
            'pres': 897.643,
            'high_temp': 13.3,
            'sunset_ts': 1589167662,
            'ozone': 327.314,
            'moon_phase': 0.780036,
            'wind_gust_spd': 13.0005,
            'snow_depth': 0,
            'clouds': 89,
            'ts': 1589094060,
            'sunrise_ts': 1589114749,
            'app_min_temp': 8.2,
            'wind_spd': 3.49997,
            'pop': 0,
            'wind_cdir_full': 'east',
            'slp': 1012.8,
            'moon_phase_lunation': 0.61,
            'valid_date': '2020-05-10',
            'app_max_temp': 17.7,
            'vis': 24.1351,
            'dewpt': 4.9,
            'snow': 0,
            'uv': 2.74527,
            'weather': {
              'icon': 'c04d',
              'code': 804,
              'description': 'Overcast clouds'
            },
            'wind_dir': 95,
            'max_dhi': null,
            'clouds_hi': 89,
            'precip': 0,
            'low_temp': 6.8,
            'max_temp': 17.9,
            'moonset_ts': 1589127645,
            'datetime': '2020-05-10',
            'temp': 13.1,
            'min_temp': 8.2,
            'clouds_mid': 38,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1589182358,
            'wind_cdir': 'ESE',
            'rh': 51,
            'pres': 893.398,
            'high_temp': 10.3,
            'sunset_ts': 1589254133,
            'ozone': 327.172,
            'moon_phase': 0.683133,
            'wind_gust_spd': 15.7452,
            'snow_depth': 0,
            'clouds': 86,
            'ts': 1589180460,
            'sunrise_ts': 1589201075,
            'app_min_temp': 3.6,
            'wind_spd': 4.26949,
            'pop': 25,
            'wind_cdir_full': 'east-southeast',
            'slp': 1010.27,
            'moon_phase_lunation': 0.64,
            'valid_date': '2020-05-11',
            'app_max_temp': 13.3,
            'vis': 24.135,
            'dewpt': -0.2,
            'snow': 0,
            'uv': 6.23377,
            'weather': {
              'icon': 'c04d',
              'code': 804,
              'description': 'Overcast clouds'
            },
            'wind_dir': 110,
            'max_dhi': null,
            'clouds_hi': 56,
            'precip': 0.3125,
            'low_temp': 6.2,
            'max_temp': 13.7,
            'moonset_ts': 1589217759,
            'datetime': '2020-05-11',
            'temp': 9.6,
            'min_temp': 6.1,
            'clouds_mid': 76,
            'clouds_low': 12
          },
          {
            'moonrise_ts': 1589271840,
            'wind_cdir': 'WSW',
            'rh': 88,
            'pres': 893.07,
            'high_temp': 13.3,
            'sunset_ts': 1589340603,
            'ozone': 353.804,
            'moon_phase': 0.581078,
            'wind_gust_spd': 3.81357,
            'snow_depth': 0,
            'clouds': 99,
            'ts': 1589266860,
            'sunrise_ts': 1589287403,
            'app_min_temp': 0.7,
            'wind_spd': 1.11342,
            'pop': 90,
            'wind_cdir_full': 'west-southwest',
            'slp': 1010.23,
            'moon_phase_lunation': 0.67,
            'valid_date': '2020-05-12',
            'app_max_temp': 10.3,
            'vis': 20.617,
            'dewpt': 5.9,
            'snow': 0,
            'uv': 2.841,
            'weather': {
              'icon': 'r01d',
              'code': 500,
              'description': 'Light rain'
            },
            'wind_dir': 239,
            'max_dhi': null,
            'clouds_hi': 41,
            'precip': 7.375,
            'low_temp': 2.5,
            'max_temp': 14,
            'moonset_ts': 1589308018,
            'datetime': '2020-05-12',
            'temp': 7.9,
            'min_temp': 3.2,
            'clouds_mid': 94,
            'clouds_low': 69
          },
          {
            'moonrise_ts': 1589360730,
            'wind_cdir': 'SSW',
            'rh': 82,
            'pres': 895.89,
            'high_temp': 11.9,
            'sunset_ts': 1589427073,
            'ozone': 355.915,
            'moon_phase': 0.478536,
            'wind_gust_spd': 4.50673,
            'snow_depth': 0,
            'clouds': 95,
            'ts': 1589353260,
            'sunrise_ts': 1589373732,
            'app_min_temp': -1.8,
            'wind_spd': 1.36706,
            'pop': 85,
            'wind_cdir_full': 'south-southwest',
            'slp': 1013.34,
            'moon_phase_lunation': 0.71,
            'valid_date': '2020-05-13',
            'app_max_temp': 13.3,
            'vis': 19.3362,
            'dewpt': 5,
            'snow': 0,
            'uv': 3.54253,
            'weather': {
              'icon': 'r01d',
              'code': 500,
              'description': 'Light rain'
            },
            'wind_dir': 212,
            'max_dhi': null,
            'clouds_hi': 58,
            'precip': 5.125,
            'low_temp': 4.2,
            'max_temp': 15.3,
            'moonset_ts': 1589398287,
            'datetime': '2020-05-13',
            'temp': 8.2,
            'min_temp': 2.3,
            'clouds_mid': 60,
            'clouds_low': 31
          },
          {
            'moonrise_ts': 1589449146,
            'wind_cdir': 'SSW',
            'rh': 89,
            'pres': 895.601,
            'high_temp': 16.7,
            'sunset_ts': 1589513542,
            'ozone': 346.105,
            'moon_phase': 0.379155,
            'wind_gust_spd': 6.70056,
            'snow_depth': 0,
            'clouds': 100,
            'ts': 1589439660,
            'sunrise_ts': 1589460063,
            'app_min_temp': 2.8,
            'wind_spd': 1.46241,
            'pop': 85,
            'wind_cdir_full': 'south-southwest',
            'slp': 1012.69,
            'moon_phase_lunation': 0.74,
            'valid_date': '2020-05-14',
            'app_max_temp': 11.9,
            'vis': 18.2868,
            'dewpt': 7.3,
            'snow': 0,
            'uv': 2.64254,
            'weather': {
              'icon': 'r01d',
              'code': 500,
              'description': 'Light rain'
            },
            'wind_dir': 200,
            'max_dhi': null,
            'clouds_hi': 92,
            'precip': 6.625,
            'low_temp': 4.2,
            'max_temp': 12,
            'moonset_ts': 1589488491,
            'datetime': '2020-05-14',
            'temp': 9.1,
            'min_temp': 4.2,
            'clouds_mid': 100,
            'clouds_low': 41
          },
          {
            'moonrise_ts': 1589537216,
            'wind_cdir': 'WSW',
            'rh': 73,
            'pres': 899.443,
            'high_temp': 7.6,
            'sunset_ts': 1589600010,
            'ozone': 342.685,
            'moon_phase': 0.285905,
            'wind_gust_spd': 3.23001,
            'snow_depth': 0,
            'clouds': 94,
            'ts': 1589526060,
            'sunrise_ts': 1589546396,
            'app_min_temp': 0.3,
            'wind_spd': 1.96788,
            'pop': 15,
            'wind_cdir_full': 'west-southwest',
            'slp': 1016.71,
            'moon_phase_lunation': 0.78,
            'valid_date': '2020-05-15',
            'app_max_temp': 16.7,
            'vis': 24.1351,
            'dewpt': 4.9,
            'snow': 0,
            'uv': 1.34461,
            'weather': {
              'icon': 'c04d',
              'code': 804,
              'description': 'Overcast clouds'
            },
            'wind_dir': 241,
            'max_dhi': null,
            'clouds_hi': 88,
            'precip': 0.1875,
            'low_temp': 4.7,
            'max_temp': 18.3,
            'moonset_ts': 1589578618,
            'datetime': '2020-05-15',
            'temp': 10.5,
            'min_temp': 4.2,
            'clouds_mid': 0,
            'clouds_low': 34
          },
          {
            'moonrise_ts': 1589625052,
            'wind_cdir': 'S',
            'rh': 85,
            'pres': 893.515,
            'high_temp': 10.1,
            'sunset_ts': 1589686478,
            'ozone': 346.633,
            'moon_phase': 0.201454,
            'wind_gust_spd': 2.70688,
            'snow_depth': 0,
            'clouds': 100,
            'ts': 1589612460,
            'sunrise_ts': 1589632731,
            'app_min_temp': 8.7,
            'wind_spd': 1.79772,
            'pop': 80,
            'wind_cdir_full': 'south',
            'slp': 1009.77,
            'moon_phase_lunation': 0.81,
            'valid_date': '2020-05-16',
            'app_max_temp': 10.9,
            'vis': 14.6594,
            'dewpt': 7.3,
            'snow': 0,
            'uv': 1.25916,
            'weather': {
              'icon': 'r04d',
              'code': 520,
              'description': 'Light shower rain'
            },
            'wind_dir': 191,
            'max_dhi': null,
            'clouds_hi': 96,
            'precip': 4.5,
            'low_temp': 6,
            'max_temp': 19.4,
            'moonset_ts': 1589668689,
            'datetime': '2020-05-16',
            'temp': 9.8,
            'min_temp': 7,
            'clouds_mid': 99,
            'clouds_low': 32
          },
          {
            'moonrise_ts': 1589712747,
            'wind_cdir': 'WSW',
            'rh': 98,
            'pres': 894.563,
            'high_temp': 14.3,
            'sunset_ts': 1589772945,
            'ozone': 358.214,
            'moon_phase': 0.128436,
            'wind_gust_spd': 6.80768,
            'snow_depth': 0,
            'clouds': 100,
            'ts': 1589698860,
            'sunrise_ts': 1589719067,
            'app_min_temp': 3.1,
            'wind_spd': 1.92786,
            'pop': 85,
            'wind_cdir_full': 'west-southwest',
            'slp': 1011.93,
            'moon_phase_lunation': 0.84,
            'valid_date': '2020-05-17',
            'app_max_temp': 3.8,
            'vis': 8.44974,
            'dewpt': 6.4,
            'snow': 0,
            'uv': 1.26003,
            'weather': {
              'icon': 'r01d',
              'code': 500,
              'description': 'Light rain'
            },
            'wind_dir': 256,
            'max_dhi': null,
            'clouds_hi': 77,
            'precip': 6.875,
            'low_temp': 3.1,
            'max_temp': 8.3,
            'moonset_ts': 1589758747,
            'datetime': '2020-05-17',
            'temp': 6.7,
            'min_temp': 3.1,
            'clouds_mid': 60,
            'clouds_low': 100
          },
          {
            'moonrise_ts': 1589800375,
            'wind_cdir': 'W',
            'rh': 91,
            'pres': 895.728,
            'high_temp': 8.7,
            'sunset_ts': 1589859411,
            'ozone': 360.942,
            'moon_phase': 0.0695314,
            'wind_gust_spd': 2.80995,
            'snow_depth': 0,
            'clouds': 98,
            'ts': 1589785260,
            'sunrise_ts': 1589805405,
            'app_min_temp': 0.3,
            'wind_spd': 1.66064,
            'pop': 40,
            'wind_cdir_full': 'west',
            'slp': 1014.07,
            'moon_phase_lunation': 0.88,
            'valid_date': '2020-05-18',
            'app_max_temp': 7.6,
            'vis': 14.011,
            'dewpt': 4.4,
            'snow': 0,
            'uv': 1.26794,
            'weather': {
              'icon': 'c04d',
              'code': 804,
              'description': 'Overcast clouds'
            },
            'wind_dir': 280,
            'max_dhi': null,
            'clouds_hi': 10,
            'precip': 0.625,
            'low_temp': 4.2,
            'max_temp': 8.7,
            'moonset_ts': 1589848836,
            'datetime': '2020-05-18',
            'temp': 5.9,
            'min_temp': 4.2,
            'clouds_mid': 0,
            'clouds_low': 97
          },
          {
            'moonrise_ts': 1589888002,
            'wind_cdir': 'WNW',
            'rh': 85,
            'pres': 894.548,
            'high_temp': 10.7,
            'sunset_ts': 1589945877,
            'ozone': 360.941,
            'moon_phase': 0.0273699,
            'wind_gust_spd': 2.5171,
            'snow_depth': 0,
            'clouds': 98,
            'ts': 1589871660,
            'sunrise_ts': 1589891745,
            'app_min_temp': 0.9,
            'wind_spd': 1.30485,
            'pop': 25,
            'wind_cdir_full': 'west-northwest',
            'slp': 1012.36,
            'moon_phase_lunation': 0.91,
            'valid_date': '2020-05-19',
            'app_max_temp': 10.1,
            'vis': 12.4223,
            'dewpt': 4.7,
            'snow': 0,
            'uv': 1.3564,
            'weather': {
              'icon': 'c04d',
              'code': 804,
              'description': 'Overcast clouds'
            },
            'wind_dir': 287,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0.3125,
            'low_temp': 4.5,
            'max_temp': 10.7,
            'moonset_ts': 1589938991,
            'datetime': '2020-05-19',
            'temp': 7.4,
            'min_temp': 4.5,
            'clouds_mid': 0,
            'clouds_low': 98
          },
          {
            'moonrise_ts': 1589975693,
            'wind_cdir': 'WNW',
            'rh': 78,
            'pres': 896.53,
            'high_temp': 14.4,
            'sunset_ts': 1590032341,
            'ozone': 344.487,
            'moon_phase': 0.00431868,
            'wind_gust_spd': 2.3072,
            'snow_depth': 0,
            'clouds': 90,
            'ts': 1589958060,
            'sunrise_ts': 1589978088,
            'app_min_temp': 2.6,
            'wind_spd': 1.54002,
            'pop': 20,
            'wind_cdir_full': 'west-northwest',
            'slp': 1013.75,
            'moon_phase_lunation': 0.94,
            'valid_date': '2020-05-20',
            'app_max_temp': 14.3,
            'vis': 12.4689,
            'dewpt': 6,
            'snow': 0,
            'uv': 1.72424,
            'weather': {
              'icon': 'c04d',
              'code': 804,
              'description': 'Overcast clouds'
            },
            'wind_dir': 285,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0.0625,
            'low_temp': 9.5,
            'max_temp': 14.4,
            'moonset_ts': 1590029224,
            'datetime': '2020-05-20',
            'temp': 10.2,
            'min_temp': 6,
            'clouds_mid': 0,
            'clouds_low': 90
          }
        ],
        'city_name': 'Idanha',
        'lon': -122,
        'timezone': 'America/Los_Angeles',
        'lat': 45,
        'country_code': 'US',
        'state_code': 'OR'
      };

      const expectation = [
        {
          forecast: 'Scattered clouds',
          time: '2020-05-05',
        },
        {
          forecast: 'Light snow',
          time: '2020-05-06',
        },
        {
          forecast: 'Few clouds',
          time: '2020-05-07',
        },
        {
          forecast: 'Few clouds',
          time: '2020-05-08',
        },
        {
          forecast: 'Broken clouds',
          time: '2020-05-09',
        },
        {
          forecast: 'Overcast clouds',
          time: '2020-05-10',
        },
        {
          forecast: 'Overcast clouds',
          time: '2020-05-11',
        },
        {
          forecast: 'Light rain',
          time: '2020-05-12',
        },
      ];

      const result = mungedWeather(rawWeather);
      expect(result).toEqual(expectation);
    });

    test('returns munged trails', async() => {

      const expectation = [
        {
          'condition_date': '2020-11-08',
          'condition_time': '12:37:17',
          'conditions': 'All Clear',
          'length': 8.9,
          'location': 'Stanley, Virginia',
          'name': 'Old Rag Loop',
          'star_votes': 238,
          'stars': 4.8,
          'summary': 'An extremely popular hike, and for good reason, with awesome scrambling and stunning views.',
          'trail_url': 'https://www.hikingproject.com/trail/7005428/old-rag-loop',
        },
        {
          'condition_date': '2020-10-17',
          'condition_time': '11:27:04',
          'conditions': 'All Clear',
          'length': 8.2,
          'location': 'Stanley, Virginia',
          'name': 'Whiteoak Canyon to Cedar Run Loop',
          'star_votes': 120,
          'stars': 4.7,
          'summary': 'Among the best hikes --if not the best hike-- in Shenandoah. Enjoy waterfalls for 9 miles.',
          'trail_url': 'https://www.hikingproject.com/trail/7013220/whiteoak-canyon-to-cedar-run-loop',
        },
        {
          'condition_date': '2020-10-13',
          'condition_time': '09:10:35',
          'conditions': 'Minor Issues',
          'length': 19.6,
          'location': 'Davis, West Virginia',
          'name': 'Dolly Sods Wilderness',
          'star_votes': 50,
          'stars': 4.7,
          'summary': 'A great multi-night, long-weekend trip with amazing views and incredible changes in terrain',
          'trail_url': 'https://www.hikingproject.com/trail/7005081/dolly-sods-wilderness',
        },
        {
          'condition_date': '2020-11-08',
          'condition_time': '13:46:17',
          'conditions': 'All Clear',
          'length': 13.4,
          'location': 'Nellysford, Virginia',
          'name': 'Three Ridges Loop Trail',
          'star_votes': 61,
          'stars': 4.6,
          'summary': 'This route follows a beautiful ridge line trail then drops down in a valley featuring a series of waterfalls.',
          'trail_url': 'https://www.hikingproject.com/trail/7025566/three-ridges-loop-trail',
        },
        {
          'condition_date': '2020-10-14',
          'condition_time': '13:52:13',
          'conditions': 'All Clear',
          'length': 7.4,
          'location': 'Salem, Virginia',
          'name': 'McAfee Knob',
          'star_votes': 59,
          'stars': 4.7,
          'summary': 'The Knob has a panorama of the Catawba Valley, North Mountain, Tinker Cliffs, and Roanoke Valley.',
          'trail_url': 'https://www.hikingproject.com/trail/7013520/mcafee-knob',
        },
        {
          'condition_date': '2020-10-31',
          'condition_time': '13:05:10',
          'conditions': 'Minor Issues',
          'length': 3.8,
          'location': 'Stanley, Virginia',
          'name': 'Rose River Loop',
          'star_votes': 60,
          'stars': 4.3,
          'summary': 'For most of this loop hike, you\'ll be in one of SNP\'s federally designated wilderness areas.',
          'trail_url': 'https://www.hikingproject.com/trail/7015928/rose-river-loop',
        },
        {
          'condition_date': '2020-11-05',
          'condition_time': '07:39:40',
          'conditions': 'All Clear',
          'length': 8,
          'location': 'Myersville, Maryland',
          'name': 'AT: Annapolis Rock and Black Rock',
          'star_votes': 50,
          'stars': 4.3,
          'summary': 'A well-marked section of the Appalachian Trail AT that has two great views.',
          'trail_url': 'https://www.hikingproject.com/trail/7010754/at-annapolis-rock-and-black-rock',
        },
        {
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': 'Unknown',
          'length': 34.8,
          'location': 'Salem, Virginia',
          'name': 'Virginia\'s Triple Crown Loop',
          'star_votes': 32,
          'stars': 4.8,
          'summary': 'A 35-mile loop featuring McAfee Knob , Dragon\'s Tooth, and Tinker Cliffs!',
          'trail_url': 'https://www.hikingproject.com/trail/7040017/virginias-triple-crown-loop',
        },
        {
          'condition_date': '2020-10-25',
          'condition_time': '11:12:34',
          'conditions': 'All Clear',
          'length': 4.5,
          'location': 'Fayetteville, West Virginia',
          'name': 'Endless Wall Trail',
          'star_votes': 39,
          'stars': 4.5,
          'summary': 'Sandstone walls provide a striking backdrop for this hike along the New River Gorge.',
          'trail_url': 'https://www.hikingproject.com/trail/7017640/endless-wall-trail',
        },
        {
          'name': 'Humpback Rocks',
          'location': 'Nellysford, Virginia',
          'length': 1.8,
          'stars': 4.4,
          'star_votes': 43,
          'summary': 'A steady climb from wide gravel path to narrow forest singletrack. Stunning 360 views from the top!',
          'trail_url': 'https://www.hikingproject.com/trail/7005865/humpback-rocks',
          'conditions': 'All Clear',
          'condition_date': '2020-10-30',
          'condition_time': '19:28:51',
        },
      ];

      const result = mungedTrail(rawTrails);
      expect(result).toEqual(expectation);
    });


    // test('returns munged yelp', async() => {

    //   const expectation = [

    //   ];

    //   const result = mungedYelp(rawYelp);
    //   expect(result).toEqual(expectation);
    // });


  });
});

