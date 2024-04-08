


export const GNBService = {
  getTreeNodesData() {
    return [
      {
        key: '0',
        label: '업체 관리',
        data: '업체 관리',
        icon: 'pi pi-fw pi-calendar',
        children: [
          {
            key: '1-0',
            label: '화주 관리',
            icon: 'pi pi-fw pi-calendar-plus',
            data: '화주 관리',
          },
          {
            key: '1-1',
            label: '운송사 관리',
            icon: 'pi pi-fw pi-calendar-plus',
            data: '운송사 관리',
          },
          {
            key: '1-2',
            label: '포워더 관리',
            icon: 'pi pi-fw pi-calendar-plus',
            data: '포워더 관리',
          },
        ],
      },
      {
        key: '1',
        label: '이용자 관리',
        data: '이용자 관리',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        key: '2',
        label: '서비스 관리',
        data: '서비스 관리',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        key: '3',
        label: '마스터 관리',
        data: '마스터 관리',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        key: '4',
        label: 'Util',
        data: 'Util',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        key: '5',
        label: '로그',
        data: '로그',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        key: '6',
        label: '플랫폼 관리',
        data: '플랫폼 관리',
        icon: 'pi pi-fw pi-calendar',
      },
    ];
  },
  getGNBServiceData() {

    return [
      {
        label: '대시보드',
        icon: 'pi pi-link',
        route: '/theming'
      },
      {
        key: '1',
        label: '업체관리',
        icon: 'pi pi-palette',
        items: [
          {
            label: '화주 관리',
            icon: 'pi pi-eraser',
            route: '/client'
          },
          {
            label: '운송사 관리',
            icon: 'pi pi-heart',
            route: '/carrier'
          },
          {
            label: '포워더 관리',
            icon: 'pi pi-heart',
            route: '/carrier'
          }
        ]
      },
      {
        key: '2',
        label: '이용자 관리',
        icon: 'pi pi-home',
        items: [
          {
            label: '화주 이용자 관리',
            icon: 'pi pi-star',
            route: '/'
          },
          {
            label: '운송사 이용자 관리',
            icon: 'pi pi-bookmark',
            url: '/'
          },
          {
            label: '포워더 이용자 관리',
            icon: 'pi pi-bookmark',
            url: '/'
          },
          {
            label: '드라이버 이용자 관리',
            icon: 'pi pi-bookmark',
            url: '/'
          }
        ]
      }
    ]
  },
  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
  getGNBServiceNodes() {
    return Promise.resolve(this.getGNBServiceData());
  }
};
