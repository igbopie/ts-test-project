import Application from 'ts-test-project/app';
import config from 'ts-test-project/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
