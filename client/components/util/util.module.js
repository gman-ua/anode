'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('anodeApp.util', [])
  .factory('Util', UtilService)
  .name;
