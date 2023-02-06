// Original file: proto/hello_service.proto

import type { _language_Language_Code, _language_Language_Code__Output } from './language/Language';

export interface GreetRequest {
  'name'?: (string);
  'language_code'?: (_language_Language_Code);
}

export interface GreetRequest__Output {
  'name': (string);
  'language_code': (_language_Language_Code__Output);
}
