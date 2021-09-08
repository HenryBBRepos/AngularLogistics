/** Driver Trip */
export interface Trip {
  startingPoint: string;
  destinationPoint: string;
  tripDate: string;
  customerName: string;
  rating: number;
}

/**
 * Logging Level
 */
export enum LoggingLevel {
  NONE= 'None',
  VERBOSE= 'Verbose',
  INFO= 'Info',
  ERROR= 'error'
}

// tslint:disable-next-line:jsdoc-format
/** Navigation Menu **/
export interface Menu {
  iconName: string;
  menuName: string;
  active: boolean;
  link?: string;
}

// tslint:disable-next-line:jsdoc-format
/** Invoice Model **/
export interface Invoice {
  ownerName: string;
  price: string;
  ref: string;
  date: any;
}

/**
 * Notification Model
 */
export interface NotificationModel {
  notificationId: string;
  title: string;
  message: string;
  notificationDateTime: any;
}

/**
 * Field Monitor
 */
export interface FieldMonitor {
  name: string;
  email: string;
  phonenumber: string;
  status: string;
}

// tslint:disable-next-line:jsdoc-format
/** Navigation Menu **/
export interface FmoMenu {
  iconName: string;
  menuName: string;
  active: boolean;
  link?: string;
}
