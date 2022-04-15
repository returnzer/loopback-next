export interface XIBMAPIConnectWSDL {
  'package-version': string;
  options: object;
  info: Details[];
  warning: Details[];
  error: Details[];
}

interface Details {
  message: string;
}