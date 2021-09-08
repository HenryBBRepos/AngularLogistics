export const common = {
  en: {
    app: {
      login: {},
      dashboard: {
        home: {
          welcomeCard: {
            title: 'Welcome Back',
            subTitle: 'What do you want to do?',
            scanBtnContent: 'Scan',
            searchBtnContent: 'Search'
          },
          driverAndRegistrationCard: {
            title: 'Drivers and Vehicles Registration',
            subTitle: 'Expand our driver members and vehicles by registering new one',
            registerNewDriverBtnContent: 'Register New Driver',
            registerNewVehicleBtnContent: 'Register New Vehicle'
          },
        
        },
        menu: [
          {iconName: 'home_ic', menuName: 'Home', active: false, link: '/app/dashboard'},
          {iconName: 'driver_ic', menuName: 'Drivers', active: false, link: '/app/d/drivers'},
          {iconName: 'vehicles_ic', menuName: 'Vehicles', active: false, link: '/app/v/vehicles'},
          {iconName: 'tracking_ic', menuName: 'Tracking', active: false, link: '/app/t/tracking'},
          {iconName: 'route_ic', menuName: 'Routing Planning', active: false, link: '/app/r/route-planner'},
          {iconName: 'invoices_ic', menuName: 'Invoices', active: false, link: '/app/i/invoice'},
          {iconName: 'report_ic', menuName: 'Reports', active: false, link: '/app/rpt/report'},
          {iconName: 'settings_ic', menuName: 'Settings', active: false, link: '/app/settings/home'}
        ],
        settings: {
          menu: [
            {iconName: '', menuName: 'Edit Profile', active: true, link: '/app/settings/home/profile'},
            {iconName: '', menuName: 'Reset Password', active: false, link: '/app/settings/home/reset-password'},
            {iconName: '', menuName: 'Field Monitor Officers', active: false, link: '/app/settings/home/field-monitors'},
            {iconName: '', menuName: 'Notifications', active: false, link: '/app/settings/home/notifications'},
            {iconName: '', menuName: 'About Software', active: false, link: '/app/settings/home/about'},
            {iconName: '', menuName: 'Help and Support', active: false, link: '/app/settings/home/help'}
          ]
        },
        fmomenu: [
          {iconName: 'home_ic', menuName: 'Home', active: false, link: '/officer/dashboard'},
          {iconName: 'driver_ic', menuName: 'Drivers', active: false, link: '/officer/driver/fmo-drivers'},
          {iconName: 'vehicles_ic', menuName: 'Vehicles', active: false, link: '/officer/vehicle/fmo-vehicles'},
          {iconName: 'settings_ic', menuName: 'Settings', active: false, link: '/officer/settings/home'}

        ]
      }
    }
  }
};
